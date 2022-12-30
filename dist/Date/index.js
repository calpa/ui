"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
function Date(props) {
  const {
    date
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
    sx: {
      backgroundColor: "blue.main",
      color: "#fff",
      padding: "10px",
      width: "110px",
      textAlign: "center"
    },
    children: date
  });
}
var _default = Date;
exports.default = _default;