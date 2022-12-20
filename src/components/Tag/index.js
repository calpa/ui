import PropTypes from "prop-types";

import "./index.css";

const Tag = ({ tag, children }) => (
  <a href={`/tag/${tag}`} className="tag">
    {tag}
  </a>
);

Tag.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
};

Tag.defaultProps = {
  tag: "",
};

export default Tag;
