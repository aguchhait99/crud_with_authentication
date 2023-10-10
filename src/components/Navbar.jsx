import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../context/Context";
import { toast } from "react-toastify";

const Navbar = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Crud Authentication
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/adddata">
              Add Data
            </Button>
            {!auth.user ? (
              <>
                <Button color="inherit" component={Link} to="/showdata">
                  Show Student Data
                </Button>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              </>
            ) : (
              <>
                  <Button color="inherit" component={Link} to="/editdeletedata">
                  Student Data
                </Button>
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    color="inherit"
                  >
                    Admin
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
                    <MenuItem onClick={handleLogout}  component={Link} to="/">Logout</MenuItem>
                  </Menu>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
