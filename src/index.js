import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const colors = {
  white: "#FFFFFF",
  gray: "#EDF2F7",
  btnBlue: "#7F5AD4",
  grad: "linear-gradient(315deg, #89d4cf 0%, #6e45e1 74%)",
  green: "#38A169",
  benagn: "#6B46C1",
};

const theme = extendTheme({ colors });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
