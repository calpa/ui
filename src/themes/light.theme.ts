// src/themes/dark.theme.js

import { createTheme } from "@mui/material";
import components from "./components";

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

export const lightTheme = createTheme({
  components,
  palette: {
    mode: "light",
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
      main: `#81C7D4`,
    },
    secondary: {
      main: `#faf7a1`,
    },
    error: {
      main: `#CB1B45`,
    },
    success: {
      main: `#BEC23F`,
    },
  },
});
