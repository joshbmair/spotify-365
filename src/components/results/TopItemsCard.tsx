import { Card } from "react-bootstrap";

import styles from "@/components/results/top-items.module.css";
import { Image, Item } from "@/lib/types";
import { ReactNode } from "react";

export interface TopItemsProps {
  children?: ReactNode;
  items: Item[];
  title: string;
  topItemImage: Image;
}

export default function TopItemsCard(props: TopItemsProps): JSX.Element {
  const { items, title, topItemImage, children } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <img className={styles.image} src={topItemImage.url} alt="Top item" />
          <ol>
            {items.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </ol>
          {children}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
