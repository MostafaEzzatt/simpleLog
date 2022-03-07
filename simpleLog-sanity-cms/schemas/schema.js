import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import posts from "./post";
import tags from "./tags";

import pages from "./page";
import about from "./about";

import iconImage from "./iconImage";
import mainImage from "./mainImage";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([posts, tags, pages, about, iconImage, mainImage]),
});
