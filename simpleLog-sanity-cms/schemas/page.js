export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: "pageBuilder",
      type: "array",
      title: "Pages",
      of: [
        { type: "about" }, // hero.js (same applies for the other types)
      ],
    },
  ],
};
