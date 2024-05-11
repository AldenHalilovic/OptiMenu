import { Grid, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Grid
      container
      className="whoweare-hero"
      sx={{ display: "grid", placeItems: "start center" }}
    >
      <div className="overlay"></div>
      <Grid
        item
        xs={12}
        sx={{ zIndex: "2", width: { xs: "100%", sm: "70%" }, margin: "auto" }}
      >
        <Typography
          color="#ed6c02"
          variant="h3"
          fontWeight="600"
          textAlign={"center"}
        >
          Who we are
        </Typography>
        <Typography
          color="white"
          variant="h6"
          textAlign={"center"}
          mt={4}
          sx={{ width: { xs: "100%", sm: "80%" }, mx: "auto" }}
        >
          OptiMenu’s app and management system bridges the gap between the
          canteen(3rd party service providers) and food consumers (day-care
          centers, retirement homes, companies, leisure facilities, prisons,
          hospitals, schools, universities, local authorities etc.).
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Hero;
