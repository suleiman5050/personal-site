import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const openToggle = () => {
    setIsToggleOpen(true);
  };
  const closeToggle = () => {
    setIsToggleOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ isToggleOpen, openToggle, setIsToggleOpen, closeToggle }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
