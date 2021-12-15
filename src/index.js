import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context"; 
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8f00"
    },
    secondary: {
      main: "#ffcc80"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
