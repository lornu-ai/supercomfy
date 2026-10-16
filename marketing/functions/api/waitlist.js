import { sendResendEmail } from "../lib/resend.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SITE = "https://supercomfy.in3rt.net";

function notifyTo(env) {
  return (env.WAITLIST_NOTIFY_TO || "principle@lornu.ai").trim();
}

function buildAdminText(email, meta) {
  return [
    "New #supercomfy waitlist signup",
    "",
    `Email: ${email}`,
    `Site: ${meta.site}`,
    `Time (UTC): ${meta.at}`,
    `IP (best effort): ${meta.ip || "(unknown)"}`,
    `User-Agent: ${meta.userAgent || "(unknown)"}`,
  ].join("\n");
}

function buildSubscriberText(email) {
  return [
    "You're on the list.",
    "",
    "Thanks for joining the Cloud-Shield hoodie waitlist from #supercomfy.",
    "We'll email you about sizing, drop timing, and early access — no spam.",
    "",
    `Page: ${SITE}`,
    "",
    "— Inert Synergies / #supercomfy",
  ].join("\n");
}

export async function onRequestPost(context) {
  const form = await context.request.formData();
  const email = String(form.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return new Response("Please enter a valid email.", { status: 400 });
  }

  const honeypot = String(form.get("_gotcha") ?? "").trim();
  if (honeypot) {
    return Response.redirect(new URL("/?joined=1#notify", context.request.url), 303);
  }

  const at = new Date().toISOString();
  const meta = {
    site: SITE,
    at,
    ip: context.request.headers.get("cf-connecting-ip") || "",
    userAgent: context.request.headers.get("user-agent") || "",
  };

  const kv = context.env.WAITLIST;
  let isNew = true;
  if (kv) {
    const key = `email:${email}`;
    const existing = await kv.get(key);
    if (existing) {
      isNew = false;
    } else {
      await kv.put(key, JSON.stringify({ email, ...meta }));
    }
  }

  if (isNew && context.env.RESEND_API_KEY) {
    const adminTo = notifyTo(context.env);

    const admin = await sendResendEmail(context.env, {
      to: adminTo,
      subject: `#supercomfy waitlist — ${email}`,
      text: buildAdminText(email, meta),
      replyTo: email,
    });

    const welcome = await sendResendEmail(context.env, {
      to: email,
      subject: "You're on the #supercomfy waitlist",
      text: buildSubscriberText(email),
    });

    if (kv && (!admin.ok || !welcome.ok)) {
      await kv.put(
        `notify-error:${email}:${at}`,
        JSON.stringify({
          admin: admin.ok ? "ok" : admin.detail,
          welcome: welcome.ok ? "ok" : welcome.detail,
        }),
        { expirationTtl: 60 * 60 * 24 * 30 },
      );
    }
  }

  return Response.redirect(new URL("/?joined=1#notify", context.request.url), 303);
}
