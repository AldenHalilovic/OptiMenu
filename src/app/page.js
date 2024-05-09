import { Grid } from "@mui/material";
import HeroContentThree from "@/components/Header/homeComponents/hero/components/heroContentThree";

export default function Home() {
  return (
    <Grid
      container
      sx={{
        bgcolor: "#f2f6fc",
        py: "100px",
      }}
      className="main"
    >
      <HeroContentThree />
    </Grid>
  );
}
