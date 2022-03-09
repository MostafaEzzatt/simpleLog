import Image from "next/image";
import PropTypes from "prop-types";

// Components
import Content from "../../components/post/Content";

// Utility
import formatPostDate from "../../utility/formatPostDate";
import getEstimatedReadingTime from "../../utility/getEstimatedReadingTime";

// Sanity
import client from "../../lib/sanity/client";
import { imageBuilder } from "../../lib/sanity/imageBuilder";

const SinglePost = ({ post }) => {
  if (post.length <= 0)
    return <div className="text-center">This Post Not Exist</div>;

  return (
    <main className="space-y-8 border-b border-solid border-medium pb-4">
      <article>
        {post?.mainImage && (
          <div className="relative mb-6 h-72 w-full">
            <Image
              src={imageBuilder(post.mainImage).width(768).url()}
              alt={post.mainImage.alt}
              layout="fill"
              objectFit="cover"
              className="max-w-full"
            />
          </div>
        )}
        <time
          dateTime={formatPostDate(post?._createdAt)}
          className="mb-2.5 block w-32 whitespace-nowrap text-light sm:hidden"
        >
          {formatPostDate(post?._createdAt)}
        </time>
        <div className="relative">
          {post?.iconImage && (
            <div className="absolute z-0 h-icon w-icon">
              <Image
                src={imageBuilder(post?.iconImage).width(50).url()}
                alt={post?.iconImage.alt}
                className="max-w-full"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          <h2
            className={`mb-2.5 text-5xl font-bold text-dark ${
              post?.iconImage && "indent-14"
            }`}
          >
            {post?.title}
          </h2>
        </div>
        <div className="mb-8 flex justify-between">
          <time
            dateTime={formatPostDate(post?._createdAt)}
            className="hidden w-32 whitespace-nowrap text-light sm:inline-block"
          >
            {formatPostDate(post?._createdAt)}
          </time>

          <div>
            <span className="w-32 whitespace-nowrap text-light">
              {getEstimatedReadingTime(post.body)} min read
            </span>
            <span className="w-32 whitespace-nowrap text-light"> . </span>
            <span className="w-32 whitespace-nowrap text-light">
              213,248 views
            </span>
          </div>
        </div>

        <Content value={post?.body} />
      </article>
    </main>
  );
};

export async function getStaticProps({ params }) {
  let post = [];

  if (params.slug) {
    post = await client.fetch(
      `*[_type == 'post' && slug.current == "${params.slug}"][0]`
    );
  }

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const posts = await client.fetch(`*[_type == 'post']{slug}`);

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return { paths, fallback: "blocking" };
}

SinglePost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default SinglePost;
