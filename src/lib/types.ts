export interface Item {
  name: string;
}

export type Artist = Item;
export type ArtistList = ItemList;

export interface ItemList {
  items: Item[];
}

export type Track = Item;
export type TrackList = ItemList;
