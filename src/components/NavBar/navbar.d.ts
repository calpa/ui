import { BaseSyntheticEvent } from "react";
export enum Color {
  Default = "default",
  Inherit = "inherit",
  Primary = "primary",
  Secondary = "secondary",
  Transparent = "transparent",
}

export type NavBarProps = {
  pages: string[];
  avatarAlt: string;
  avatarImage: string;
  title: string;
  color: Color;
  navItemColor: string;
  onClick?: (event: BaseSyntheticEvent) => void;
  handleTitleClick?: (event: BaseSyntheticEvent) => void;
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
};

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    blue: true;
    navbar: true;
  }
}

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
