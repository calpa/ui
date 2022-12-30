import PropTypes from "prop-types";

import "./index.css";

const Tag = ({ tag, children, Link = "a" }) => {
  // Check if the Link prop is an "a" tag
  const isAnchor = Link === "a"; // Will be true if Link is an "a" tag

  // Use the appropriate prop based on the value of the Link prop
  const linkProps = {
    [isAnchor ? "href" : "to"]: `/tag/${tag}`,
    className: "tag",
  };

  return <Link {...linkProps}>{tag}</Link>;
};

Tag.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  Link: PropTypes.elementType, // This specifies that the Link prop is a component
};

Tag.defaultProps = {
  tag: "",
};

export default Tag;
