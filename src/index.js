import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context"; 
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
     primary: {
        main: "#28C699", // 
        contrastText: "#FFF"
               },
     secondary: {
        main: "#ffcc80" //
                }
           },
      text: {
        primary: "rgba(0,0,0,0.87)" // This is an orange looking color
      },// as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
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
