import PropTypes from "prop-types";
// Sanity
import { PortableText } from "@portabletext/react";

const Content = ({ value }) => {
  const serializers = {
    block: {
      normal: (props) => {
        let isCodeBlockExist = props.children.filter(
          (child) => typeof child == "object" && child.props.markType == "code"
        );
        if (isCodeBlockExist.length && props.children.length > 1) {
          return (
            <p>
              {props.children.map((child) => {
                if (
                  typeof child == "object" &&
                  child.props.markType == "code"
                ) {
                  return <code key={child.props.text}>{child.props.text}</code>;
                }
                return child;
              })}
            </p>
          );
        } else if (isCodeBlockExist.length && props.children.length == 1) {
          return <pre>{<code>{props.children[0].props?.text}</code>}</pre>;
        } else {
          return <p>{props.children}</p>;

          // return BlockContent.defaultSerializers.types.block(props);
        }
      },
    },
  };
  return (
    <div
      className="prose prose-h1:text-dark prose-h2:text-dark prose-h3:text-dark prose-h4:text-dark prose-p:mb-5
      prose-p:text-medium prose-a:text-highlight prose-a:no-underline
      prose-a:hover:underline prose-blockquote:mt-6 prose-blockquote:mb-12 prose-blockquote:border-l-4 prose-blockquote:border-solid prose-blockquote:border-highlight prose-blockquote:pl-4 prose-blockquote:text-medium prose-code:text-highlight prose-li:marker:text-highlight"
    >
      <PortableText value={value} components={serializers} />,
    </div>
  );
};

Content.propTypes = {
  value: PropTypes.array.isRequired,
};

export default Content;
