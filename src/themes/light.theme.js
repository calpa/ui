// src/themes/dark.theme.js

import { createTheme } from "@mui/material";
import components from "./components";

export const lightTheme = createTheme({
  components,
  palette: {
    mode: "light",
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
