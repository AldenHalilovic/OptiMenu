import { Grid, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Grid
      container
      className="aboutcompanies-hero"
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
          Ordering made simple
        </Typography>
        <Typography
          color="white"
          variant="h6"
          textAlign={"center"}
          mt={3}
          sx={{ width: { xs: "100%", sm: "80%" }, mx: "auto" }}
        >
          Along with dedicated customer support, we provide intuitive online
          tools for effortless ordering and menu planning.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Hero;
