'use strict';

var jsxRuntime = require('react/jsx-runtime');
var material = require('@mui/material');
var lodash = require('lodash');
var react = require('react');
var MenuIcon = require('@mui/icons-material/Menu');
var LockOutlinedIcon = require('@mui/icons-material/LockOutlined');
var Avatar2 = require('@mui/material/Avatar');
var Box2 = require('@mui/material/Box');
var Button3 = require('@mui/material/Button');
var Checkbox = require('@mui/material/Checkbox');
var FormControlLabel = require('@mui/material/FormControlLabel');
var Grid3 = require('@mui/material/Grid');
var Link2 = require('@mui/material/Link');
var TextField = require('@mui/material/TextField');
var Typography5 = require('@mui/material/Typography');
var svgJapan = require('svg-japan/src/_core-class');
var mui = require('tss-react/mui');
var colors = require('@mui/material/colors');

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var Blockquote = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "blockquote",
    {
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
    }
  );
};
var Blockquote_default = Blockquote;
var CustomButton = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(material.Button, __spreadValues({}, props));
};
CustomButton.defaultProps = {
  variant: "contained",
  color: "primary",
  onClick: void 0
};
var Button_default = CustomButton;
var EnhancedLink = (props) => {
  const { url, children, Link: Link3 = "a", className } = props;
  const isAnchor = Link3 === "a";
  const linkProps = {
    [isAnchor ? "href" : "to"]: url,
    className
  };
  return /* @__PURE__ */ jsxRuntime.jsx(Link3, __spreadProps(__spreadValues({}, linkProps), { children }));
};
EnhancedLink.defaultProps = {
  tag: "",
  className: "tag"
};
var EnhancedLink_default = EnhancedLink;
var Tag = ({ tag, Link: Link3 = "a" }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(EnhancedLink_default, { url: `/tag/${tag}`, className: "tag", Link: Link3, children: tag });
};
Tag.defaultProps = {
  tag: "",
  className: "tag"
};
var Tag_default = Tag;
var CustomCard = (props) => {
  const {
    onClick,
    title,
    description,
    date,
    moreText,
    tags,
    Link: Link3,
    showDateComponent,
    showTagsComponent,
    imageProps
  } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(
    material.Card,
    {
      sx: {
        marginBottom: "10px"
      },
      onClick,
      children: /* @__PURE__ */ jsxRuntime.jsxs(material.CardActionArea, { children: [
        imageProps && /* @__PURE__ */ jsxRuntime.jsx(material.CardMedia, __spreadValues({}, imageProps)),
        /* @__PURE__ */ jsxRuntime.jsxs(material.CardContent, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            material.Typography,
            {
              variant: "h1",
              sx: {
                textDecoration: "none"
              },
              children: title
            }
          ),
          showDateComponent && /* @__PURE__ */ jsxRuntime.jsx(
            material.Typography,
            {
              sx: {
                fontSize: "14px",
                color: "#585858"
              },
              children: date
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            material.Typography,
            {
              sx: {
                fontSize: `14px`
              },
              children: description
            }
          ),
          showTagsComponent && /* @__PURE__ */ jsxRuntime.jsx(material.Grid, { container: true, item: true, xs: 12, children: lodash.map(tags, (tag) => /* @__PURE__ */ jsxRuntime.jsx(Tag_default, { tag, Link: Link3, children: tag }, tag)) }),
          /* @__PURE__ */ jsxRuntime.jsx(material.Typography, { color: "blue.main", children: moreText })
        ] })
      ] })
    }
  );
};
CustomCard.defaultProps = {
  moreText: "Read More",
  tags: [],
  showTagsComponent: true,
  showDateComponent: true
};
var Card_default = CustomCard;
var Date2 = (props) => {
  const { date } = props;
  if (!date) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    material.Typography,
    {
      sx: {
        backgroundColor: "blue.main",
        color: "#fff",
        padding: "10px",
        width: "110px",
        textAlign: "center",
        fontSize: `16px`
      },
      children: date
    }
  );
};
var Date_default = Date2;
var LinkColor = `info.dark`;
var ExternalLink = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    material.Link,
    {
      href: props.href,
      target: "_blank",
      rel: "noopener noreferrer",
      color: LinkColor,
      children: props.children || props.title
    }
  );
};
var Footer = (props) => {
  const { categories, quickLinks } = props;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    material.Grid,
    {
      container: true,
      className: "site-footer",
      sx: {
        padding: `10px`,
        backgroundColor: `#f0f0f0`
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(material.Grid, { container: true, children: [
          /* @__PURE__ */ jsxRuntime.jsxs(material.Grid, { item: true, sm: 12, md: 6, children: [
            /* @__PURE__ */ jsxRuntime.jsx(material.Typography, { variant: "h6", children: "About" }),
            /* @__PURE__ */ jsxRuntime.jsx(material.Typography, { textAlign: "justify", children: props.about })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(material.Grid, { item: true, xs: 6, md: 3, children: [
            /* @__PURE__ */ jsxRuntime.jsx(material.Typography, { variant: "h6", children: "Categories" }),
            /* @__PURE__ */ jsxRuntime.jsx(
              material.List,
              {
                sx: {
                  margin: 0,
                  padding: 0
                },
                children: categories.map((category, index) => /* @__PURE__ */ jsxRuntime.jsx(
                  material.ListItem,
                  {
                    sx: {
                      padding: 0
                    },
                    children: /* @__PURE__ */ jsxRuntime.jsx(ExternalLink, { href: category.link, children: category.title })
                  },
                  index
                ))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(material.Grid, { item: true, xs: 6, md: 3, children: [
            /* @__PURE__ */ jsxRuntime.jsx(material.Typography, { variant: "h6", children: "Quick Links" }),
            /* @__PURE__ */ jsxRuntime.jsx(
              material.List,
              {
                sx: {
                  margin: 0,
                  padding: 0
                },
                children: quickLinks.map((link, index) => /* @__PURE__ */ jsxRuntime.jsx(
                  material.ListItem,
                  {
                    sx: {
                      padding: 0
                    },
                    children: /* @__PURE__ */ jsxRuntime.jsx(ExternalLink, { href: link.link, children: link.title })
                  },
                  index
                ))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(material.Grid, { container: true, children: /* @__PURE__ */ jsxRuntime.jsx(material.Grid, { container: true, children: /* @__PURE__ */ jsxRuntime.jsx(material.Grid, { item: true, md: 8, sm: 6, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "copyright-text", children: [
          "Copyright \xA9 ",
          new Date().getFullYear(),
          " All Rights Reserved by\xA0",
          /* @__PURE__ */ jsxRuntime.jsx(material.Link, { href: "#", color: LinkColor, children: "Calpa Liu" }),
          "."
        ] }) }) }) })
      ]
    }
  );
};
var Footer_default = Footer;
var GithubCorner = ({ url, target }) => /* @__PURE__ */ jsxRuntime.jsx(
  "a",
  {
    href: url,
    className: "github-corner",
    "aria-label": "View source on Github",
    target,
    children: /* @__PURE__ */ jsxRuntime.jsxs(
      "svg",
      {
        width: "60",
        height: "60",
        viewBox: "0 0 250 250",
        "aria-hidden": "true",
        className: "github-corner-svg",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "path",
            {
              d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
              fill: "currentColor",
              className: "octo-arm"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "path",
            {
              d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
              fill: "currentColor",
              className: "octo-body"
            }
          )
        ]
      }
    )
  }
);
var GithubCorner_default = GithubCorner;
function noop() {
}
function NavBar(props) {
  const {
    navItemColor,
    pages,
    avatarAlt,
    avatarImage,
    title,
    onClick,
    handleTitleClick,
    position
  } = props;
  const [anchorElNav, setAnchorElNav] = react.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleNavItemClick = (event) => {
    setAnchorElNav(null);
    onClick && onClick(event);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(material.AppBar, { color: "navbar", position, children: /* @__PURE__ */ jsxRuntime.jsx(material.Container, { maxWidth: "xl", children: /* @__PURE__ */ jsxRuntime.jsxs(material.Toolbar, { disableGutters: true, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      material.Typography,
      {
        variant: "h6",
        noWrap: true,
        component: "a",
        onClick: handleTitleClick,
        sx: {
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          cursor: "pointer"
        },
        children: title
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(material.Box, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        material.IconButton,
        {
          size: "large",
          "aria-label": "account of current user",
          "aria-controls": "menu-appbar",
          "aria-haspopup": "true",
          onClick: handleOpenNavMenu,
          color: "inherit",
          children: /* @__PURE__ */ jsxRuntime.jsx(MenuIcon, {})
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        material.Menu,
        {
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
          onClose: handleNavItemClick,
          sx: {
            display: { xs: "block", md: "none" }
          },
          children: pages.map((page) => /* @__PURE__ */ jsxRuntime.jsx(material.MenuItem, { onClick: handleNavItemClick, children: /* @__PURE__ */ jsxRuntime.jsx(material.Typography, { textAlign: "center", color: "navbar.contrastColor", children: page }) }, page))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      material.Typography,
      {
        variant: "h5",
        noWrap: true,
        component: "a",
        sx: {
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          cursor: "pointer"
        },
        onClick: handleTitleClick,
        children: title
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(material.Box, { sx: { flexGrow: 1, display: { xs: "none", md: "flex" } }, children: pages.map((page) => /* @__PURE__ */ jsxRuntime.jsx(
      material.Button,
      {
        onClick: handleNavItemClick,
        sx: {
          display: "block",
          color: (theme) => theme.palette.getContrastText(theme.palette.navbar.main)
        },
        id: `blog-nav-item-${page}`,
        children: page
      },
      page
    )) }),
    /* @__PURE__ */ jsxRuntime.jsx(material.Box, { sx: { flexGrow: 0 }, children: /* @__PURE__ */ jsxRuntime.jsx(material.Tooltip, { title: avatarAlt, children: /* @__PURE__ */ jsxRuntime.jsx(material.IconButton, { sx: { p: 0 }, children: /* @__PURE__ */ jsxRuntime.jsx(material.Avatar, { alt: avatarAlt, src: avatarImage, children: avatarAlt[0] }) }) }) })
  ] }) }) });
}
var NavBar_default = NavBar;
NavBar.defaultProps = {
  color: "default",
  onClick: noop,
  handleTitleClick: noop
};
function SignIn({ handleSubmit }) {
  react.useState("");
  react.useState("");
  react.useState(false);
  function onSubmit(event) {
    event.preventDefault();
    handleSubmit(event);
    new FormData(event.currentTarget);
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box2,
    {
      sx: {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Avatar2, { sx: { m: 1, bgcolor: "primary.main" }, children: /* @__PURE__ */ jsxRuntime.jsx(LockOutlinedIcon, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx(Typography5, { component: "h1", variant: "h5", children: "Sign in" }),
        /* @__PURE__ */ jsxRuntime.jsxs(Box2, { component: "form", onSubmit, noValidate: true, sx: { mt: 1 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            TextField,
            {
              margin: "normal",
              required: true,
              fullWidth: true,
              id: "email",
              label: "Email Address",
              name: "email",
              autoComplete: "email",
              inputProps: {
                pattern: "[\\w-]+@[\\w-]+\\.[a-z]{2,}",
                inputMode: "email",
                "data-testid": "email"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            TextField,
            {
              margin: "normal",
              required: true,
              fullWidth: true,
              name: "password",
              label: "Password",
              type: "password",
              id: "password",
              autoComplete: "current-password",
              inputProps: {
                "data-testid": "password"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            FormControlLabel,
            {
              control: /* @__PURE__ */ jsxRuntime.jsx(Checkbox, { value: "remember", color: "primary" }),
              label: "Remember me"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button3,
            {
              type: "submit",
              fullWidth: true,
              variant: "contained",
              sx: { mt: 3, mb: 2 },
              children: "Sign In"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(Grid3, { container: true, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Grid3, { item: true, xs: true, children: /* @__PURE__ */ jsxRuntime.jsx(Link2, { href: "#", variant: "body2", children: "Forgot password?" }) }),
            /* @__PURE__ */ jsxRuntime.jsx(Grid3, { item: true, children: /* @__PURE__ */ jsxRuntime.jsx(Link2, { href: "#", variant: "body2", children: "Don't have an account? Sign Up" }) })
          ] })
        ] })
      ]
    }
  );
}
var SignIn_default = SignIn;
function JapanMap(props) {
  const { onClick } = props;
  const mapRef = react.useRef(null);
  react.useEffect(() => {
    var _a, _b;
    const map2 = new svgJapan(props);
    (_a = mapRef.current) == null ? void 0 : _a.replaceChildren(map2.map_container);
    (_b = mapRef.current) == null ? void 0 : _b.addEventListener("svgmap.click", onClick);
  }, [mapRef, props]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: mapRef });
}
var JapanMap_default = JapanMap;
var useStyles = mui.makeStyles({
  name: "ListItem"
})((theme) => ({
  url: {
    textDecoration: "none",
    whiteSpace: "nowrap",
    lineHeight: "45px",
    color: "#585858",
    display: "flex"
  },
  title: {
    color: "#585858",
    flex: "1 1 auto",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  number: {
    flex: "0 0 25px",
    marginRight: "2px",
    width: "25px",
    fontSize: "21px",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    textAlign: "center"
  },
  listItem: {
    listStyleType: "none",
    height: `45px`,
    borderBottom: `1px dotted #bfbfbf`,
    transition: `background-color 0.2s ease-in-out`,
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  }
}));
var ListItem2 = (props) => {
  const { number, title, url, Link: Link3 } = props;
  const { classes, cx } = useStyles();
  return /* @__PURE__ */ jsxRuntime.jsx("li", { className: cx(classes.listItem), children: /* @__PURE__ */ jsxRuntime.jsxs(EnhancedLink_default, { url, className: cx(classes.url), Link: Link3, children: [
    /* @__PURE__ */ jsxRuntime.jsx("b", { className: cx(classes.number), children: number }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: cx(classes.title), children: title })
  ] }) });
};
var ListItem_default = ListItem2;
var useStyles2 = mui.makeStyles({
  name: "List"
})((theme) => ({
  topic: {
    margin: "0",
    padding: "0 0 0 28px",
    display: "flex",
    boxSizing: "border-box",
    justifyContent: "space-between",
    height: "32px",
    position: "relative",
    borderBottom: "2px solid #dadada",
    lineHeight: "30px",
    background: "no-repeat left center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: "21px"
  },
  content: {
    margin: 0,
    border: `2px solid #dadada`,
    borderTop: `0 none`,
    padding: `16px 25px 15px`
  }
}));
var List2 = (props) => {
  const { listItems, topic, Link: Link3 } = props;
  const { classes, cx } = useStyles2();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsx("h2", { className: cx(classes.topic), children: /* @__PURE__ */ jsxRuntime.jsx("span", { children: topic }) }),
    /* @__PURE__ */ jsxRuntime.jsx("ol", { className: cx(classes.content), children: listItems.map((item, index) => /* @__PURE__ */ jsxRuntime.jsx(ListItem_default, __spreadProps(__spreadValues({}, item), { Link: Link3 }), index)) })
  ] });
};
var List_default = List2;
function Attraction(props) {
  const { description, title, location, articles, Image, Link: Link3 } = props;
  return /* @__PURE__ */ jsxRuntime.jsxs(material.Grid, { container: true, id: `attraction-${location}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      material.Typography,
      {
        variant: "h2",
        sx: {
          borderLeft: `5px solid red`,
          paddingLeft: `10px`
        },
        children: [
          title,
          "\uFF1A",
          location
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      material.Grid,
      {
        container: true,
        sx: {
          marginTop: {
            sm: `10px`
          }
        },
        children: [
          Image !== void 0 && /* @__PURE__ */ jsxRuntime.jsx(material.Grid, { item: true, xs: 12, sm: 3, children: /* @__PURE__ */ jsxRuntime.jsx(Image, {}) }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            material.Grid,
            {
              container: true,
              item: true,
              xs: true,
              sm: true,
              sx: {
                marginLeft: {
                  sm: `10px`
                },
                marginTop: {
                  xs: `10px`,
                  sm: `0`
                }
              },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(material.Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(material.Typography, { variant: "body1", children: description }) }),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  material.Grid,
                  {
                    item: true,
                    xs: 12,
                    sx: {
                      marginTop: {
                        xs: `10px`
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsxs(material.Typography, { children: [
                        "\u7ACB\u523B\u63A2\u7D22",
                        location,
                        "\uFF01"
                      ] }),
                      /* @__PURE__ */ jsxRuntime.jsx(
                        "ul",
                        {
                          style: {
                            paddingInlineStart: 0,
                            listStyleType: `none`
                          },
                          children: articles && articles.map((article, index) => /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsx(EnhancedLink_default, { url: article.url, className: "", Link: Link3, children: article.title }) }, index))
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
var Attraction_default = Attraction;
Attraction.defaultProps = {
  articles: []
};
var useStyles3 = mui.makeStyles({
  name: "MainImage"
})((theme, { backgroundImage }) => ({
  mainImage: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    "min-width": "1024px",
    height: "640px",
    overflow: "hidden"
  },
  image: {
    height: "640px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${backgroundImage})`
  },
  text: {
    position: `relative`,
    transition: `top 1s ease, opacity 0.7s ease`,
    color: "#fff",
    fontSize: "60px",
    fontWeight: 400,
    letterSpacing: `0.05em`,
    lineHeight: `1.15`,
    textShadow: `0 0 8px #000, 0 0 12px #000`,
    textAlign: `center`
  },
  mainCopy: {
    position: "absolute",
    top: "calc(50% + 60px)",
    left: "50%",
    width: "100%",
    transform: "translate(-50%, -50%)"
  }
}));
function MainImage(props) {
  const { backgroundImage, name } = props;
  const { classes, cx } = useStyles3({
    backgroundImage
  });
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { id: "mainImage", className: cx(classes.mainImage), children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx("figure", { children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cx(classes.image) }) }) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: cx(classes.mainCopy), children: /* @__PURE__ */ jsxRuntime.jsx(material.Typography, { variant: "h1", className: cx(classes.text), children: name }) })
  ] });
}
var MainImage_default = MainImage;

// src/themes/typography.ts
var typographyOptions = {
  fontSize: 16,
  fontFamily: [
    '"Noto Serif JP"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(","),
  h1: {
    fontSize: 24,
    fontWeight: 600
  },
  h2: {
    fontSize: 22,
    fontWeight: 600
  },
  h3: {
    fontSize: 20,
    fontWeight: 600
  },
  h4: {
    fontSize: 18,
    fontWeight: 600
  },
  h5: {
    fontSize: 16,
    fontWeight: 600
  }
};
var typography_default = typographyOptions;

// src/themes/dark.theme.ts
var darkTheme = material.createTheme({
  typography: typography_default,
  palette: {
    mode: "dark",
    navbar: {
      main: "#f5f5f5"
    },
    blue: {
      light: "#337ab7",
      main: "#0056b3",
      dark: "#0f457f"
    },
    primary: {
      main: colors.pink["A200"]
    },
    secondary: {
      main: colors.cyan["A400"]
    },
    background: {
      default: colors.blueGrey["800"],
      paper: colors.blueGrey["700"]
    }
  }
});
var lightTheme = material.createTheme({
  typography: typography_default,
  palette: {
    mode: "light",
    navbar: {
      main: "#f5f5f5"
    },
    blue: {
      light: "#337ab7",
      main: "#0056b3",
      dark: "#0f457f"
    },
    primary: {
      main: `#81C7D4`
    },
    secondary: {
      main: `#faf7a1`
    },
    error: {
      main: `#CB1B45`
    },
    success: {
      main: `#BEC23F`
    }
  }
});

exports.Attraction = Attraction_default;
exports.Blockquote = Blockquote_default;
exports.Button = Button_default;
exports.Card = Card_default;
exports.Date = Date_default;
exports.Footer = Footer_default;
exports.GithubCorner = GithubCorner_default;
exports.JapanMap = JapanMap_default;
exports.List = List_default;
exports.ListItem = ListItem_default;
exports.MainImage = MainImage_default;
exports.NavBar = NavBar_default;
exports.SignIn = SignIn_default;
exports.Tag = Tag_default;
exports.darkTheme = darkTheme;
exports.lightTheme = lightTheme;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map