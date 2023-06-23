import { createHash, randomBytes } from "crypto";

export function generateCodeChallenge(): string {
  const codeVerifier: string = base64URLEncode(randomBytes(128));
  return base64URLEncode(sha256(codeVerifier));
}

function base64URLEncode(buffer: Buffer): string {
  let base64Buffer: string = buffer.toString("base64");
  return base64Buffer
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function sha256(text: string): Buffer {
  return createHash("sha256").update(text).digest();
}
