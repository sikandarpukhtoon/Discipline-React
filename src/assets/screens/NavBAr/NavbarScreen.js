import { IconButton } from "@mui/material";
import React from "react";
import ProfileScreen from "../ProfileScreen";
function NavbarScreen() {
  return (
    <nav
      // class="navbar navbar-expand-lg bg-body-tertiary c"
      style={{ backgroundColor: "#008080", width: "1200px", height: "100px" }}
    >
      <div className="container-fluid container">
        <ProfileScreen />
      </div>
    </nav>
  );
}

export default NavbarScreen;
