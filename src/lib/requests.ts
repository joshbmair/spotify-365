import {
  BASE_URL,
  CLIENT_ID,
  ITEM_COUNT_LIMIT,
  SPOTIFY_API_BASE_URL,
} from "./constants";
import { Artist, Item, ItemList, Track } from "./types";

export async function getAccessToken(code: string): Promise<string> {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: getAccessTokenParams(code),
  });

  if (result.status !== 200) {
    return "";
  }

  const { access_token } = await result.json();
  return access_token;
}

function getAccessTokenParams(code: string): URLSearchParams {
  const params: URLSearchParams = new URLSearchParams();
  params.append("client_id", CLIENT_ID);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", `${BASE_URL}/results`);
  params.append("code_verifier", localStorage.getItem("code_verifier")!);

  return params;
}

export async function getTopArtists(token: string): Promise<Artist[]> {
  return (await getTopItems("artists", token)) as Artist[];
}

export async function getTopTracks(token: string): Promise<Track[]> {
  return (await getTopItems("tracks", token)) as Track[];
}

async function getTopItems(item: string, token: string): Promise<Item[]> {
  const url = new URL(`${SPOTIFY_API_BASE_URL}/me/top/${item}`);
  url.searchParams.append("limit", `${ITEM_COUNT_LIMIT}`);

  const response: ItemList = await sendTopItemRequest(url.toString(), token);
  return response.items;
}

async function sendTopItemRequest(
  url: string,
  token: string
): Promise<ItemList> {
  const result = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return result.json();
}
