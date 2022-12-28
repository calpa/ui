"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _material = require("@mui/material");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Date = _interopRequireDefault(require("../Date"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CustomCard(props) {
  const {
    onClick,
    title,
    description,
    date,
    moreText
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Card, {
    sx: {
      marginBottom: "10px"
    },
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardActionArea, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardContent, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
          container: true,
          alignItems: "center",
          justifyContent: "space-between",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "h1",
            fullWidth: true,
            sx: {
              textDecoration: "none"
            },
            children: title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Date.default, {
            date: date
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          children: description
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          color: "primary",
          children: moreText
        })]
      })
    })
  });
}
var _default = CustomCard;
exports.default = _default;
CustomCard.defaultProps = {
  moreText: "Read More"
};
CustomCard.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  date: _propTypes.default.string.isRequired,
  moreText: _propTypes.default.string
};