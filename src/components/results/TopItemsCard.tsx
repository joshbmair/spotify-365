import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import { Item, ItemList } from "@/lib/types";

interface Props {
  items: ItemList;
}

export default function TopItemsCard(props: Props): JSX.Element {
  const { items } = props;
  const [itemList, setItemList] = useState<string[]>([]);

  useEffect(() => {
    setItemList(getItemList(items));
  }, [items]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Top Items</Card.Title>
        {itemList.length > 0 ? (
          <ol>
            {itemList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ol>
        ) : (
          "Loading items..."
        )}
      </Card.Body>
    </Card>
  );
}

function getItemList(items: ItemList): string[] {
  if (!items.items) {
    return [];
  }
  return items.items.map((item: Item) => {
    return item.name;
  });
}
