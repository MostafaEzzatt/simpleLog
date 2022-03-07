export default {
  name: "about",
  type: "object",
  title: "About",
  fields: [
    {
      name: "pageTitle",
      type: "string",
      title: "Page Title",
    },
    {
      name: "profileImage",
      type: "mainImage",
      title: "Profile Image",
    },
    {
      name: "bio",
      type: "array",
      title: "Bio",
      of: [
        {
          type: "block",
          lists: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "link",
                fields: [
                  {
                    name: "url",
                    type: "url",
                  },
                ],
              },
            ],
          },
          // ...
        },
      ],
    },
    {
      name: "skills",
      type: "array",
      title: "Skills",
      of: [{ type: "string" }],
    },
  ],
};
