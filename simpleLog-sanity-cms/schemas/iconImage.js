export default {
  name: "iconImage",
  type: "image",
  title: "Icon",
  description: "Icon Must Be 50x50",
  options: { accept: "image/png" },
  validation: (Rule) =>
    Rule.custom((image) => {
      if (!image) return true;
      const { dimensions } = decodeAssetId(image.asset._ref);

      if (dimensions.width > 50 || dimensions.height > 50) {
        return "Image Must be Smaller Max 50x50";
      }

      return true;
    }),
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alt",
      description: "Important For SEO And Accessibility.",
      options: { isHighlighted: true },
      validation: (Rule) => Rule.required().min(4).error("This Field Required"),
    },
  ],
};

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

const decodeAssetId = (id) => {
  const [, assetId, dimensions, format] = pattern.exec(id);
  const [width, height] = dimensions.split("x").map((v) => parseInt(v, 10));

  return {
    assetId,
    dimensions: { width, height },
    format,
  };
};
