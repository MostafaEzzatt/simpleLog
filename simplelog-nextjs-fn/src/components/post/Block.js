import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

// Sanity
import { imageBuilder } from "../../lib/sanity/imageBuilder";

const Block = ({ children, slug, thumbnail, icon, title, views }) => {
  return (
    <>
      {/* Post With Thumbnail */}
      <Link href={`/post/${slug}`}>
        <a className="block space-y-3">
          {thumbnail && (
            <div className="relative h-72 w-full ">
              <Image
                src={imageBuilder(thumbnail).width(768).url()}
                alt={thumbnail.alt}
                className="max-w-full"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}

          <div className="flex flex-col items-start gap-2 sm:flex-row">
            <div className="flex flex-auto items-start gap-2">
              {icon && (
                <div className="relative h-icon w-icon">
                  <Image
                    src={imageBuilder(icon).width(50).url()}
                    alt={icon.alt}
                    className="max-w-full"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )}
              <h2 className="text-xl font-medium text-dark">{title}</h2>
            </div>
            <span className="w-32 whitespace-nowrap text-light">
              {views} views
            </span>
          </div>

          <p className="text-medium">{children}</p>
        </a>
      </Link>
    </>
  );
};

Block.propTypes = {
  slug: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  thumbnail: PropTypes.object,
  icon: PropTypes.object,
};

export default Block;
