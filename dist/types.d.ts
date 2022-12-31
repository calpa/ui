import { FC } from "react";
import { CustomButtonProps } from "./button";
import { CustomCardProps } from "./card";
export const Blockquote: (props: any) => JSX.Element;
export const Button: FC<CustomButtonProps>;
export function Date(props: any): JSX.Element;
type Props = {
    tag: string;
    children?: React.ReactNode;
    Link?: React.ElementType;
};
export const Tag: FC<Props>;
export const Card: FC<CustomCardProps>;
export const Footer: (props: any) => JSX.Element;
export const GithubCorner: {
    ({ url, target }: {
        url: any;
        target: any;
    }): JSX.Element;
    propTypes: {
        url: any;
        target: any;
    };
};
export function NavBar(props: any): JSX.Element;
export function SignIn(props: any): JSX.Element;
declare namespace SignIn {
    var propTypes: {
        handleSubmit: any;
    };
    var defaultProps: {
        handleSubmit: () => void;
    };
}

//# sourceMappingURL=types.d.ts.map
