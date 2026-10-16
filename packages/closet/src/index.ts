/** NFC/QR tag id → closet deep-link path (no host — caller adds domain). */
export function tagDeepLinkPath(tagId: string): string {
  const id = tagId.trim();
  if (!/^[a-zA-Z0-9_-]{4,64}$/.test(id)) {
    throw new Error("invalid tag id");
  }
  return `/c/${id}`;
}

export function parseTagIdFromPath(pathname: string): string | null {
  const m = /^\/c\/([a-zA-Z0-9_-]{4,64})$/.exec(pathname);
  return m?.[1] ?? null;
}
