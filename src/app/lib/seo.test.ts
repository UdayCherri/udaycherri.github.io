import { describe, it, expect } from "vitest";
import { isValidExternalUrl } from "./seo";

describe("isValidExternalUrl", () => {
  it("accepts https URLs", () => {
    expect(isValidExternalUrl("https://github.com/UdayCherri")).toBe(true);
  });

  it("rejects '#' placeholders", () => {
    expect(isValidExternalUrl("#")).toBe(false);
    expect(isValidExternalUrl(" # ")).toBe(false);
  });

  it("rejects empty, relative, and non-http URLs", () => {
    expect(isValidExternalUrl("")).toBe(false);
    expect(isValidExternalUrl("/project/foo")).toBe(false);
    expect(isValidExternalUrl("javascript:alert(1)")).toBe(false);
    expect(isValidExternalUrl(undefined)).toBe(false);
  });
});
