"use client";

import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "../../header";
import HeroContent from "./components/heroContent";

import { usePathname } from "next/navigation";

const HeroSection = () => {
  const pathname = usePathname();

  return (
    <Grid container>
      <Header />
      <Grid
        container
        className={`hero-section ${pathname === "/" && "hero-height"},`}
        sx={{ display: "grid", placeItems: "start center" }}
      >
        <div className="overlay"></div>
        <Box sx={{ zIndex: 2 }}>{pathname === "/" && <HeroContent />}</Box>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
