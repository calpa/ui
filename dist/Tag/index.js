"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./index.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Tag = _ref => {
  let {
    tag,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    href: "/tag/".concat(tag),
    className: "tag",
    children: tag
  });
};
Tag.propTypes = {
  tag: _propTypes.default.string,
  children: _propTypes.default.node
};
Tag.defaultProps = {
  tag: ""
};
var _default = Tag;
exports.default = _default;