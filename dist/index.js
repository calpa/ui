require("./index.css");
var $kRA3g$reactjsxruntime = require("react/jsx-runtime");
var $kRA3g$react = require("react");
var $kRA3g$swchelperslib_object_spreadjs = require("@swc/helpers/lib/_object_spread.js");
var $kRA3g$muimaterial = require("@mui/material");
var $kRA3g$lodash = require("lodash");
var $kRA3g$swchelperslib_define_propertyjs = require("@swc/helpers/lib/_define_property.js");
var $kRA3g$swchelperslib_object_spread_propsjs = require("@swc/helpers/lib/_object_spread_props.js");
var $kRA3g$swchelperslib_sliced_to_arrayjs = require("@swc/helpers/lib/_sliced_to_array.js");
var $kRA3g$muiiconsmaterialMenu = require("@mui/icons-material/Menu");
var $kRA3g$muiiconsmaterialLockOutlined = require("@mui/icons-material/LockOutlined");
var $kRA3g$muimaterialAvatar = require("@mui/material/Avatar");
var $kRA3g$muimaterialBox = require("@mui/material/Box");
var $kRA3g$muimaterialButton = require("@mui/material/Button");
var $kRA3g$muimaterialCheckbox = require("@mui/material/Checkbox");
var $kRA3g$muimaterialFormControlLabel = require("@mui/material/FormControlLabel");
var $kRA3g$muimaterialGrid = require("@mui/material/Grid");
var $kRA3g$muimaterialLink = require("@mui/material/Link");
var $kRA3g$muimaterialTextField = require("@mui/material/TextField");
var $kRA3g$muimaterialTypography = require("@mui/material/Typography");
var $kRA3g$svgjapansrc_coreclass = require("svg-japan/src/_core-class");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Blockquote", function () { return $dc5d809e961b599a$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Button", function () { return $d9fd4d1486bbea23$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Card", function () { return $9d11b387092b23df$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Date", function () { return $5f2b0527349d74dd$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Footer", function () { return $cac232ee6c5056cb$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "GithubCorner", function () { return $91fb128693f0a15d$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "NavBar", function () { return $ed57b44d1f79d01b$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "SignIn", function () { return $af05c24c81a9cc23$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Tag", function () { return $29cb95a2a78028d8$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "JapanMap", function () { return $2a43c772779de585$export$2e2bcd8739ae039; });


var $dc5d809e961b599a$var$Blockquote = function(props) {
    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)("blockquote", {
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
var $dc5d809e961b599a$export$2e2bcd8739ae039 = $dc5d809e961b599a$var$Blockquote;





var $d9fd4d1486bbea23$var$CustomButton = function(props) {
    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Button), (0, ($parcel$interopDefault($kRA3g$swchelperslib_object_spreadjs)))({}, props));
};
$d9fd4d1486bbea23$var$CustomButton.defaultProps = {
    variant: "contained",
    color: "primary",
    onClick: undefined
};
var $d9fd4d1486bbea23$export$2e2bcd8739ae039 = $d9fd4d1486bbea23$var$CustomButton;







var $5f2b0527349d74dd$var$Date = function(props) {
    var date = props.date;
    if (!date) return null;
    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Typography), {
        sx: {
            backgroundColor: "blue.main",
            color: "#fff",
            padding: "10px",
            width: "110px",
            textAlign: "center",
            fontSize: "16px"
        },
        children: date
    });
};
var $5f2b0527349d74dd$export$2e2bcd8739ae039 = $5f2b0527349d74dd$var$Date;







var $29cb95a2a78028d8$var$Tag = function(param) {
    var tag = param.tag, _param_Link = param.Link, Link = _param_Link === void 0 ? "a" : _param_Link;
    // Check if the Link prop is an "a" tag
    var isAnchor = Link === "a"; // Will be true if Link is an "a" tag
    var _obj;
    // Use the appropriate prop based on the value of the Link prop
    var linkProps = (_obj = {}, (0, ($parcel$interopDefault($kRA3g$swchelperslib_define_propertyjs)))(_obj, isAnchor ? "href" : "to", "/tag/".concat(tag)), (0, ($parcel$interopDefault($kRA3g$swchelperslib_define_propertyjs)))(_obj, "className", "tag"), _obj);
    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)(Link, (0, ($parcel$interopDefault($kRA3g$swchelperslib_object_spread_propsjs)))((0, ($parcel$interopDefault($kRA3g$swchelperslib_object_spreadjs)))({}, linkProps), {
        children: tag
    }));
};
$29cb95a2a78028d8$var$Tag.defaultProps = {
    tag: ""
};
var $29cb95a2a78028d8$export$2e2bcd8739ae039 = $29cb95a2a78028d8$var$Tag;


