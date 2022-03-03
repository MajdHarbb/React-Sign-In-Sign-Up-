import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ResponsiveAppBar = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const bearer_token = localStorage.getItem("access_token");
  console.log(bearer_token);
  var url = "http://127.0.0.1:8000/api/auth/user-profile";
  var bearer = "Bearer " + bearer_token;
  async function getUserInfo() {
    const response = await fetch(url, {
      method: "GET",

      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    });

    let content = await response.json();
    console.log(content);
    setFirstName(content.first_name);
    setLastName(content.last_name);
  }

  getUserInfo();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  let navigate = useNavigate();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenuHome = () => {
    setAnchorElNav(null);
    let path = `/home/slider`;
    navigate(path);
  };

  const handleCloseNavMenuContactUs = () => {
    setAnchorElNav(null);
    let path = `/home/contactus`;
    navigate(path);
  };

  const handleCloseNavMenuAboutUs = () => {
    setAnchorElNav(null);
    let path = `/home/about-us`;
    navigate(path);
  };

  const handleCloseNavMenuMyInfo = () => {
    setAnchorElNav(null);
    let path = `/home/user-info`;
    navigate(path);
  };

  const handleCloseNavMenuServices = () => {
    setAnchorElNav(null);
    let path = `/home/services`;
    navigate(path);
  };

  const handleCloseNavMenuLogout = () => {
    setAnchorElNav(null);
    async function logout() {
      const response = await fetch("http://127.0.0.1:8000/api/auth/logout", {
        method: "POST",

        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
      });

      let content = await response.json();
      console.log(content);
    }
    logout();
    localStorage.clear();

    let path = `/`;
    navigate(path);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Hello {first_name}
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="Home" onClick={handleCloseNavMenuHome}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem key="Contact Us" onClick={handleCloseNavMenuContactUs}>
                <Typography textAlign="center">Contact Us</Typography>
              </MenuItem>
              <MenuItem key="About Us" onClick={handleCloseNavMenuAboutUs}>
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
              <MenuItem key="Services" onClick={handleCloseNavMenuServices}>
                <Typography textAlign="center">Services</Typography>
              </MenuItem>
              <MenuItem key="My Info" onClick={handleCloseNavMenuMyInfo}>
                <Typography textAlign="center">My Info</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Hello {first_name}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="Home"
              onClick={handleCloseNavMenuHome}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>

            <Button
              key="Contact Us"
              onClick={handleCloseNavMenuContactUs}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Contact Us
            </Button>

            <Button
              key="About Us"
              onClick={handleCloseNavMenuAboutUs}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About Us
            </Button>

            <Button
              key="Services"
              onClick={handleCloseNavMenuServices}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Services
            </Button>

            <Button
              key="My Info"
              onClick={handleCloseNavMenuMyInfo}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              My Info
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              key="Logout"
              onClick={handleCloseNavMenuLogout}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
