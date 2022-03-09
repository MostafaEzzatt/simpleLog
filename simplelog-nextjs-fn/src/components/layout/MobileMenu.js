// Hooks
import { useAppContext } from "../../lib/AppContext";

// Assets
import Close from "../../assets/svg/close.svg";
import ActiveLink from "../shared/ActiveLink";

const MobileMenu = () => {
  const { menuIsOpen, setMenuIsOpen } = useAppContext();

  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };
  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`sticky inset-0 z-10 flex h-screen items-center justify-center bg-body sm:hidden ${
          !menuIsOpen && "hidden"
        }`}
      >
        <button className="absolute top-3 right-2.5" onClick={handleCloseMenu}>
          <Close className="h-6 w-6" />
        </button>

        <ol className="space-y-4 text-4xl">
          <li>
            <ActiveLink activeClassName="!text-dark" href="/">
              <a className="text-light hover:text-dark">Home</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="!text-dark" href="/about">
              <a className="text-light hover:text-dark">About</a>
            </ActiveLink>
          </li>
        </ol>
      </div>
    </>
  );
};

export default MobileMenu;
