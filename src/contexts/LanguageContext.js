import React, { createContext, useState } from "react";

// creating the context
export const LanguageContext = createContext();

// creating the priovider
export const LanguageProvider = props => {
  const { children } = props;
  const [language, setLanguage] = useState("english");
  const changeLanguage = language => setLanguage(language);
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
