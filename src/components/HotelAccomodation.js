import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";

const AccomodationItem = styled(Box)({
  textAlign: "center",
  mb: 4,
  borderRadius: 4,
  overflow: "hidden",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
  },
});

const rooms = [
  {
    img: "https://themewagon.github.io/royal/image/room1.jpg",
    title: "Double Deluxe Room",
    price: "$250/night",
  },
  {
    img: "https://themewagon.github.io/royal/image/room2.jpg",
    title: "Single Deluxe Room",
    price: "$200/night",
  },
  {
    img: "https://themewagon.github.io/royal/image/room3.jpg",
    title: "Honeymoon Suit",
    price: "$750/night",
  },
  {
    img: "https://themewagon.github.io/royal/image/room4.jpg",
    title: "Economy Double",
    price: "$200/night",
  },
];

function HotelAccomodation() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 , textAlign:"center"}}>
          <Typography variant="h3">Hotel Accommodation</Typography>
          <Typography variant="body1">
            We all live in an age that belongs to the young at heart. Life that
            is becoming extremely fast,
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {rooms.map((room) => (
            <Grid item xs={12} sm={6} md={3} key={room.title}>
              <AccomodationItem>
                <Box sx={{ position: "relative" }}>
                  <img src={room.img} alt={room.title} />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: "rgba(0, 0, 0, 0.4)",
                      opacity: 0,
                      transition: "opacity 0.2s ease-in-out",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                      Book Now
                    </Button>
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {room.title}
                </Typography>
                <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
                  {room.price}
                </Typography>
              </AccomodationItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HotelAccomodation;

