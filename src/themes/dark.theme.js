// src/themes/dark.theme.js

import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";
import components from "./components";

export const darkTheme = createTheme({
  components,
  palette: {
    mode: "dark",
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