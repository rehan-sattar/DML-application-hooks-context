import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const PageContent = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "#211e1e" : "white",
    height: "100vh",
    width: "100vw"
  };
  return <div style={styles}>{children}</div>;
};

export default PageContent;
