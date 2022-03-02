import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
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
                        LOGO
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">heyeyeyeyy</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <Button
                            key="Contact Us"
                            onClick={handleCloseNavMenuContactUs}
                            sx={{ my: 2, color: "white", display: "block" }}>
                            Contact Us
                        </Button>

                        <Button
                            key="About Us"
                            onClick={handleCloseNavMenuAboutUs}
                            sx={{ my: 2, color: "white", display: "block" }}>
                            About Us
                        </Button>

                        <Button
                            key="Services"
                            onClick={handleCloseNavMenuServices}
                            sx={{ my: 2, color: "white", display: "block" }}>
                            Services
                        </Button>

                        <Button
                            key="My Info"
                            onClick={handleCloseNavMenuMyInfo}
                            sx={{ my: 2, color: "white", display: "block" }}>
                            My Info
                        </Button>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                            key="Logout"
                            //onClick={handleCloseNavMenuMyInfo}
                            sx={{ my: 2, color: "white", display: "block" }}>
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
