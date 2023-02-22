// import { Box, Grid, TextField, Select, MenuItem, Button } from "@mui/material";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// function HotelBookingTable() {
//   return (
//     <Box sx={{ p: 4}}>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={3}>
//           <Box sx={{ textAlign: { xs: "center", md: "left", color:"white"} }}>
//             <h2>
//               Book
//               <br />
//               Your Room
//             </h2>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={9}>
//           {/* <Box sx={{ backgroundColor: "background.paper", borderRadius: 1 }}> */}
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ p: 2 }}>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   placeholder="Arrival Date"
//                   InputProps={{
//                     endAdornment: (
//                       <Box sx={{ pointerEvents: "none" }}>
//                         <CalendarMonthIcon />
//                       </Box>
//                     ),
//                   }}
//                 />
//                 <Box sx={{ mt: 2 }}>
//                   <TextField
//                     fullWidth
//                     variant="outlined"
//                     placeholder="Departure Date"
//                     InputProps={{
//                       endAdornment: (
//                         <Box sx={{ pointerEvents: "none" }}>
//                           <CalendarMonthIcon />
//                         </Box>
//                       ),
//                     }}
//                   />
//                 </Box>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ p: 2 }}>
//                 <Select
//                   fullWidth
//                   displayEmpty
//                   variant="outlined"
//                   defaultValue="Adult"
//                 >
//                   <MenuItem value="Adult" disabled>
//                     Adult
//                   </MenuItem>
//                   <MenuItem value="Old">Old</MenuItem>
//                   <MenuItem value="Younger">Younger</MenuItem>
//                   <MenuItem value="Potato">Potato</MenuItem>
//                 </Select>
//                 <Box sx={{ mt: 2 }}>
//                   <Select
//                     fullWidth
//                     displayEmpty
//                     variant="outlined"
//                     defaultValue="Child"
//                   >
//                     <MenuItem value="Child" disabled>
//                       Child
//                     </MenuItem>
//                     <MenuItem value="Child">Child</MenuItem>
//                     <MenuItem value="Baby">Baby</MenuItem>
//                     <MenuItem value="Child">Child</MenuItem>
//                   </Select>
//                 </Box>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ p: 2 }}>
//                 <Select
//                   fullWidth
//                   displayEmpty
//                   variant="outlined"
//                   defaultValue="Number of Rooms"
//                 >
//                   <MenuItem value="Number of Rooms" disabled>
//                     Number of Rooms
//                   </MenuItem>
//                   <MenuItem value="Room 01">Room 01</MenuItem>
//                   <MenuItem value="Room 02">Room 02</MenuItem>
//                   <MenuItem value="Room 03">Room 03</MenuItem>
//                 </Select>
//                 <Box sx={{ mt: 2 }}>
//                   <Button fullWidth  sx={{color:"white", p:2 ,bgcolor:"yellow" }}>
//                     Book Now
//                   </Button>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
// export default HotelBookingTable;

import { Box, Grid, TextField, Select, MenuItem, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";


function HotelBookingTable() {
  return (
    <Box sx={{ p: 4, bgcolor: "#04091e" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: { xs: "center", md: "left", color: "white" } }}>
            <h2>
              Book
              <br />
              Your Room
            </h2>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Arrival Date"
                  InputProps={{
                    style: { color: "#777777" },
                    endAdornment: (
                      <Box sx={{ pointerEvents: "none" }}>
                        <CalendarMonthIcon />
                      </Box>
                    ),
                  }}
                />
                <Box sx={{ mt: 2 }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Departure Date"
                    InputProps={{
                      style: { color: "#777777" },
                      endAdornment: (
                        <Box sx={{ pointerEvents: "none" }}>
                          <CalendarMonthIcon />
                        </Box>
                      ),
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2 }}>
                <Select
                  fullWidth
                  displayEmpty
                  variant="outlined"
                  defaultValue="Adult"
                  sx={{ color: "#777777" }}
                >
                  <MenuItem value="Adult" disabled>
                    Adult
                  </MenuItem>
                  <MenuItem value="Old">Old</MenuItem>
                  <MenuItem value="Younger">Younger</MenuItem>
                  <MenuItem value="Potato">Potato</MenuItem>
                </Select>
                <Box sx={{ mt: 2 }}>
                  <Select
                    fullWidth
                    displayEmpty
                    variant="outlined"
                    defaultValue="Child"
                    sx={{ color: "#777777" }}
                  >
                    <MenuItem value="Child" disabled>
                      Child
                    </MenuItem>
                    <MenuItem value="Child">Child</MenuItem>
                    <MenuItem value="Baby">Baby</MenuItem>
                    <MenuItem value="Child">Child</MenuItem>
                  </Select>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2 }}>
                <Select
                  fullWidth
                  displayEmpty
                  variant="outlined"
                  defaultValue="Number of Rooms"
                  sx={{ color: "#777777" }}
                >
                  <MenuItem value="Number of Rooms" disabled>
                    Number of Rooms
                  </MenuItem>
                  <MenuItem value="Room 01">Room 01</MenuItem>
                  <MenuItem value="Room 02">Room 02</MenuItem>
                  <MenuItem value="Room 03">Room 03</MenuItem>
                </Select>
                <Box sx={{ mt: 2 }}>
                  <Button
                    fullWidth
                    sx={{ color: "white", p: 2, bgcolor: "yellow" }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default HotelBookingTable;
