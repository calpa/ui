"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./index.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const Tag = _ref => {
  let {
    tag,
    children,
    Link = "a"
  } = _ref;
  // Check if the Link prop is an "a" tag
  const isAnchor = Link === "a"; // Will be true if Link is an "a" tag

  // Use the appropriate prop based on the value of the Link prop
  const linkProps = {
    [isAnchor ? "href" : "to"]: "/tag/".concat(tag),
    className: "tag"
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Link, _objectSpread(_objectSpread({}, linkProps), {}, {
    children: tag
  }));
};
Tag.propTypes = {
  tag: _propTypes.default.string,
  children: _propTypes.default.node,
  Link: _propTypes.default.elementType // This specifies that the Link prop is a component
};

Tag.defaultProps = {
  tag: ""
};
var _default = Tag;
exports.default = _default;