import ProtoType from "prop-types";
import Head from "next/head";

// Sanity
import client from "../lib/sanity/client";

import Block from "../components/post/Block";

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>simpleLog</title>
        <meta name="description" content="Simple Blog" />
        <meta name="keywords" content="simple,blog, simpleBlog" />
        <meta property="og:title" content="simpleLog" />
        <meta name="og:description" content="Simple Blog" />
      </Head>
      {/* Main Content ( Posts ) */}
      <main className="space-y-8 border-b border-solid border-medium pb-4">
        {posts.length > 0 &&
          posts.map((post) => {
            return (
              <Block
                key={post._id}
                title={post.title}
                views="213,248"
                slug={post.slug.current}
                thumbnail={post.mainImage}
                icon={post.iconImage}
              >
                {post.summary}
              </Block>
            );
          })}
      </main>
    </>
  );
};

Home.prototype = {
  posts: ProtoType.array.isRequired,
};

export async function getServerSideProps() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc)`
  );

  return {
    props: {
      posts,
    },
  };
}

export default Home;
