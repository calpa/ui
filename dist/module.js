import "./index.css";
import {jsx as $4dtzN$jsx, jsxs as $4dtzN$jsxs} from "react/jsx-runtime";
import {useState as $4dtzN$useState} from "react";
import {Button as $4dtzN$Button, Card as $4dtzN$Card, CardActionArea as $4dtzN$CardActionArea, CardContent as $4dtzN$CardContent, Grid as $4dtzN$Grid, Typography as $4dtzN$Typography, Link as $4dtzN$Link, List as $4dtzN$List, ListItem as $4dtzN$ListItem, AppBar as $4dtzN$AppBar, Container as $4dtzN$Container, Toolbar as $4dtzN$Toolbar, Box as $4dtzN$Box, IconButton as $4dtzN$IconButton, Menu as $4dtzN$Menu, MenuItem as $4dtzN$MenuItem, Tooltip as $4dtzN$Tooltip, Avatar as $4dtzN$Avatar} from "@mui/material";
import {map as $4dtzN$map} from "lodash";
import $4dtzN$muiiconsmaterialMenu from "@mui/icons-material/Menu";
import $4dtzN$muiiconsmaterialLockOutlined from "@mui/icons-material/LockOutlined";
import $4dtzN$muimaterialAvatar from "@mui/material/Avatar";
import $4dtzN$muimaterialBox from "@mui/material/Box";
import $4dtzN$muimaterialButton from "@mui/material/Button";
import $4dtzN$muimaterialCheckbox from "@mui/material/Checkbox";
import $4dtzN$muimaterialFormControlLabel from "@mui/material/FormControlLabel";
import $4dtzN$muimaterialGrid from "@mui/material/Grid";
import $4dtzN$muimaterialLink from "@mui/material/Link";
import $4dtzN$muimaterialTextField from "@mui/material/TextField";
import $4dtzN$muimaterialTypography from "@mui/material/Typography";



const $3c428f9ab394f367$var$Blockquote = (props)=>{
    return /*#__PURE__*/ (0, $4dtzN$jsx)("blockquote", {
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
    return /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Button), {
        ...props
    });
};
$5239fd20ec9f31f3$var$CustomButton.defaultProps = {
    variant: "contained",
    color: "primary",
    onClick: undefined
};
var $5239fd20ec9f31f3$export$2e2bcd8739ae039 = $5239fd20ec9f31f3$var$CustomButton;







const $59a70b0d3de6e811$var$Date = (props)=>{
    const { date: date  } = props;
    return /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Typography), {
        sx: {
            backgroundColor: "blue.main",
            color: "#fff",
            padding: "10px",
            width: "110px",
            textAlign: "center"
        },
        children: date
    });
};
var $59a70b0d3de6e811$export$2e2bcd8739ae039 = $59a70b0d3de6e811$var$Date;




const $cc13e3b1dd9d7ba1$var$Tag = ({ tag: tag , children: children , Link: Link = "a"  })=>{
    // Check if the Link prop is an "a" tag
    const isAnchor = Link === "a"; // Will be true if Link is an "a" tag
    // Use the appropriate prop based on the value of the Link prop
    const linkProps = {
        [isAnchor ? "href" : "to"]: `/tag/${tag}`,
        className: "tag"
    };
    return /*#__PURE__*/ (0, $4dtzN$jsx)(Link, {
        ...linkProps,
        children: tag
    });
};
$cc13e3b1dd9d7ba1$var$Tag.defaultProps = {
    tag: ""
};
var $cc13e3b1dd9d7ba1$export$2e2bcd8739ae039 = $cc13e3b1dd9d7ba1$var$Tag;


