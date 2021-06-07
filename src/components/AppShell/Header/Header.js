import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <h1>Header</h1>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink exact to="/trip">
            My Profile
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>My Trips</MenuItem>
        <MenuItem onClick={handleClose}>Wishlist</MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