var $9d11b387092b23df$var$CustomCard = function(param) {
    var onClick = param.onClick, title = param.title, description = param.description, date = param.date, moreText = param.moreText, tags = param.tags, Link = param.Link, showDateComponent = param.showDateComponent, showTagsComponent = param.showTagsComponent;
    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Card), {
        sx: {
            marginBottom: "10px"
        },
        onClick: onClick,
        children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.CardActionArea), {
            children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)((0, $kRA3g$muimaterial.CardContent), {
                children: [
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)((0, $kRA3g$muimaterial.Grid), {
                        container: true,
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Grid), {
                                item: true,
                                xs: 6,
                                sm: 10,
                                children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Typography), {
                                    variant: "h1",
                                    sx: {
                                        textDecoration: "none",
                                        textAlign: "justify"
                                    },
                                    children: title
                                })
                            }),
                            showDateComponent && /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $5f2b0527349d74dd$export$2e2bcd8739ae039), {
                                date: date
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Typography), {
                        children: description
                    }),
                    showTagsComponent && /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Grid), {
                        container: true,
                        item: true,
                        xs: 12,
                        children: (0, $kRA3g$lodash.map)(tags, function(tag) {
                            return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $29cb95a2a78028d8$export$2e2bcd8739ae039), {
                                tag: tag,
                                Link: Link,
                                children: tag
                            }, tag);
                        })
                    }),
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Typography), {
                        color: "blue.main",
                        children: moreText
                    })
                ]
            })
        })
    });
};
$9d11b387092b23df$var$CustomCard.defaultProps = {
    moreText: "Read More",
    tags: [],
    showTagsComponent: true,
    showDateComponent: true
};
var $9d11b387092b23df$export$2e2bcd8739ae039 = $9d11b387092b23df$var$CustomCard;






var $cac232ee6c5056cb$var$LinkColor = "info.dark";
var $cac232ee6c5056cb$var$ExternalLink = function(props) {
    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Link), {
        href: props.href,
        target: "_blank",
        rel: "noopener noreferrer",
        color: $cac232ee6c5056cb$var$LinkColor,
        children: props.children || props.title
    });
};
var $cac232ee6c5056cb$var$Footer = function(props) {
    var categories = props.categories, quickLinks = props.quickLinks;
    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)((0, $kRA3g$muimaterial.Grid), {
        container: true,
        className: "site-footer",
        sx: {
            padding: "10px",
            backgroundColor: "#f0f0f0"
        },
        children: [
            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)((0, $kRA3g$muimaterial.Grid), {
                container: true,
                children: [
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)((0, $kRA3g$muimaterial.Grid), {
                        item: true,
                        sm: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Typography), {
                                variant: "h6",
                                children: "About"
                            }),
                            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Typography), {
                                textAlign: "justify",
                                children: props.about
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)((0, $kRA3g$muimaterial.Grid), {
                        item: true,
                        xs: 6,
                        md: 3,
                        children: [
                            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Typography), {
                                variant: "h6",
                                children: "Categories"
                            }),
                            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.List), {
                                sx: {
                                    margin: 0,
                                    padding: 0
                                },
                                children: categories.map(function(category, index) {
                                    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.ListItem), {
                                        sx: {
                                            padding: 0
                                        },
                                        children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)($cac232ee6c5056cb$var$ExternalLink, {
                                            href: category.link,
                                            children: category.title
                                        })
                                    }, index);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)((0, $kRA3g$muimaterial.Grid), {
                        item: true,
                        xs: 6,
                        md: 3,
                        children: [
                            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Typography), {
                                variant: "h6",
                                children: "Quick Links"
                            }),
                            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.List), {
                                sx: {
                                    margin: 0,
                                    padding: 0
                                },
                                children: quickLinks.map(function(link, index) {
                                    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.ListItem), {
                                        sx: {
                                            padding: 0
                                        },
                                        children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)($cac232ee6c5056cb$var$ExternalLink, {
                                            href: link.link,
                                            children: link.title
                                        })
                                    }, index);
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Grid), {
                container: true,
                children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Grid), {
                    container: true,
                    children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Grid), {
                        item: true,
                        md: 8,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)("p", {
                            className: "copyright-text",
                            children: [
                                "Copyright \xa9 ",
                                new Date().getFullYear(),
                                " All Rights Reserved by\xa0",
                                /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Link), {
                                    href: "#",
                                    color: $cac232ee6c5056cb$var$LinkColor,
                                    children: "Calpa Liu"
                                }),
                                "."
                            ]
                        })
                    })
                })
            })
        ]
    });
};
var $cac232ee6c5056cb$export$2e2bcd8739ae039 = $cac232ee6c5056cb$var$Footer;





