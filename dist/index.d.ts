import React$1, { FC, BaseSyntheticEvent, ReactElement, FormEvent } from 'react';

type BlockquoteProps = {
    children: React$1.ReactNode;
};
declare const Blockquote: FC<BlockquoteProps>;

type CustomButtonProps = {
  variant: "contained" | "outlined" | "text";
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  onClick?: () => void;
};

declare const CustomButton: FC<CustomButtonProps>;

type CustomCardProps = {
  onClick: () => void;
  title: string;
  description: string;
  date?: string;
  moreText?: string;
  tags: string[];
  Link: any;
  showDateComponent?: boolean;
  showTagsComponent?: boolean;
  imageProps?: any;
};

declare const CustomCard: {
    (props: CustomCardProps): JSX.Element;
    defaultProps: {
        moreText: string;
        tags: never[];
        showTagsComponent: boolean;
        showDateComponent: boolean;
    };
};

type DateProps = {
    date?: string;
};
declare const Date: (props: DateProps) => JSX.Element | null;

interface FooterProps {
    categories: {
        title: string;
        link: string;
    }[];
    quickLinks: {
        title: string;
        link: string;
    }[];
    about: string;
}
declare const Footer: React.FC<FooterProps>;

interface GithubCornerProps {
    url: string;
    target?: string;
}
declare const GithubCorner: React$1.FC<GithubCornerProps>;

enum Color$1 {
  Default = "default",
  Inherit = "inherit",
  Primary = "primary",
  Secondary = "secondary",
  Transparent = "transparent",
}

type NavBarProps = {
  pages: string[];
  avatarAlt: string;
  avatarImage: string;
  title: string;
  color: Color$1;
  navItemColor: string;
  onClick?: (event: BaseSyntheticEvent) => void;
  handleTitleClick?: (event: BaseSyntheticEvent) => void;
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
};

declare function noop(): void;
declare function NavBar(props: NavBarProps): JSX.Element;
declare namespace NavBar {
    var defaultProps: {
        color: string;
        onClick: typeof noop;
        handleTitleClick: typeof noop;
    };
}

interface SignInProps {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
declare function SignIn({ handleSubmit }: SignInProps): ReactElement;

type TagProps = {
  tag: string;
  children?: React.ReactNode;
  Link?: React.ElementType;
  className?: string;
};

declare const Tag: {
    ({ tag, Link }: TagProps): JSX.Element;
    defaultProps: {
        tag: string;
        className: string;
    };
};

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

type svgJapanOptions = {
  element?: string;
  type: "full" | "dense" | "deform";
  stroked: boolean;
  strokeColor?: string;
  activeColor?: string;
  withTips: boolean;
  regionality: boolean;
  regions?: number[];
  uniformly: boolean;
  uniformColor?: string;
  prefColors?: { [key: string]: Color };
  width?: string;
  height?: string;
};

type JapanMapProps = svgJapanOptions & {
    onClick: (event: Event) => void;
};

declare function JapanMap(props: JapanMapProps): JSX.Element;

type ListItemProps = {
  number: number;
  title: string;
  url: string;
  Link?: React.ElementType;
};

type ListProps = {
    listItems: ListItemProps[];
    topic: string;
    Link?: React.ElementType;
};
declare const List: (props: ListProps) => JSX.Element;

declare const ListItem: (props: ListItemProps) => JSX.Element;

export { Blockquote, CustomButton as Button, CustomCard as Card, Date, Footer, GithubCorner, JapanMap, List, ListItem, NavBar, SignIn, Tag };
