// src/themes/dark.theme.js

import { createTheme } from "@mui/material";
import { blue, blueGrey, cyan, pink } from "@mui/material/colors";
import components from "./components";

export const lightTheme = createTheme({
    components,
    palette: {
        mode: "light",
        primary: {
            main: blue["A200"],
        },
        secondary: {
            main: blue["A400"],
        },
        background: {
            // default: blueGrey["800"],
            // paper: blueGrey["700"],
        },
    },
});