import TopItemsCard from "./TopItemsCard";
import { ArtistList } from "@/lib/types";

interface Props {
  artists: ArtistList;
}

export default function TopArtistsCard(props: Props): JSX.Element {
  return <TopItemsCard items={props.artists} />;
}
