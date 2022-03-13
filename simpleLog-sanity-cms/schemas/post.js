export default {
  name: "post",
  type: "document",
  title: "Posts",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "summary",
      type: "text",
      title: "Summary",
      description: "This Will Show Only On The Home Page",
    },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block",
        },
      ],
      description: "Post Content",
    },
    {
      name: "iconImage",
      type: "iconImage",
      title: "Title Icon",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Thumbnail",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "reference", to: { type: "tags" } }],
    },
  ],
};
