import "./index.css";
import {jsx as $681qW$jsx, jsxs as $681qW$jsxs} from "react/jsx-runtime";
import {Button as $681qW$Button, Card as $681qW$Card, CardActionArea as $681qW$CardActionArea, CardContent as $681qW$CardContent, Grid as $681qW$Grid, Typography as $681qW$Typography, Link as $681qW$Link, List as $681qW$List, ListItem as $681qW$ListItem, AppBar as $681qW$AppBar, Container as $681qW$Container, Toolbar as $681qW$Toolbar, Box as $681qW$Box, IconButton as $681qW$IconButton, Menu as $681qW$Menu, MenuItem as $681qW$MenuItem, Tooltip as $681qW$Tooltip, Avatar as $681qW$Avatar} from "@mui/material";
import {map as $681qW$map} from "lodash";
import $681qW$proptypes from "prop-types";
import $681qW$muiiconsmaterialMenu from "@mui/icons-material/Menu";
import {useState as $681qW$useState} from "react";
import $681qW$muiiconsmaterialLockOutlined from "@mui/icons-material/LockOutlined";
import $681qW$muimaterialAvatar from "@mui/material/Avatar";
import $681qW$muimaterialBox from "@mui/material/Box";
import $681qW$muimaterialButton from "@mui/material/Button";
import $681qW$muimaterialCheckbox from "@mui/material/Checkbox";
import $681qW$muimaterialFormControlLabel from "@mui/material/FormControlLabel";
import $681qW$muimaterialGrid from "@mui/material/Grid";
import $681qW$muimaterialLink from "@mui/material/Link";
import $681qW$muimaterialTextField from "@mui/material/TextField";
import $681qW$muimaterialTypography from "@mui/material/Typography";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $b65191f6d0a0a991$exports = {};

$parcel$export($b65191f6d0a0a991$exports, "Blockquote", function () { return $3c428f9ab394f367$export$2e2bcd8739ae039; });
$parcel$export($b65191f6d0a0a991$exports, "Button", function () { return $5239fd20ec9f31f3$export$2e2bcd8739ae039; });
$parcel$export($b65191f6d0a0a991$exports, "Card", function () { return $616c692299a75f89$export$2e2bcd8739ae039; });
$parcel$export($b65191f6d0a0a991$exports, "Date", function () { return $59a70b0d3de6e811$export$2e2bcd8739ae039; });
$parcel$export($b65191f6d0a0a991$exports, "Footer", function () { return $046e9d052206d34f$export$2e2bcd8739ae039; });
$parcel$export($b65191f6d0a0a991$exports, "GithubCorner", function () { return $c7932d61ef8b8d14$export$2e2bcd8739ae039; });
$parcel$export($b65191f6d0a0a991$exports, "NavBar", function () { return $4df044613c4d8e22$export$2e2bcd8739ae039; });
$parcel$export($b65191f6d0a0a991$exports, "SignIn", function () { return $491d5f8cba17e554$export$2e2bcd8739ae039; });
$parcel$export($b65191f6d0a0a991$exports, "Tag", function () { return $cc13e3b1dd9d7ba1$export$2e2bcd8739ae039; });

const $3c428f9ab394f367$var$Blockquote = (props)=>{
    return /*#__PURE__*/ (0, $681qW$jsx)("blockquote", {
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
var $3c428f9ab394f367$export$2e2bcd8739ae039 = $3c428f9ab394f367$var$Blockquote;




const $5239fd20ec9f31f3$var$CustomButton = (props)=>{
    return /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Button), {
        ...props
    });
};
$5239fd20ec9f31f3$var$CustomButton.defaultProps = {
    variant: "contained",
    color: "primary",
    onClick: undefined
};
var $5239fd20ec9f31f3$export$2e2bcd8739ae039 = $5239fd20ec9f31f3$var$CustomButton;







function $59a70b0d3de6e811$var$Date(props) {
    const { date: date  } = props;
    return /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Typography), {
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
var $59a70b0d3de6e811$export$2e2bcd8739ae039 = $59a70b0d3de6e811$var$Date;




const $cc13e3b1dd9d7ba1$var$Tag = ({ tag: tag , children: children , Link: Link = "a"  })=>{
    // Check if the Link prop is an "a" tag
    const isAnchor = Link === "a"; // Will be true if Link is an "a" tag
    // Use the appropriate prop based on the value of the Link prop
    const linkProps = {
        [isAnchor ? "href" : "to"]: `/tag/${tag}`,
        className: "tag"
    };
    return /*#__PURE__*/ (0, $681qW$jsx)(Link, {
        ...linkProps,
        children: tag
    });
};
$cc13e3b1dd9d7ba1$var$Tag.defaultProps = {
    tag: ""
};
var $cc13e3b1dd9d7ba1$export$2e2bcd8739ae039 = $cc13e3b1dd9d7ba1$var$Tag;


const $616c692299a75f89$var$CustomCard = ({ onClick: onClick , title: title , description: description , date: date , moreText: moreText , tags: tags , Link: Link  })=>{
    return /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Card), {
        sx: {
            marginBottom: "10px"
        },
        onClick: onClick,
        children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$CardActionArea), {
            children: /*#__PURE__*/ (0, $681qW$jsxs)((0, $681qW$CardContent), {
                children: [
                    /*#__PURE__*/ (0, $681qW$jsxs)((0, $681qW$Grid), {
                        container: true,
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Grid), {
                                item: true,
                                xs: 6,
                                sm: 10,
                                children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Typography), {
                                    variant: "h1",
                                    sx: {
                                        textDecoration: "none",
                                        textAlign: "justify"
                                    },
                                    children: title
                                })
                            }),
                            /*#__PURE__*/ (0, $681qW$jsx)((0, $59a70b0d3de6e811$export$2e2bcd8739ae039), {
                                date: date
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Typography), {
                        children: description
                    }),
                    /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Grid), {
                        container: true,
                        item: true,
                        xs: 12,
                        children: (0, $681qW$map)(tags, (tag, index)=>/*#__PURE__*/ (0, $681qW$jsx)((0, $cc13e3b1dd9d7ba1$export$2e2bcd8739ae039), {
                                tag: tag,
                                Link: Link,
                                children: tag
                            }, tag))
                    }),
                    /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Typography), {
                        color: "blue.main",
                        children: moreText
                    })
                ]
            })
        })
    });
};
$616c692299a75f89$var$CustomCard.defaultProps = {
    moreText: "Read More",
    tags: []
};
var $616c692299a75f89$export$2e2bcd8739ae039 = $616c692299a75f89$var$CustomCard;






