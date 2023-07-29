import { createHash } from "crypto";

export function generateCodeChallenge(): string {
  const codeVerifier: string = generateCodeVerifier(128);

  if (typeof window !== "undefined") {
    window.localStorage.setItem("code_verifier", codeVerifier);
  }

  return base64URLEncode(sha256(codeVerifier));
}

function generateCodeVerifier(length: number) {
  let codeVerifier: string = "";
  let possible: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    codeVerifier += possible.charAt(
      Math.floor(Math.random() * possible.length)
    );
  }

  return codeVerifier;
}

function base64URLEncode(buffer: Buffer): string {
  let base64Buffer: string = buffer.toString("base64");
  return base64Buffer
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function sha256(text: string): Buffer {
  const data: Uint8Array = new TextEncoder().encode(text);
  return createHash("sha256").update(data).digest();
}
