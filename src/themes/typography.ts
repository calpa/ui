import { TypographyOptions } from "@mui/material/styles/createTypography";

const typographyOptions: TypographyOptions = {
  fontSize: 16,
  fontFamily: [
    '"Noto Serif JP"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  h1: {
    fontSize: 24,
    fontWeight: 600,
  },
  h2: {
    fontSize: 22,
    fontWeight: 600,
  },
  h3: {
    fontSize: 20,
    fontWeight: 600,
  },
  h4: {
    fontSize: 18,
    fontWeight: 600,
  },
  h5: {
    fontSize: 16,
    fontWeight: 600,
  },
};

export default typographyOptions;
