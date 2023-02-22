import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Pages = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about-us" },
  { name: "Accomodation", path: "/accomodation" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Elements", path: "/elements" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
];

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {Pages.map((page, index) => (
            <Link to={page.path} key={index} style={{ textDecoration: "none" }}>
              <ListItemButton onClick={() => setOpenDrawer(false)}>
                <ListItemText>{page.name}</ListItemText>
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{color:"#FABA38"}} />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
