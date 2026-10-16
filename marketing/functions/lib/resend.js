export const RESEND_EMAILS_URL = "https://api.resend.com/emails";

export const DEFAULT_WAITLIST_FROM =
  "#supercomfy <notify@inertsynergies.com>";

/**
 * @param {{ RESEND_API_KEY?: string; WAITLIST_NOTIFY_FROM?: string }} env
 * @param {{ to: string; subject: string; text: string; replyTo?: string }} message
 */
export async function sendResendEmail(env, message) {
  const key = (env.RESEND_API_KEY || "").trim();
  if (!key) {
    return { ok: false, detail: "resend missing api key" };
  }

  const from = (env.WAITLIST_NOTIFY_FROM || DEFAULT_WAITLIST_FROM).trim();
  const body = {
    from,
    to: [message.to],
    subject: message.subject,
    text: message.text,
  };
  const replyTo = (message.replyTo || "").trim();
  if (replyTo) body.reply_to = replyTo;

  const res = await fetch(RESEND_EMAILS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text();
    return { ok: false, detail: `resend ${res.status}: ${detail.slice(0, 300)}` };
  }
  return { ok: true };
}
