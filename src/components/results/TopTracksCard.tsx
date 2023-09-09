import { Card } from "react-bootstrap";

import TopItemsCard from "./TopItemsCard";
import { Image, Track, TrackList } from "@/lib/types";
import styles from "./top-items.module.css";

interface Props {
  tracks: Track[];
}

export default function TracksCard(props: Props): JSX.Element {
  const { tracks } = props;
  const topTrackImage = getLargestImage(tracks[0].album.images);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Top Tracks</Card.Title>
        <Card.Text>
          <img className={styles.image} src={topTrackImage.url} />
          <ol>
            {tracks.slice(0, 5).map((artist, index) => {
              return <li key={index}>{artist.name}</li>;
            })}
          </ol>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
function getLargestImage(images: Image[]): Image {
  return images.sort(descendingImageSizeOrder)[0];
}

function descendingImageSizeOrder(image1: Image, image2: Image): number {
  return image2.height - image1.height;
}
