"use client";
import { Grid, Box } from "@mui/material";
import HeroContentThree from "@/components/home/homeComponents/hero/components/heroContentThree";
import HeroDashboard from "@/components/home/homeComponents/hero/components/heroDashboard";
import Footer from "@/components/home/homeComponents/hero/components/Footer";

export default function Home() {
  return (
    <>
      <Box>
        <Grid
          className={`hero-section`}
          sx={{
            display: "grid",
            placeItems: "start center",
            height: "770px",
            mb: 3,
          }}
        >
          <Box sx={{ zIndex: 2 }}></Box>
        </Grid>
        <Grid
          container
          sx={{
            py: "100px",
          }}
          className="main"
        >
          <Grid item xs={15}>
            <Box bgcolor="">
              <HeroContentThree />
            </Box>
          </Grid>

          <Grid item xs={15}>
            <Box bgcolor="white">
              <HeroDashboard />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
