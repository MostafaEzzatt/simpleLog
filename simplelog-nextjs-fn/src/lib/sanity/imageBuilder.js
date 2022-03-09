import sanityClient from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export function imageBuilder(source) {
  return builder.image(source);
}
