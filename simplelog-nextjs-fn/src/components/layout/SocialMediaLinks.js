import { useState, useEffect } from "react";
// Sanity
import client from "../../lib/sanity/client";

const SocialMediaLinks = ({ post }) => {
  const [socialMediaData, setSocialMediaData] = useState([]);

  async function getSocialMediaData() {
    const data = await client.fetch(`*[_type == 'socialMedia']`);
    setSocialMediaData(data);
  }

  useEffect(() => {
    getSocialMediaData();
  }, []);

  if (socialMediaData.length <= 0) return <></>;
  return socialMediaData.map((data) => (
    <li key={data.name}>
      <a className="text-light hover:text-dark" href={data.url}>
        {data.name}
      </a>
    </li>
  ));
};
export default SocialMediaLinks;
