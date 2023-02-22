import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import {
  Sports,
  LocalDining,
  Pool,
  DriveEta,
  FitnessCenter,
  LocalBar,
} from "@mui/icons-material";

const facilities = [
  {
    icon: Sports,
    title: "Sports Club",
    description:
      "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
  },
  {
    icon: LocalDining,
    title: "Restaurant",
    description:
      "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
  },
  {
    icon: Pool,
    title: "Swimming Pool",
    description:
      "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
  },
  {
    icon: DriveEta,
    title: "Rent a Car",
    description:
      "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
  },
  {
    icon: FitnessCenter,
    title: "Gymnesium",
    description:
      "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
  },
  {
    icon: LocalBar,
    title: "Bar",
    description:
      "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
  },
];

const FacilitiesItem = ({ icon, title, description }) => {
  const Icon = icon;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      mb={4}
      textAlign="center"
      sx={{ p:6, border: "1px solid #777", borderRadius: "4px"}}
    >
      <Typography variant="h5" component="h4" gutterBottom sx={{color:"white"}}>
        <Icon fontSize="medium" />
        {title}
      </Typography>
      <Typography variant="body1" component="p">
        {description}
      </Typography>
    </Grid>
  );
};

const StyledGrid = styled(Grid)({
  position: "relative",
  padding: "20px",
});

function Facilities() {
  return (
    <Box position="relative" sx={{ background: "#04091e" }}>
      <Box sx={{ opacity: 0.15 }}>
        <img src="https://themewagon.github.io/royal/image/facilites_bg.jpg" />
      </Box>
      <Box
        sx={{ px: "15px", position: "absolute", top: "20%", color: "#777777" }}
      >
        <Box sx={{ mb: "75px", textAlign: "center" }}>
          <Typography variant="h2" sx={{ color: "#fff" }}>
            Royal Facilities
          </Typography>
          <Typography variant="body1" sx={{ color: "#777777" }}>
            Who are in extremely love with eco friendly system.
          </Typography>
        </Box>
        <Box>
          <StyledGrid container marginBottom={2}>
            {facilities.map((facility) => (
              <FacilitiesItem key={facility.title} {...facility} />
            ))}
          </StyledGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default Facilities;
