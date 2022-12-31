import "./index.css";
import { FC } from "react";

import { TagProps } from "./tag";

const Tag: FC<TagProps> = ({ tag, Link = "a" }) => {
  // Check if the Link prop is an "a" tag
  const isAnchor = Link === "a"; // Will be true if Link is an "a" tag

  // Use the appropriate prop based on the value of the Link prop
  const linkProps = {
    [isAnchor ? "href" : "to"]: `/tag/${tag}`,
    className: "tag",
  };

  return <Link {...linkProps}>{tag}</Link>;
};

Tag.defaultProps = {
  tag: "",
};

export default Tag;
