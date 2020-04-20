import React from "react";
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Blog from "../src/components/pages/Blog";

const theme = createMuiTheme(); //Used to control global theme values

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Need React Router to switch between pages below */}
      <Home />
      <About />
      <Blog />
    </ThemeProvider>
  );
}

export default App;