var $91fb128693f0a15d$var$GithubCorner = function(param) {
    var url = param.url, target = param.target;
    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)("a", {
        href: url,
        className: "github-corner",
        "aria-label": "View source on Github",
        target: target,
        children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)("svg", {
            width: "60",
            height: "60",
            viewBox: "0 0 250 250",
            "aria-hidden": "true",
            className: "github-corner-svg",
            children: [
                /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)("path", {
                    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
                }),
                /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)("path", {
                    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
                    fill: "currentColor",
                    className: "octo-arm"
                }),
                /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)("path", {
                    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
                    fill: "currentColor",
                    className: "octo-body"
                })
            ]
        })
    });
};
var $91fb128693f0a15d$export$2e2bcd8739ae039 = $91fb128693f0a15d$var$GithubCorner;







var $ed57b44d1f79d01b$var$Color;
(function(Color) {
    Color["Default"] = "default";
    Color["Inherit"] = "inherit";
    Color["Primary"] = "primary";
    Color["Secondary"] = "secondary";
    Color["Transparent"] = "transparent";
})($ed57b44d1f79d01b$var$Color || ($ed57b44d1f79d01b$var$Color = {}));
function $ed57b44d1f79d01b$var$noop() {}
function $ed57b44d1f79d01b$var$NavBar(props) {
    var navItemColor = props.navItemColor, pages = props.pages, avatarAlt = props.avatarAlt, avatarImage = props.avatarImage, title = props.title, _props_color = props.color, color = _props_color === void 0 ? $ed57b44d1f79d01b$var$Color.Default : _props_color, _props_onClick = props.onClick, onClick = _props_onClick === void 0 ? $ed57b44d1f79d01b$var$noop : _props_onClick, _props_handleTitleClick = props.handleTitleClick, handleTitleClick = _props_handleTitleClick === void 0 ? $ed57b44d1f79d01b$var$noop : _props_handleTitleClick;
    var _useState = (0, ($parcel$interopDefault($kRA3g$swchelperslib_sliced_to_arrayjs)))((0, $kRA3g$react.useState)(null), 2), anchorElNav = _useState[0], setAnchorElNav = _useState[1];
    var handleOpenNavMenu = function(event) {
        setAnchorElNav(event.currentTarget);
    };
    var handleNavItemClick = function(event) {
        setAnchorElNav(null);
        onClick && onClick(event);
    };
    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.AppBar), {
        position: "static",
        color: color,
        children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Container), {
            maxWidth: "xl",
            children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)((0, $kRA3g$muimaterial.Toolbar), {
                disableGutters: true,
                children: [
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Typography), {
                        variant: "h6",
                        noWrap: true,
                        component: "a",
                        onClick: handleTitleClick,
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
                            textDecoration: "none",
                            cursor: "pointer"
                        },
                        children: title
                    }),
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)((0, $kRA3g$muimaterial.Box), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.IconButton), {
                                size: "large",
                                "aria-label": "account of current user",
                                "aria-controls": "menu-appbar",
                                "aria-haspopup": "true",
                                onClick: handleOpenNavMenu,
                                color: "inherit",
                                children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muiiconsmaterialMenu))), {})
                            }),
                            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Menu), {
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
                                    display: {
                                        xs: "block",
                                        md: "none"
                                    }
                                },
                                children: pages.map(function(page) {
                                    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.MenuItem), {
                                        onClick: handleNavItemClick,
                                        children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Typography), {
                                            textAlign: "center",
                                            children: page
                                        })
                                    }, page);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Typography), {
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
                            // fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        },
                        children: title
                    }),
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Box), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        },
                        children: pages.map(function(page) {
                            return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Button), {
                                onClick: handleNavItemClick,
                                sx: {
                                    color: navItemColor,
                                    display: "block"
                                },
                                id: "blog-nav-item-".concat(page),
                                children: page
                            }, page);
                        })
                    }),
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Box), {
                        sx: {
                            flexGrow: 0
                        },
                        children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Tooltip), {
                            title: avatarAlt,
                            children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.IconButton), {
                                sx: {
                                    p: 0
                                },
                                children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, $kRA3g$muimaterial.Avatar), {
                                    alt: avatarAlt,
                                    src: avatarImage,
                                    children: avatarAlt[0]
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}
var $ed57b44d1f79d01b$export$2e2bcd8739ae039 = $ed57b44d1f79d01b$var$NavBar;















