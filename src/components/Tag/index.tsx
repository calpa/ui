import "./index.css";

import EnhancedLink from "../EnhancedLink";
import { TagProps } from "./tag";

const Tag = ({ tag, Link = "a" }: TagProps) => {
  return (
    <EnhancedLink url={`/tag/${tag}`} className="tag" Link={Link}>
      {tag}
    </EnhancedLink>
  );
};

Tag.defaultProps = {
  tag: "",
  className: "tag",
};

export default Tag;
