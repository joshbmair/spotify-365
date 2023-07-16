import { CLIENT_ID, SPOTIFY_API_BASE_URL } from "./constants";

export async function getAccessToken(code: string): Promise<string> {
  const params: URLSearchParams = new URLSearchParams();
  params.append("client_id", CLIENT_ID);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", window.location.toString());
  params.append("code_verifier", localStorage.getItem("verifier")!);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const { access_token } = await result.json();
  return access_token;
}

export async function getTopArtists(token: string): Promise<string> {
  return await getTopItem(token, "artists");
}

export async function getTopTracks(token: string): Promise<string> {
  return await getTopItem(token, "tracks");
}

export async function getTopItem(token: string, item: string): Promise<string> {
  const result = await fetch(`${SPOTIFY_API_BASE_URL}/me/top/${item}`, {
    method: "GET",
    headers: { Authorization: `"Bearer" ${token}` },
  });
  return result.json();
}
