export type EnhancedLinkProps = {
  children?: React.ReactNode;
  Link?: React.ElementType;
  className?: string;
  url: string;
};

const EnhancedLink = (props: EnhancedLinkProps) => {
  const { url, children, Link = "a", className } = props;

  // Check if the Link prop is an "a" tag
  const isAnchor = Link === "a"; // Will be true if Link is an "a" tag

  // Use the appropriate prop based on the value of the Link prop
  const linkProps = {
    [isAnchor ? "href" : "to"]: url,
    className,
  };

  return <Link {...linkProps}>{children}</Link>;
};

EnhancedLink.defaultProps = {
  tag: "",
  className: "tag",
};

export default EnhancedLink;
