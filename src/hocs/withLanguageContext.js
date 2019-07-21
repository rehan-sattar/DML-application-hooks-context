import React from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export function withLanguageContext(Wrapper) {
  return props => (
    <LanguageContext>
      {value => <Wrapper {...props} languageContext={value} />}
    </LanguageContext>
  );
}
