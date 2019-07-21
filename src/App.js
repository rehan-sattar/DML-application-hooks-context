import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import PageContent from "./components/PageContent";
import ThemeProvider from "./contexts/ThemeContext";
import LanguageContext from "./contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <LanguageContext>
          <Navbar />
          <Form />
        </LanguageContext>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
