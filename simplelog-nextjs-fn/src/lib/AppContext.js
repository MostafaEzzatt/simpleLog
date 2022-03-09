import React, { useContext, useState, useEffect } from "react";

export const ReactContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const contextValue = { menuIsOpen, setMenuIsOpen };

  useEffect(() => {
    setMenuIsOpen(false);
  }, []);

  return (
    <ReactContext.Provider value={contextValue}>
      {children}
    </ReactContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(ReactContext);
};

export default ContextProvider;
