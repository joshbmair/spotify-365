import { Artist, Image } from "@/lib/types";
import { getLargestImage } from "./helpers";
import TopItemsCard, { TopItemsProps } from "./TopItemsCard";

interface Props {
  artists: Artist[];
}

export default function TopArtistsCard(props: Props): JSX.Element {
  const { artists } = props;
  const topArtistImage: Image = getLargestImage(artists[0].images);
  const topItemsProps: TopItemsProps = {
    items: artists,
    title: "Top Artists",
    topItemImage: topArtistImage,
  };

  return <TopItemsCard {...topItemsProps} />;
}
