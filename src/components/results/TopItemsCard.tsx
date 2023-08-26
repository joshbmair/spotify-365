import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import { Artist, Image, Item, Track } from "@/lib/types";
import { ItemList } from "@/lib/types";
import styles from "@/components/results/top-items.module.css";

interface Props {
  items: ItemList;
  itemType: string;
}

export default function TopItemsCard(props: Props): JSX.Element {
  const { items, itemType } = props;
  const [itemList, setItemList] = useState<string[]>([]);
  const [topItemImage, setTopItemImage] = useState<Image>();

  useEffect(() => {
    if (!items.items) {
      return;
    } else if (items.items.length === 0) {
      return;
    }

    setTopItemImage(getTopItemImage(items));
    setItemList(getItemList(items));
  }, [items]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Top {itemType}s</Card.Title>
        {topItemImage && (
          <img className={styles.image} src={topItemImage.url} />
        )}
        {itemList.length > 0 ? (
          <ol>
            {itemList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ol>
        ) : (
          `Loading ${itemType}s...`
        )}
      </Card.Body>
    </Card>
  );
}

function getTopItemImage(topItems: ItemList): Image {
  const topItem: Item = topItems.items[0];

  if ("images" in topItem) {
    return getTopArtistImage(topItem as Artist);
  }
  return getTopTrackImage(topItem as Track);
}

function getTopArtistImage(artist: Artist): Image {
  sortImagesInDescendingOrder(artist.images);
  return artist.images[0];
}

function getTopTrackImage(track: Track): Image {
  sortImagesInDescendingOrder(track.album.images);
  return track.album.images[0];
}

function sortImagesInDescendingOrder(images: Image[]): void {
  images.sort((image1, image2) => {
    return image2.height - image1.height;
  });
}

function getItemList(topItems: ItemList): string[] {
  let itemList: string[] = [];
  for (let i: number = 0; i < topItems.items.length; i++) {
    if (i > 4) {
      break;
    }
    itemList.push(topItems.items[i].name);
  }

  return itemList;
}
