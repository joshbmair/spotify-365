import { Card } from "react-bootstrap";

import { Artist, Image } from "@/lib/types";
import styles from "./top-items.module.css";

interface Props {
  artists: Artist[];
}

export default function TopArtistsCard(props: Props): JSX.Element {
  const { artists } = props;
  const topArtistImage = getLargestImage(artists[0].images);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Top Artists</Card.Title>
        <Card.Text>
          <img className={styles.image} src={topArtistImage.url} />
          <ol>
            {artists.slice(0, 5).map((artist, index) => {
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
