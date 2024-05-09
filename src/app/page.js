import { Grid } from "@mui/material";
import HeroContentThree from "@/components/Header/homeComponents/hero/components/heroContentThree";

export default function Home() {
  return (
    <Grid container sx={{ py: "200px" }} className="main">
      <HeroContentThree />
    </Grid>
  );
}
