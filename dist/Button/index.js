"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CustomButton = props => {
  return /*#__PURE__*/React.createElement(_material.Button, props);
};
var _default = CustomButton;
exports.default = _default;
CustomButton.defaultProps = {
  variant: "contained",
  color: "primary",
  onClick: undefined
};
CustomButton.propTypes = {
  variant: _propTypes.default.oneOf(["contained", "outlined", "text"]),
  color: _propTypes.default.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]),
  onClick: _propTypes.default.func
};