"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _Menu = _interopRequireDefault(require("@mui/icons-material/Menu"));
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Container = _interopRequireDefault(require("@mui/material/Container"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Menu2 = _interopRequireDefault(require("@mui/material/Menu"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function NavBar(props) {
  const {
    pages,
    avatarAlt,
    avatarImage,
    title
  } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return /*#__PURE__*/React.createElement(_AppBar.default, {
    position: "static"
  }, /*#__PURE__*/React.createElement(_Container.default, {
    maxWidth: "xl"
  }, /*#__PURE__*/React.createElement(_Toolbar.default, {
    disableGutters: true
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h6",
    noWrap: true,
    component: "a",
    href: "/",
    sx: {
      mr: 2,
      display: {
        xs: "none",
        md: "flex"
      },
      fontFamily: "monospace",
      fontWeight: 700,
      letterSpacing: ".3rem",
      color: "inherit",
      textDecoration: "none"
    }
  }, title), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      flexGrow: 1,
      display: {
        xs: "flex",
        md: "none"
      }
    }
  }, /*#__PURE__*/React.createElement(_IconButton.default, {
    size: "large",
    "aria-label": "account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: handleOpenNavMenu,
    color: "inherit"
  }, /*#__PURE__*/React.createElement(_Menu.default, null)), /*#__PURE__*/React.createElement(_Menu2.default, {
    id: "menu-appbar",
    anchorEl: anchorElNav,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    open: Boolean(anchorElNav),
    onClose: handleCloseNavMenu,
    sx: {
      display: {
        xs: "block",
        md: "none"
      }
    }
  }, pages.map(page => /*#__PURE__*/React.createElement(_MenuItem.default, {
    key: page,
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    textAlign: "center"
  }, page))))), /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h5",
    noWrap: true,
    component: "a",
    href: "",
    sx: {
      mr: 2,
      display: {
        xs: "flex",
        md: "none"
      },
      flexGrow: 1,
      fontFamily: "monospace",
      fontWeight: 700,
      letterSpacing: ".3rem",
      color: "inherit",
      textDecoration: "none"
    }
  }, title), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      flexGrow: 1,
      display: {
        xs: "none",
        md: "flex"
      }
    }
  }, pages.map(page => /*#__PURE__*/React.createElement(_Button.default, {
    key: page,
    onClick: handleCloseNavMenu,
    sx: {
      color: "white",
      display: "block"
    }
  }, page))), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      flexGrow: 0
    }
  }, /*#__PURE__*/React.createElement(_Tooltip.default, {
    title: avatarAlt
  }, /*#__PURE__*/React.createElement(_IconButton.default, {
    sx: {
      p: 0
    }
  }, /*#__PURE__*/React.createElement(_Avatar.default, {
    alt: avatarAlt,
    src: avatarImage
  }, avatarAlt[0])))))));
}
var _default = NavBar;
exports.default = _default;