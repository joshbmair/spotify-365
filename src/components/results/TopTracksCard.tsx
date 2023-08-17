import TopItemsCard from "./TopItemsCard";
import { TrackList } from "@/lib/types";

interface Props {
  tracks: TrackList;
}

export default function TopTracksCard(props: Props): JSX.Element {
  return <TopItemsCard items={props.tracks} itemType="Track" />;
}
