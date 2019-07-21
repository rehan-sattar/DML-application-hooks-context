import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import PageContent from "./components/PageContent";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
