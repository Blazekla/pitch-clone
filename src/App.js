import React from "react";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/header/Header.js";
import SignUp from "./components/Main/SignUp";
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SignUp />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
