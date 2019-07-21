import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { children } = this.props;
    const { isDarkMode } = this.context;
    console.log(isDarkMode);
    const styles = {
      backgroundColor: isDarkMode ? "#211e1e" : "white",
      height: "100vh",
      width: "100vw"
    };
    return <div style={styles}>{children}</div>;
  }
}

export default PageContent;
