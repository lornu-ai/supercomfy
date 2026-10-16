import { describe, expect, it } from "vitest";
import { parseTagIdFromPath, tagDeepLinkPath } from "./index";

describe("tagDeepLinkPath", () => {
  it("builds closet path", () => {
    expect(tagDeepLinkPath("hoodie-demo-01")).toBe("/c/hoodie-demo-01");
  });

  it("rejects invalid ids", () => {
    expect(() => tagDeepLinkPath("bad id")).toThrow(/invalid tag id/);
  });
});

describe("parseTagIdFromPath", () => {
  it("parses valid paths", () => {
    expect(parseTagIdFromPath("/c/hoodie-demo-01")).toBe("hoodie-demo-01");
  });

  it("returns null for other paths", () => {
    expect(parseTagIdFromPath("/shop")).toBeNull();
  });
});
