import { BASE_URL, CLIENT_ID, SPOTIFY_API_BASE_URL } from "./constants";
import { ArtistList, ItemList, TrackList } from "./types";

export async function getAccessToken(code: string): Promise<string> {
  const params: URLSearchParams = new URLSearchParams();
  params.append("client_id", CLIENT_ID);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", `${BASE_URL}/results`);
  params.append("code_verifier", localStorage.getItem("code_verifier")!);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const { access_token } = await result.json();
  return access_token;
}

export async function getTopArtists(token: string): Promise<ArtistList> {
  return await getTopItem(token, "artists");
}

export async function getTopTracks(token: string): Promise<TrackList> {
  return await getTopItem(token, "tracks");
}

export async function getTopItem(token: string, item: string): Promise<ItemList> {
  const result = await fetch(`${SPOTIFY_API_BASE_URL}/me/top/${item}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return result.json();
}
