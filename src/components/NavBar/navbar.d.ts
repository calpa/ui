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
