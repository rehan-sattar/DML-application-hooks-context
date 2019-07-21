import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeProvider extends React.Component {
  state = {
    isDarkMode: false
  };
  toggleTheme = () => {
    this.setState({
      isDarkMode: !this.state.isDarkMode
    });
  };
  render() {
    const { children } = this.props;
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