function $af05c24c81a9cc23$var$SignIn(param) {
    var handleSubmit = param.handleSubmit;
    var onSubmit = function onSubmit(event) {
        event.preventDefault();
        handleSubmit(event);
        var data = new FormData(event.currentTarget);
    };
    var _useState = (0, ($parcel$interopDefault($kRA3g$swchelperslib_sliced_to_arrayjs)))((0, $kRA3g$react.useState)(""), 2), email = _useState[0], setEmail = _useState[1];
    var _useState1 = (0, ($parcel$interopDefault($kRA3g$swchelperslib_sliced_to_arrayjs)))((0, $kRA3g$react.useState)(""), 2), password = _useState1[0], setPassword = _useState1[1];
    var _useState2 = (0, ($parcel$interopDefault($kRA3g$swchelperslib_sliced_to_arrayjs)))((0, $kRA3g$react.useState)(false), 2), remember = _useState2[0], setRemember = _useState2[1];
    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($kRA3g$muimaterialBox))), {
        sx: {
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muimaterialAvatar))), {
                sx: {
                    m: 1,
                    bgcolor: "primary.main"
                },
                children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muiiconsmaterialLockOutlined))), {})
            }),
            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muimaterialTypography))), {
                component: "h1",
                variant: "h5",
                children: "Sign in"
            }),
            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($kRA3g$muimaterialBox))), {
                component: "form",
                onSubmit: onSubmit,
                noValidate: true,
                sx: {
                    mt: 1
                },
                children: [
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muimaterialTextField))), {
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
                    }),
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muimaterialTextField))), {
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
                    }),
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muimaterialFormControlLabel))), {
                        control: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muimaterialCheckbox))), {
                            value: "remember",
                            color: "primary"
                        }),
                        label: "Remember me"
                    }),
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muimaterialButton))), {
                        type: "submit",
                        fullWidth: true,
                        variant: "contained",
                        sx: {
                            mt: 3,
                            mb: 2
                        },
                        children: "Sign In"
                    }),
                    /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($kRA3g$muimaterialGrid))), {
                        container: true,
                        children: [
                            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muimaterialGrid))), {
                                item: true,
                                xs: true,
                                children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muimaterialLink))), {
                                    href: "#",
                                    variant: "body2",
                                    children: "Forgot password?"
                                })
                            }),
                            /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muimaterialGrid))), {
                                item: true,
                                children: /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)((0, ($parcel$interopDefault($kRA3g$muimaterialLink))), {
                                    href: "#",
                                    variant: "body2",
                                    children: "Don't have an account? Sign Up"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
var $af05c24c81a9cc23$export$2e2bcd8739ae039 = $af05c24c81a9cc23$var$SignIn;







function $2a43c772779de585$var$JapanMap(props) {
    var onClick = props.onClick;
    var mapRef = (0, $kRA3g$react.useRef)(null);
    (0, $kRA3g$react.useEffect)(function() {
        var _mapRef_current, _mapRef_current1;
        var map = new (0, ($parcel$interopDefault($kRA3g$svgjapansrc_coreclass)))(props);
        (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.replaceChildren(map.map_container);
        (_mapRef_current1 = mapRef.current) === null || _mapRef_current1 === void 0 ? void 0 : _mapRef_current1.addEventListener("svgmap.click", onClick);
    }, [
        mapRef,
        props
    ]);
    return /*#__PURE__*/ (0, $kRA3g$reactjsxruntime.jsx)("div", {
        ref: mapRef
    });
}
var $2a43c772779de585$export$2e2bcd8739ae039 = $2a43c772779de585$var$JapanMap;




//# sourceMappingURL=index.js.map
