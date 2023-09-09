import { Image } from "@/lib/types";

export function getLargestImage(images: Image[]): Image {
  return images.sort(descendingImageSizeOrder)[0];
}

function descendingImageSizeOrder(image1: Image, image2: Image): number {
  return image2.height - image1.height;
}
