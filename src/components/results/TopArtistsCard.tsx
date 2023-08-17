import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import { Artist, ArtistList } from "@/lib/types";

interface Props {
  artists: ArtistList;
}

export default function TopArtistsCard(props: Props): JSX.Element {
  const { artists } = props;
  const [artistList, setArtistList] = useState<string[]>([]);

  useEffect(() => {
    setArtistList(getArtistList(artists));
  }, [artists]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Top Artists</Card.Title>
        {artistList.length > 0 ? (
          <ol>
            {artistList.map((artist, index) => {
              return <li key={index}>{artist}</li>;
            })}
          </ol>
        ) : (
          "Loading top artists..."
        )}
      </Card.Body>
    </Card>
  );
}

function getArtistList(artists: ArtistList): string[] {
  if (!artists.items) {
    return [];
  }
  return artists.items.map((artist: Artist) => {
    return artist.name;
  });
}
