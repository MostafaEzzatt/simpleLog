import PropTypes from "prop-types";
// Hooks
import { useAppContext } from "../../lib/AppContext";

// Components
import MobileMenu from "./MobileMenu";
import Header from "./Header";
import Footer from "./Footer";

const Index = ({ children }) => {
  const { menuIsOpen } = useAppContext();

  return (
    <>
      <MobileMenu />
      {/* Page Container */}
      <div
        className={`mx-auto max-w-screen-md px-2.5 md:px-0 ${
          menuIsOpen && "hidden"
        }`}
      >
        {/* Header */}
        <Header />

        {/* Page */}
        {children}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

Index.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Index;
