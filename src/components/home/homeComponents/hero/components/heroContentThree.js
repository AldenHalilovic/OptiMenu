import { Box, Typography, Button, Icon, Grid } from "@mui/material";

import { LuSmartphone } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";

function HeroContentThree() {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f2f6fc",
        m: 0, // Remove margins
        p: 0, // Remove padding
        width: "100%", // Ensure it covers the full width
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* // First Box -  Your menu, designed for mobile */}
        <Grid sx={{ textAlign: "center", flex: 1, height: "100%" }}>
          {/* // Icon Box */}
          <Box
            sx={{
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              backgroundColor: "#528ef0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2.5rem",
              margin: "auto",
            }}
          >
            <Icon sx={{ color: "#ffffff", fontSize: "1.5rem" }}>
              <LuSmartphone />
            </Icon>
          </Box>
          {/* // Icon Box  */}
          <Typography
            component="h1"
            style={{
              fontWeight: 300,
              fontSize: "1.65rem",
              color: "#528ef0",
              textAlign: "center",
            }}
            gutterBottom
          >
            Your menu, designed for mobile
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#69707a",
              textAlign: "center",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            The most user friendly mobile menu. Completely customizable. Make
            changes in seconds and start ordering or monetizing.
          </Typography>
        </Grid>

        {/* // Second Box -  Order a meal package (food and drink) with a tap */}
        <Grid sx={{ textAlign: "center", flex: 1, height: "100%" }}>
          <Box
            sx={{
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              backgroundColor: "#528ef0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2.5rem",
              margin: "auto",
            }}
          >
            <Icon sx={{ color: "#ffffff", fontSize: "1.5rem" }}>
              <FiTarget />
            </Icon>
          </Box>
          <Typography
            style={{
              fontWeight: 300,
              fontSize: "1.65rem",
              color: "#528ef0",
              textAlign: "center",
            }}
            component="h1"
            gutterBottom
          >
            Order a meal package (food and drink) with a tap
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              color: "#69707a",
              textAlign: "center",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            Contactless ordering, right from any smartphone. No tablets, apps,
            or waiters required.
          </Typography>
        </Grid>

        {/* // Third Box -  Paying the bill has never been easier */}

        <Grid sx={{ textAlign: "center", flex: 1, height: "100%" }}>
          <Box
            sx={{
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              backgroundColor: "#528ef0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2.5rem",
              margin: "auto",
            }}
          >
            <Icon sx={{ color: "#ffffff", fontSize: "1.5rem" }}>
              <FiDollarSign />
            </Icon>
          </Box>
          <Typography
            style={{
              fontWeight: 300,
              fontSize: "1.65rem",
              color: "#528ef0",
              textAlign: "center",
            }}
            component="h1"
            gutterBottom
          >
            Paying the bill has never been easier
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              color: "#69707a",
              textAlign: "center",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            Orders (pre)payed-(pre)charged by others (by your company or
            employer you work for) in seconds. Turn new orders at record speeds.
          </Typography>
        </Grid>
      </Grid>

      <Button
        variant="outlined"
        style={{
          marginTop: "1rem",
          borderRadius: "10px",
          textTransform: "capitalize",
          height: "3rem",
        }}
      >
        All Features
      </Button>
    </Grid>
  );
}

export default HeroContentThree;
