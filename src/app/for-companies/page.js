"use client";
import AboutSection from "@/components/forcompanies/aboutsection";
import Hero from "@/components/forcompanies/hero";
import Footer from "@/components/home/homeComponents/hero/components/Footer";
import { Grid, Typography } from "@mui/material";
import React from "react";

const ForCompanies = () => {
  return (
    <>
      <Grid container>
        <Hero />
        <AboutSection />
      </Grid>
      <Footer />
    </>
  );
};

export default ForCompanies;
