//theme odpowiada za domyslne style komponentow

import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#003366"
    },
    secondary: {
      main: "#009900"
    }
  },
  absCenterDiv: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
