"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
require("./index.css");
var _jsxRuntime = require("react/jsx-runtime");
const LinkColor = "info.dark";
const ExternalLink = props => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer",
    color: LinkColor,
    children: props.children || props.title
  });
};
const Footer = props => {
  const {
    categories,
    quickLinks
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
    container: true,
    className: "site-footer",
    sx: {
      padding: "10px",
      backgroundColor: "#f0f0f0"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
      container: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
        item: true,
        sm: 12,
        md: 6,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "h6",
          children: "About"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          textAlign: "justify",
          children: props.about
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
        item: true,
        xs: 6,
        md: 3,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "h6",
          children: "Categories"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
          sx: {
            margin: 0,
            padding: 0
          },
          children: categories.map((category, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItem, {
            sx: {
              padding: 0
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ExternalLink, {
              href: category.link,
              children: category.title
            })
          }, index))
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
        item: true,
        xs: 6,
        md: 3,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "h6",
          children: "Quick Links"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
          sx: {
            margin: 0,
            padding: 0
          },
          children: quickLinks.map((link, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItem, {
            sx: {
              padding: 0
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ExternalLink, {
              href: link.link,
              children: link.title
            })
          }, index))
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
      container: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        container: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          md: 8,
          sm: 6,
          xs: 12,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            className: "copyright-text",
            children: ["Copyright \xA9 ", new Date().getFullYear(), " All Rights Reserved by\xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
              href: "#",
              color: LinkColor,
              children: "Calpa Liu"
            }), "."]
          })
        })
      })
    })]
  });
};
var _default = Footer;
exports.default = _default;