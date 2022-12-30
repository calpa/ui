"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _material = require("@mui/material");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodash = require("lodash");
var _Date = _interopRequireDefault(require("../Date"));
var _Tag = _interopRequireDefault(require("../Tag"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CustomCard(props) {
  const {
    onClick,
    title,
    description,
    date,
    moreText,
    tags
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
          alignItems: "flex-start",
          justifyContent: "space-between",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: 6,
            sm: 10,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
              variant: "h1",
              sx: {
                textDecoration: "none",
                textAlign: "justify"
              },
              children: title
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Date.default, {
            date: date
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          children: description
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          container: true,
          item: true,
          xs: 12,
          children: (0, _lodash.map)(tags, (tag, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tag.default, {
            tag: tag,
            children: tag
          }, tag))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          color: "blue.main",
          children: moreText
        })]
      })
    })
  });
}
var _default = CustomCard;
exports.default = _default;
CustomCard.defaultProps = {
  moreText: "Read More",
  tags: []
};
CustomCard.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  date: _propTypes.default.string.isRequired,
  moreText: _propTypes.default.string,
  tags: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
};