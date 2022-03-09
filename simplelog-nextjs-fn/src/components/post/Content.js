import PropTypes from "prop-types";
// Sanity
import { PortableText } from "@portabletext/react";

const Content = ({ value }) => {
  const componentsRestructure = {
    block: {
      // normal: ({ children, value }) => {},
    },

    marks: {
      code: ({ children, value }) => {
        const data = children.map((child) => child);
        return (
          <code className="block rounded bg-slate-700 p-2.5 text-white">
            {data}
          </code>
        );
      },
    },
  };
  return (
    <div
      className="prose prose-h1:text-dark prose-h2:text-dark prose-h3:text-dark prose-h4:text-dark prose-p:mb-5
      prose-p:text-medium prose-a:text-highlight prose-a:no-underline
      prose-a:hover:underline prose-blockquote:mt-6 prose-blockquote:mb-12 prose-blockquote:border-l-4 prose-blockquote:border-solid prose-blockquote:border-highlight prose-blockquote:pl-4 prose-blockquote:text-medium prose-li:marker:text-highlight"
    >
      <PortableText value={value} components={componentsRestructure} />
    </div>
  );
};

Content.propTypes = {
  value: PropTypes.array.isRequired,
};

export default Content;
