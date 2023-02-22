import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import DrawerComponent from "./DrawerComponents";

const Pages = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about-us" },
  { name: "Accomodation", path: "/accomodation" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Elements", path: "/elements" },
  { name: "Contact", path: "/contact" },
];

function NavBar() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="absolute"
      sx={{
        p: 1,
        background: "white",

      }}
    >
      <CssBaseline />
      <Toolbar>
        <Box>
          <img
            src="https://themewagon.github.io/royal/image/Logo.png"
            alt="logo"
          />
        </Box>

        {isMatch ? (
          <>
            <DrawerComponent />
          </>
        ) : (
          <>
            <Tabs
              // sx={{ marginLeft: "auto" }}
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              {Pages.map((page, index) => (
                <Link to={page.path} key={index}>
                  <Tab label={page.name} sx={{ color: "#5DD0FB" }} />
                </Link>
              ))}
            </Tabs>

            <Button variant="contained" sx={{ marginLeft: "auto" }}>
              Login
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;


