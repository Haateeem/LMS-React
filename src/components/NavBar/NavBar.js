// NavBar.js
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Chat as ChatIcon,
} from "@mui/icons-material";
import "./NavBar.css";

const NavBar = () => {
  return (
    <AppBar className="appbar" position="static" color="default">
      <Toolbar className="toolbar">
        <div className="search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search anything…"
            classes={{
              root: "input-root",
              input: "input-input",
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className="section-desktop">
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ChatIcon />
            </Badge>
          </IconButton>
          <Avatar className="avatar">A</Avatar>
          <Typography variant="subtitle1" color="inherit">
            Abu Bin Ishityak
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
