"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const Blockquote = props => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("blockquote", {
    style: {
      maxWidth: "100%",
      width: "100%",
      wordBreak: "break-word",
      caretColor: "rgba(255, 255, 255, 0.9)",
      borderLeft: "3px solid currentcolor",
      margin: "0",
      paddingLeft: "0.9em",
      paddingRight: "0.9em"
    },
    children: props.children
  });
};
var _default = Blockquote;
exports.default = _default;