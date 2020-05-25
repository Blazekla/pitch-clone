import React from "react";
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Blog from "../src/components/pages/Blog";


const theme = createMuiTheme(); //Used to control global theme values

function App() {
  return (
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
          <Footer />
        </ThemeProvider>

      </Router>
  );
}

export default App;
