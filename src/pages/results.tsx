import { useEffect, useState } from "react";

import PageLayout from "@/components/PageLayout";
import { getAccessToken, getTopArtists, getTopTracks } from "@/lib/requests";
import { Card } from "react-bootstrap";

export default function Results(): JSX.Element {
  const [topArtists, setTopArtists] = useState<string>(
    "Loading top artists..."
  );
  const [topTracks, setTopTracks] = useState<string>("Loading top tracks...");

  useEffect((): void => {
    const urlParams: URLSearchParams = new URLSearchParams(
      window.location.search
    );
    const code: string = urlParams.get("code")!;

    getAccessToken(code).then((token) => {
      getTopArtists(token).then((artists) =>
        setTopArtists(JSON.stringify(artists))
      );
      getTopTracks(token).then((tracks) =>
        setTopTracks(JSON.stringify(tracks))
      );
    });
  }, []);

  return (
    <PageLayout siteSubtitle="Results">
      <Card>
        <Card.Body>
          <Card.Title>Top artists</Card.Title>
          <Card.Text>{topArtists}</Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Title>Top tracks</Card.Title>
          <Card.Text>{topTracks}</Card.Text>
        </Card.Body>
      </Card>
    </PageLayout>
  );
}
