export interface Album {
  images: Image[];
}

export interface Artist extends Item {
  images: Image[];
}

export type ArtistList = ItemList;

export interface Image {
  height: number;
  url: string;
  width: string;
}

export interface Item {
  name: string;
}

export interface ItemList {
  items: Item[];
  next: string | null;
}

export interface Track extends Item {
  album: Album;
}

export type TrackList = ItemList;
