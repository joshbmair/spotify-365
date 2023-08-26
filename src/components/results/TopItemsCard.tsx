import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import { ItemList } from "@/lib/types";

interface Props {
  items: ItemList;
  itemType: string;
}

export default function TopItemsCard(props: Props): JSX.Element {
  const { items, itemType } = props;
  const [itemList, setItemList] = useState<string[]>([]);

  useEffect(() => {
    if (!items.items) {
      return;
    } else if (items.items.length === 0) {
      return;
    }

    setItemList(getItemList(items));
  }, [items]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Top {itemType}s</Card.Title>
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
