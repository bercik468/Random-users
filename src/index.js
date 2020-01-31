import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";

ReactDOM.render(
  //theme provider jest potrzebny do nadania wlasnych domyslnych styli w theme, trzeba go owinąć w komponent stylowany
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
