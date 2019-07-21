import React, { createContext } from "react";

// creating the context
export const LanguageContext = createContext();

// creating the priovider
class LanguageProvider extends React.Component {
  state = {
    language: "english"
  };

  changeLanguage = language => this.setState({ language });

  render() {
    const { children } = this.props;
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
