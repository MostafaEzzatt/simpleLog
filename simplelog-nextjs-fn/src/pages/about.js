import PropTypes from "prop-types";
import Image from "next/image";
import Head from "next/head";

// Components
import Content from "../components/post/Content";

// Sanity
import client from "../lib/sanity/client";
import { imageBuilder } from "../lib/sanity/imageBuilder";

const About = ({ about }) => {
  return (
    <>
      <Head>
        <title>simpleLog - About</title>
        <meta name="description" content="Simple Blog - About" />
        <meta name="keywords" content="simple,blog, simpleBlog, about" />
        <meta property="og:title" content="simpleLog - About" />
        <meta name="og:description" content={about.bio} />
      </Head>
      <main className="space-y-8 border-b border-solid border-medium pb-4">
        <div className="grid grid-cols-1 gap-y-11 gap-x-5 sm:grid-flow-col-dense sm:grid-cols-2">
          <div className="col-span-1 w-full">
            <Content value={about.bio} />

            <ul className="grid grid-cols-1 gap-x-5 gap-y-1.5 text-base text-dark sm:grid-cols-2 sm:text-sm">
              {about?.skills.length >= 1 && (
                <>
                  {about.skills.map((skill) => (
                    <li
                      key={skill}
                      className="col-span-1 before:mr-2 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-highlight"
                    >
                      {skill}
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="col-span-1 row-start-1 row-end-2 flex w-full items-start justify-center">
            <div className="relative h-60 w-60 drop-shadow-profile-img transition-all duration-300 hover:drop-shadow-profile-img-hover sm:h-72 sm:w-72">
              <Image
                src={imageBuilder(about.profileImage).width(240).url()}
                alt={about.profileImage.alt}
                className="max-w-full"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const getAboutPageData = await client.fetch(
    `*[_type == "page" && pageBuilder._type == about][0]`
  );

  let aboutPage = {};

  if (getAboutPageData.pageBuilder.length >= 1) {
    aboutPage = getAboutPageData.pageBuilder[0];
  }

  return {
    props: {
      about: aboutPage,
    },
    revalidate: 600, // In seconds
  };
}

About.propTypes = {
  about: PropTypes.object.isRequired,
};

export default About;
