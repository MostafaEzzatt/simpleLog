export default {
  name: "mainImage",
  type: "image",
  title: "Thumbnail",
  options: {
    hotspot: true,
  },
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
