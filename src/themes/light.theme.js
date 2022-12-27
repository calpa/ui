// src/themes/dark.theme.js

import { createTheme } from "@mui/material";
import components from "./components";

export const lightTheme = createTheme({
  components,
  palette: {
    mode: "light",
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
