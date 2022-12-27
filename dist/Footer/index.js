"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
require("./index.css");
const LinkColor = "info.dark";
const ExternalLink = props => {
  return /*#__PURE__*/React.createElement(_material.Link, {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer",
    color: LinkColor
  }, props.children || props.title);
};
const Footer = props => {
  const {
    categories,
    quickLinks
  } = props;
  return /*#__PURE__*/React.createElement(_material.Grid, {
    container: true,
    className: "site-footer",
    sx: {
      padding: "10px",
      backgroundColor: "#f0f0f0"
    }
  }, /*#__PURE__*/React.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "h6"
  }, "About"), /*#__PURE__*/React.createElement(_material.Typography, {
    textAlign: "justify"
  }, props.about)), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    xs: 6,
    md: 3
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "h6"
  }, "Categories"), /*#__PURE__*/React.createElement(_material.List, {
    sx: {
      margin: 0,
      padding: 0
    }
  }, categories.map((category, index) => /*#__PURE__*/React.createElement(_material.ListItem, {
    key: index,
    sx: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(ExternalLink, {
    href: category.link
  }, category.title))))), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    xs: 6,
    md: 3
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "h6"
  }, "Quick Links"), /*#__PURE__*/React.createElement(_material.List, {
    sx: {
      margin: 0,
      padding: 0
    }
  }, quickLinks.map((link, index) => /*#__PURE__*/React.createElement(_material.ListItem, {
    key: index,
    sx: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(ExternalLink, {
    href: link.link
  }, link.title)))))), /*#__PURE__*/React.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    md: 8,
    sm: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement("p", {
    className: "copyright-text"
  }, "Copyright \xA9 ", new Date().getFullYear(), " All Rights Reserved by\xA0", /*#__PURE__*/React.createElement(_material.Link, {
    href: "#",
    color: LinkColor
  }, "Calpa Liu"), ".")))));
};
var _default = Footer;
exports.default = _default;