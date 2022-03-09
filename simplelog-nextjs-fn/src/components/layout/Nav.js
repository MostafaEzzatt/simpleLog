import Image from "next/image";
import Link from "next/link";

// Assets
import MenuIcon from "../../assets/svg/menu.svg";
import LogoPlaceHolder from "../../assets/png/logo-placeholder.png";

// App Context
import { useAppContext } from "../../lib/AppContext";

// Components
import NavLinks from "./NavLinks";

const Nav = () => {
  const { setMenuIsOpen } = useAppContext();

  const handleMenu = () => {
    setMenuIsOpen(true);
  };

  return (
    <nav className="flex justify-between">
      {/* Logo */}
      <div className="relative">
        <Link href="/">
          <a className="block">
            <Image
              src={LogoPlaceHolder}
              alt="simpleLog"
              objectFit="fill"
              objectPosition="center"
            />
          </a>
        </Link>
      </div>
      <div className="hidden sm:block">
        <ol className="flex gap-4">
          <NavLinks />
        </ol>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="h-6 w-6 sm:hidden" onClick={handleMenu}>
        <MenuIcon />
      </button>
    </nav>
  );
};

export default Nav;
