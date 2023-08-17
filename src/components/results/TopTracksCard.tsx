import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import { Track, TrackList } from "@/lib/types";

interface Props {
  tracks: TrackList;
}

export default function TopTracksCard(props: Props): JSX.Element {
  const { tracks } = props;
  const [trackList, setTrackList] = useState<string[]>([]);

  useEffect(() => {
    setTrackList(getTrackList(tracks));
  }, [tracks]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Top Tracks</Card.Title>
        {trackList.length > 0 ? (
          <ol>
            {trackList.map((track, index) => (
              <li key={index}>{track}</li>
            ))}
          </ol>
        ) : (
          "Loading top tracks..."
        )}
      </Card.Body>
    </Card>
  );
}

function getTrackList(tracks: TrackList): string[] {
  if (!tracks.items) {
    return [];
  }
  return tracks.items?.map((track: Track) => {
    return track.name;
  });
}
