const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const kv = context.env.WAITLIST;
  if (kv) {
    const key = `email:${email}`;
    const existing = await kv.get(key);
    if (!existing) {
      await kv.put(
        key,
        JSON.stringify({ email, at: new Date().toISOString() }),
      );
    }
  }

  return Response.redirect(new URL("/?joined=1#notify", context.request.url), 303);
}
