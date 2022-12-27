"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _material = require("@mui/material");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Date = _interopRequireDefault(require("../Date"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CustomCard(props) {
  const {
    onClick,
    title,
    description,
    date,
    moreText
  } = props;
  return /*#__PURE__*/React.createElement(_material.Card, {
    sx: {
      marginBottom: "10px"
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement(_material.CardActionArea, null, /*#__PURE__*/React.createElement(_material.CardContent, null, /*#__PURE__*/React.createElement(_material.Grid, {
    container: true,
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "h1",
    fullWidth: true,
    sx: {
      textDecoration: "none"
    }
  }, title), /*#__PURE__*/React.createElement(_Date.default, {
    date: date
  })), /*#__PURE__*/React.createElement(_material.Typography, null, description), /*#__PURE__*/React.createElement(_material.Typography, {
    color: "primary"
  }, moreText))));
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