import { useEffect, useState } from "react";

import PageLayout from "@/components/PageLayout";
import TopArtistsCard from "@/components/results/TopArtistsCard";
import TopTracksCard from "@/components/results/TopTracksCard";
import { getAccessToken, getTopArtists, getTopTracks } from "@/lib/requests";
import { Artist, Track } from "@/lib/types";

export default function Results(): JSX.Element {
  const [topArtists, setTopArtists] = useState<Artist[]>([]);
  const [topTracks, setTopTracks] = useState<Track[]>([]);

  useEffect((): void => {
    const urlParams: URLSearchParams = new URLSearchParams(
      window.location.search
    );
    const code: string = urlParams.get("code")!;

    getAccessToken(code).then((token) => {
      if (token === "") {
        return;
      }

      getTopArtists(token).then((artists) =>
        setTopArtists(artists.items as Artist[])
      );
      getTopTracks(token).then((tracks) =>
        setTopTracks(tracks.items as Track[])
      );
    });
  }, []);

  return (
    <PageLayout siteSubtitle="Results">
      {topTracks.length > 0 && <TopTracksCard tracks={topTracks} />}
      <br />
      {topArtists.length > 0 && <TopArtistsCard artists={topArtists} />}
    </PageLayout>
  );
}
