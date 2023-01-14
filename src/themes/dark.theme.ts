// src/themes/dark.theme.js

import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";
import typography from "./typography";

declare module "@mui/material/styles" {
  interface Palette {
    blue: Palette["primary"];
    navbar: Palette["primary"];
  }

  interface PaletteOptions {
    blue: PaletteOptions["primary"];
    navbar: PaletteOptions["primary"];
  }
}

export const darkTheme = createTheme({
  // components,
  typography,
  palette: {
    mode: "dark",
    navbar: {
      main: "#f5f5f5",
      // contrastText: '#999'
    },
    blue: {
      light: "#337ab7",
      main: "#0056b3",
      dark: "#0f457f",
    },
    primary: {
      main: pink["A200"],
    },
    secondary: {
      main: cyan["A400"],
    },
    background: {
      default: blueGrey["800"],
      paper: blueGrey["700"],
    },
  },
});
