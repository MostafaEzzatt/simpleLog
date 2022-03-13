// Components
import NavLinks from "./NavLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import Spotify from "./Spotify";

const Footer = () => {
  return (
    <footer className="px-5 py-2">
      <Spotify />

      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4">
        <ol className="col-span-1 space-y-4">
          <NavLinks />
        </ol>

        <ol className="col-span-1 space-y-4">
          <SocialMediaLinks />
        </ol>
      </div>
    </footer>
  );
};

export default Footer;
