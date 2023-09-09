import { useEffect, useState } from "react";

import PageLayout from "@/components/PageLayout";
import TopArtistsCard from "@/components/results/TopArtistsCard";
import TopTracksCard from "@/components/results/TopTracksCard";
import { getAccessToken, getTopArtists, getTopTracks } from "@/lib/requests";
import { ArtistList, TrackList } from "@/lib/types";

export default function Results(): JSX.Element {
  const [topArtists, setTopArtists] = useState<ArtistList>({ items: [] });
  const [topTracks, setTopTracks] = useState<TrackList>({ items: [] });

  useEffect((): void => {
    const urlParams: URLSearchParams = new URLSearchParams(
      window.location.search
    );
    const code: string = urlParams.get("code")!;

    getAccessToken(code).then((token) => {
      if (token === "") {
        return;
      }

      getTopArtists(token).then((artists) => setTopArtists(artists));
      getTopTracks(token).then((tracks) => setTopTracks(tracks));
    });
  }, []);

  return (
    <PageLayout siteSubtitle="Results">
      <TopArtistsCard artists={topArtists} />
      <br />
      <TopTracksCard tracks={topTracks} />
    </PageLayout>
  );
}
