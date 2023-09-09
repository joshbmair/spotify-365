import { Image, Track } from "@/lib/types";
import { getLargestImage } from "./helpers";
import TopItemsCard, { TopItemsProps } from "./TopItemsCard";

interface Props {
  tracks: Track[];
}

export default function TracksCard(props: Props): JSX.Element {
  const { tracks } = props;
  const topTrackImage: Image = getLargestImage(tracks[0].album.images);
  const topItemsProps: TopItemsProps = {
    items: tracks,
    title: "Top Artists",
    topItemImage: topTrackImage,
  };

  return <TopItemsCard {...topItemsProps} />;
}
