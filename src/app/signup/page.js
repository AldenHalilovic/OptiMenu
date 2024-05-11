"use client";

import React from "react";
import { Grid } from "@mui/material";
import SingupForm from "@/components/signup/form";
import Footer from "@/components/home/homeComponents/hero/components/Footer";

const Signup = () => {
  return (
    <>
      <Grid container>
        <SingupForm />
      </Grid>
      <Footer />
    </>
  );
};

export default Signup;
