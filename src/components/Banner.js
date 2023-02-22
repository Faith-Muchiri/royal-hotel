import { Box, Button, Container, Typography, Grid } from "@mui/material";
import React from "react";
import HotelBookingTable from "./HotelBookingTable";

function Banner() {
  return (
    <Box position="relative" sx={{ background: "#04091e" }}>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            opacity: "0.5",
          }}
        >
          <img
            src="https://themewagon.github.io/royal/image/banner_bg.jpg"
            width="100%"
          />
        </Box>
        <Container
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Away from monotonous life</Typography>
          <Typography variant="h2">Relax Your Mind</Typography>
          <Typography>
            If you are looking at blank cassettes on the web, you may be very
            confused at the
            <br /> difference in price. You may see some for as low as $.17
            each.
          </Typography>
          <Button>Get Started</Button>
        </Container>
      </Box>
      <Box
        sx={{
          px: 2,
          bottom: "0%",
        }}
      >
        <HotelBookingTable />
      </Box>
    </Box>
  );
}

export default Banner;