const $046e9d052206d34f$var$LinkColor = `info.dark`;
const $046e9d052206d34f$var$ExternalLink = (props)=>{
    return /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Link), {
        href: props.href,
        target: "_blank",
        rel: "noopener noreferrer",
        color: $046e9d052206d34f$var$LinkColor,
        children: props.children || props.title
    });
};
const $046e9d052206d34f$var$Footer = (props)=>{
    const { categories: categories , quickLinks: quickLinks  } = props;
    return /*#__PURE__*/ (0, $681qW$jsxs)((0, $681qW$Grid), {
        container: true,
        className: "site-footer",
        sx: {
            padding: `10px`,
            backgroundColor: `#f0f0f0`
        },
        children: [
            /*#__PURE__*/ (0, $681qW$jsxs)((0, $681qW$Grid), {
                container: true,
                children: [
                    /*#__PURE__*/ (0, $681qW$jsxs)((0, $681qW$Grid), {
                        item: true,
                        sm: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Typography), {
                                variant: "h6",
                                children: "About"
                            }),
                            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Typography), {
                                textAlign: "justify",
                                children: props.about
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $681qW$jsxs)((0, $681qW$Grid), {
                        item: true,
                        xs: 6,
                        md: 3,
                        children: [
                            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Typography), {
                                variant: "h6",
                                children: "Categories"
                            }),
                            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$List), {
                                sx: {
                                    margin: 0,
                                    padding: 0
                                },
                                children: categories.map((category, index)=>/*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$ListItem), {
                                        sx: {
                                            padding: 0
                                        },
                                        children: /*#__PURE__*/ (0, $681qW$jsx)($046e9d052206d34f$var$ExternalLink, {
                                            href: category.link,
                                            children: category.title
                                        })
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $681qW$jsxs)((0, $681qW$Grid), {
                        item: true,
                        xs: 6,
                        md: 3,
                        children: [
                            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Typography), {
                                variant: "h6",
                                children: "Quick Links"
                            }),
                            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$List), {
                                sx: {
                                    margin: 0,
                                    padding: 0
                                },
                                children: quickLinks.map((link, index)=>/*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$ListItem), {
                                        sx: {
                                            padding: 0
                                        },
                                        children: /*#__PURE__*/ (0, $681qW$jsx)($046e9d052206d34f$var$ExternalLink, {
                                            href: link.link,
                                            children: link.title
                                        })
                                    }, index))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Grid), {
                container: true,
                children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Grid), {
                    container: true,
                    children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Grid), {
                        item: true,
                        md: 8,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0, $681qW$jsxs)("p", {
                            className: "copyright-text",
                            children: [
                                "Copyright \xa9 ",
                                new Date().getFullYear(),
                                " All Rights Reserved by\xa0",
                                /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Link), {
                                    href: "#",
                                    color: $046e9d052206d34f$var$LinkColor,
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
var $046e9d052206d34f$export$2e2bcd8739ae039 = $046e9d052206d34f$var$Footer;





const $c7932d61ef8b8d14$var$GithubCorner = ({ url: url , target: target  })=>/*#__PURE__*/ (0, $681qW$jsx)("a", {
        href: url,
        className: "github-corner",
        "aria-label": "View source on Github",
        target: target,
        children: /*#__PURE__*/ (0, $681qW$jsxs)("svg", {
            width: "60",
            height: "60",
            viewBox: "0 0 250 250",
            "aria-hidden": "true",
            className: "github-corner-svg",
            children: [
                /*#__PURE__*/ (0, $681qW$jsx)("path", {
                    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
                }),
                /*#__PURE__*/ (0, $681qW$jsx)("path", {
                    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
                    fill: "currentColor",
                    className: "octo-arm"
                }),
                /*#__PURE__*/ (0, $681qW$jsx)("path", {
                    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
                    fill: "currentColor",
                    className: "octo-body"
                })
            ]
        })
    });
var $c7932d61ef8b8d14$export$2e2bcd8739ae039 = $c7932d61ef8b8d14$var$GithubCorner;
$c7932d61ef8b8d14$var$GithubCorner.propTypes = {
    url: (0, $681qW$proptypes).string.isRequired,
    target: (0, $681qW$proptypes).string
};






function $4df044613c4d8e22$var$NavBar(props) {
    const { pages: pages , avatarAlt: avatarAlt , avatarImage: avatarImage , title: title  } = props;
    const [anchorElNav, setAnchorElNav] = $681qW$useState(null);
    const [anchorElUser, setAnchorElUser] = $681qW$useState(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    return /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$AppBar), {
        position: "static",
        children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Container), {
            maxWidth: "xl",
            children: /*#__PURE__*/ (0, $681qW$jsxs)((0, $681qW$Toolbar), {
                disableGutters: true,
                children: [
                    /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Typography), {
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
                        },
                        children: title
                    }),
                    /*#__PURE__*/ (0, $681qW$jsxs)((0, $681qW$Box), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$IconButton), {
                                size: "large",
                                "aria-label": "account of current user",
                                "aria-controls": "menu-appbar",
                                "aria-haspopup": "true",
                                onClick: handleOpenNavMenu,
                                color: "inherit",
                                children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muiiconsmaterialMenu), {})
                            }),
                            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Menu), {
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
                                },
                                children: pages.map((page)=>/*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$MenuItem), {
                                        onClick: handleCloseNavMenu,
                                        children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Typography), {
                                            textAlign: "center",
                                            children: page
                                        })
                                    }, page))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Typography), {
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
                        },
                        children: title
                    }),
                    /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Box), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        },
                        children: pages.map((page)=>/*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Button), {
                                onClick: handleCloseNavMenu,
                                sx: {
                                    color: "white",
                                    display: "block"
                                },
                                children: page
                            }, page))
                    }),
                    /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Box), {
                        sx: {
                            flexGrow: 0
                        },
                        children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Tooltip), {
                            title: avatarAlt,
                            children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$IconButton), {
                                sx: {
                                    p: 0
                                },
                                children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$Avatar), {
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
var $4df044613c4d8e22$export$2e2bcd8739ae039 = $4df044613c4d8e22$var$NavBar;














function $491d5f8cba17e554$var$SignIn(props) {
    const { handleSubmit: handleSubmit  } = props;
    function onSubmit(event) {
        event.preventDefault();
        handleSubmit(event);
        const data = new FormData(event.currentTarget);
    }
    return /*#__PURE__*/ (0, $681qW$jsxs)((0, $681qW$muimaterialBox), {
        sx: {
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muimaterialAvatar), {
                sx: {
                    m: 1,
                    bgcolor: "primary.main"
                },
                children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muiiconsmaterialLockOutlined), {})
            }),
            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muimaterialTypography), {
                component: "h1",
                variant: "h5",
                children: "Sign in"
            }),
            /*#__PURE__*/ (0, $681qW$jsxs)((0, $681qW$muimaterialBox), {
                component: "form",
                onSubmit: onSubmit,
                noValidate: true,
                sx: {
                    mt: 1
                },
                children: [
                    /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muimaterialTextField), {
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
                    /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muimaterialTextField), {
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
                    /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muimaterialFormControlLabel), {
                        control: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muimaterialCheckbox), {
                            value: "remember",
                            color: "primary"
                        }),
                        label: "Remember me"
                    }),
                    /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muimaterialButton), {
                        type: "submit",
                        fullWidth: true,
                        variant: "contained",
                        sx: {
                            mt: 3,
                            mb: 2
                        },
                        children: "Sign In"
                    }),
                    /*#__PURE__*/ (0, $681qW$jsxs)((0, $681qW$muimaterialGrid), {
                        container: true,
                        children: [
                            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muimaterialGrid), {
                                item: true,
                                xs: true,
                                children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muimaterialLink), {
                                    href: "#",
                                    variant: "body2",
                                    children: "Forgot password?"
                                })
                            }),
                            /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muimaterialGrid), {
                                item: true,
                                children: /*#__PURE__*/ (0, $681qW$jsx)((0, $681qW$muimaterialLink), {
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
var $491d5f8cba17e554$export$2e2bcd8739ae039 = $491d5f8cba17e554$var$SignIn;
$491d5f8cba17e554$var$SignIn.propTypes = {
    handleSubmit: (0, $681qW$proptypes).func
};
$491d5f8cba17e554$var$SignIn.defaultProps = {
    handleSubmit: ()=>{}
};







//# sourceMappingURL=module.js.map