const $616c692299a75f89$var$CustomCard = ({ onClick: onClick , title: title , description: description , date: date , moreText: moreText , tags: tags , Link: Link  })=>{
    return /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Card), {
        sx: {
            marginBottom: "10px"
        },
        onClick: onClick,
        children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$CardActionArea), {
            children: /*#__PURE__*/ (0, $4dtzN$jsxs)((0, $4dtzN$CardContent), {
                children: [
                    /*#__PURE__*/ (0, $4dtzN$jsxs)((0, $4dtzN$Grid), {
                        container: true,
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Grid), {
                                item: true,
                                xs: 6,
                                sm: 10,
                                children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Typography), {
                                    variant: "h1",
                                    sx: {
                                        textDecoration: "none",
                                        textAlign: "justify"
                                    },
                                    children: title
                                })
                            }),
                            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $59a70b0d3de6e811$export$2e2bcd8739ae039), {
                                date: date
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Typography), {
                        children: description
                    }),
                    /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Grid), {
                        container: true,
                        item: true,
                        xs: 12,
                        children: (0, $4dtzN$map)(tags, (tag)=>/*#__PURE__*/ (0, $4dtzN$jsx)((0, $cc13e3b1dd9d7ba1$export$2e2bcd8739ae039), {
                                tag: tag,
                                Link: Link,
                                children: tag
                            }, tag))
                    }),
                    /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Typography), {
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
    return /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Link), {
        href: props.href,
        target: "_blank",
        rel: "noopener noreferrer",
        color: $046e9d052206d34f$var$LinkColor,
        children: props.children || props.title
    });
};
const $046e9d052206d34f$var$Footer = (props)=>{
    const { categories: categories , quickLinks: quickLinks  } = props;
    return /*#__PURE__*/ (0, $4dtzN$jsxs)((0, $4dtzN$Grid), {
        container: true,
        className: "site-footer",
        sx: {
            padding: `10px`,
            backgroundColor: `#f0f0f0`
        },
        children: [
            /*#__PURE__*/ (0, $4dtzN$jsxs)((0, $4dtzN$Grid), {
                container: true,
                children: [
                    /*#__PURE__*/ (0, $4dtzN$jsxs)((0, $4dtzN$Grid), {
                        item: true,
                        sm: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Typography), {
                                variant: "h6",
                                children: "About"
                            }),
                            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Typography), {
                                textAlign: "justify",
                                children: props.about
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $4dtzN$jsxs)((0, $4dtzN$Grid), {
                        item: true,
                        xs: 6,
                        md: 3,
                        children: [
                            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Typography), {
                                variant: "h6",
                                children: "Categories"
                            }),
                            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$List), {
                                sx: {
                                    margin: 0,
                                    padding: 0
                                },
                                children: categories.map((category, index)=>/*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$ListItem), {
                                        sx: {
                                            padding: 0
                                        },
                                        children: /*#__PURE__*/ (0, $4dtzN$jsx)($046e9d052206d34f$var$ExternalLink, {
                                            href: category.link,
                                            children: category.title
                                        })
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $4dtzN$jsxs)((0, $4dtzN$Grid), {
                        item: true,
                        xs: 6,
                        md: 3,
                        children: [
                            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Typography), {
                                variant: "h6",
                                children: "Quick Links"
                            }),
                            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$List), {
                                sx: {
                                    margin: 0,
                                    padding: 0
                                },
                                children: quickLinks.map((link, index)=>/*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$ListItem), {
                                        sx: {
                                            padding: 0
                                        },
                                        children: /*#__PURE__*/ (0, $4dtzN$jsx)($046e9d052206d34f$var$ExternalLink, {
                                            href: link.link,
                                            children: link.title
                                        })
                                    }, index))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Grid), {
                container: true,
                children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Grid), {
                    container: true,
                    children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Grid), {
                        item: true,
                        md: 8,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0, $4dtzN$jsxs)("p", {
                            className: "copyright-text",
                            children: [
                                "Copyright \xa9 ",
                                new Date().getFullYear(),
                                " All Rights Reserved by\xa0",
                                /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Link), {
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





const $c7932d61ef8b8d14$var$GithubCorner = ({ url: url , target: target  })=>/*#__PURE__*/ (0, $4dtzN$jsx)("a", {
        href: url,
        className: "github-corner",
        "aria-label": "View source on Github",
        target: target,
        children: /*#__PURE__*/ (0, $4dtzN$jsxs)("svg", {
            width: "60",
            height: "60",
            viewBox: "0 0 250 250",
            "aria-hidden": "true",
            className: "github-corner-svg",
            children: [
                /*#__PURE__*/ (0, $4dtzN$jsx)("path", {
                    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
                }),
                /*#__PURE__*/ (0, $4dtzN$jsx)("path", {
                    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
                    fill: "currentColor",
                    className: "octo-arm"
                }),
                /*#__PURE__*/ (0, $4dtzN$jsx)("path", {
                    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
                    fill: "currentColor",
                    className: "octo-body"
                })
            ]
        })
    });
var $c7932d61ef8b8d14$export$2e2bcd8739ae039 = $c7932d61ef8b8d14$var$GithubCorner;






function $4df044613c4d8e22$var$NavBar(props) {
    const { pages: pages , avatarAlt: avatarAlt , avatarImage: avatarImage , title: title  } = props;
    const [anchorElNav, setAnchorElNav] = (0, $4dtzN$useState)(null);
    const [anchorElUser, setAnchorElUser] = (0, $4dtzN$useState)(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    return /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$AppBar), {
        position: "static",
        children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Container), {
            maxWidth: "xl",
            children: /*#__PURE__*/ (0, $4dtzN$jsxs)((0, $4dtzN$Toolbar), {
                disableGutters: true,
                children: [
                    /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Typography), {
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
                    /*#__PURE__*/ (0, $4dtzN$jsxs)((0, $4dtzN$Box), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$IconButton), {
                                size: "large",
                                "aria-label": "account of current user",
                                "aria-controls": "menu-appbar",
                                "aria-haspopup": "true",
                                onClick: handleOpenNavMenu,
                                color: "inherit",
                                children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muiiconsmaterialMenu), {})
                            }),
                            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Menu), {
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
                                children: pages.map((page)=>/*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$MenuItem), {
                                        onClick: handleCloseNavMenu,
                                        children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Typography), {
                                            textAlign: "center",
                                            children: page
                                        })
                                    }, page))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Typography), {
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
                    /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Box), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        },
                        children: pages.map((page)=>/*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Button), {
                                onClick: handleCloseNavMenu,
                                sx: {
                                    color: "white",
                                    display: "block"
                                },
                                children: page
                            }, page))
                    }),
                    /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Box), {
                        sx: {
                            flexGrow: 0
                        },
                        children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Tooltip), {
                            title: avatarAlt,
                            children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$IconButton), {
                                sx: {
                                    p: 0
                                },
                                children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$Avatar), {
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














function $491d5f8cba17e554$var$SignIn({ handleSubmit: handleSubmit  }) {
    const [email, setEmail] = (0, $4dtzN$useState)("");
    const [password, setPassword] = (0, $4dtzN$useState)("");
    const [remember, setRemember] = (0, $4dtzN$useState)(false);
    function onSubmit(event) {
        event.preventDefault();
        handleSubmit(event);
        const data = new FormData(event.currentTarget);
    }
    return /*#__PURE__*/ (0, $4dtzN$jsxs)((0, $4dtzN$muimaterialBox), {
        sx: {
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muimaterialAvatar), {
                sx: {
                    m: 1,
                    bgcolor: "primary.main"
                },
                children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muiiconsmaterialLockOutlined), {})
            }),
            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muimaterialTypography), {
                component: "h1",
                variant: "h5",
                children: "Sign in"
            }),
            /*#__PURE__*/ (0, $4dtzN$jsxs)((0, $4dtzN$muimaterialBox), {
                component: "form",
                onSubmit: onSubmit,
                noValidate: true,
                sx: {
                    mt: 1
                },
                children: [
                    /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muimaterialTextField), {
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
                    /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muimaterialTextField), {
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
                    /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muimaterialFormControlLabel), {
                        control: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muimaterialCheckbox), {
                            value: "remember",
                            color: "primary"
                        }),
                        label: "Remember me"
                    }),
                    /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muimaterialButton), {
                        type: "submit",
                        fullWidth: true,
                        variant: "contained",
                        sx: {
                            mt: 3,
                            mb: 2
                        },
                        children: "Sign In"
                    }),
                    /*#__PURE__*/ (0, $4dtzN$jsxs)((0, $4dtzN$muimaterialGrid), {
                        container: true,
                        children: [
                            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muimaterialGrid), {
                                item: true,
                                xs: true,
                                children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muimaterialLink), {
                                    href: "#",
                                    variant: "body2",
                                    children: "Forgot password?"
                                })
                            }),
                            /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muimaterialGrid), {
                                item: true,
                                children: /*#__PURE__*/ (0, $4dtzN$jsx)((0, $4dtzN$muimaterialLink), {
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





export {$3c428f9ab394f367$export$2e2bcd8739ae039 as Blockquote, $5239fd20ec9f31f3$export$2e2bcd8739ae039 as Button, $616c692299a75f89$export$2e2bcd8739ae039 as Card, $59a70b0d3de6e811$export$2e2bcd8739ae039 as Date, $046e9d052206d34f$export$2e2bcd8739ae039 as Footer, $c7932d61ef8b8d14$export$2e2bcd8739ae039 as GithubCorner, $4df044613c4d8e22$export$2e2bcd8739ae039 as NavBar, $491d5f8cba17e554$export$2e2bcd8739ae039 as SignIn, $cc13e3b1dd9d7ba1$export$2e2bcd8739ae039 as Tag};
//# sourceMappingURL=module.js.map
