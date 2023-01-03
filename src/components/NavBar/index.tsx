import { BaseSyntheticEvent, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { NavBarProps } from "./navbar";

function noop() {}

function NavBar(props: NavBarProps) {
  const {
    navItemColor,
    pages,
    avatarAlt,
    avatarImage,
    title,
    color,
    onClick,
    handleTitleClick,
    position,
  } = props;

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleNavItemClick = (event: BaseSyntheticEvent) => {
    setAnchorElNav(null);
    onClick && onClick(event);
  };

  return (
    <AppBar color={color} position={position}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleTitleClick}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleNavItemClick}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page: string) => (
                <MenuItem key={page} onClick={handleNavItemClick}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={handleTitleClick}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page: string) => (
              <Button
                key={page}
                onClick={handleNavItemClick}
                sx={{ color: navItemColor, display: "block" }}
                id={`blog-nav-item-${page}`}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={avatarAlt}>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt={avatarAlt} src={avatarImage}>
                  {avatarAlt[0]}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

NavBar.defaultProps = {
  color: "default",
  onClick: noop,
  handleTitleClick: noop,
};
