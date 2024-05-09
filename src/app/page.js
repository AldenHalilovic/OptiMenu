import { Grid, Box } from "@mui/material";
import HeroContentThree from "@/components/home/homeComponents/hero/components/heroContentThree";
import HeroDashboard from "@/components/home/homeComponents/hero/components/heroDashboard";

export default function Home() {
  return (
    <Grid
      container
      sx={{
        py: "100px",
      }}
      className="main"
    >
      <Grid item xs={15}>
        <Box bgcolor="#f2f6fc">
          {" "}
          <HeroContentThree />
        </Box>
      </Grid>

      <Grid item xs={15}>
        <Box bgcolor="white">
          {" "}
          <HeroDashboard />
        </Box>
      </Grid>
    </Grid>
  );
}
