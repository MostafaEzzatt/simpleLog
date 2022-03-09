// Components
import ActiveLink from "../shared/ActiveLink";

const NavLinks = () => {
  return (
    <>
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
    </>
  );
};

export default NavLinks;
