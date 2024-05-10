import { Box, Typography, Button, Grid } from "@mui/material";
import { LuSmartphone } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";

const iconStyle = {
  width: "4rem",
  height: "4rem",
  borderRadius: "50%",
  backgroundColor: "#ed6c02",
  color: "white",
  fontSize: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
};

const iconTextStyle = {
  fontWeight: 300,
  fontSize: "1.65rem",
  color: "#000",
  fontSize: "20px",
  textAlign: "center",
  mt: 3,
};

const iconTextSecondStyle = {
  color: "#000",
  opacity: 0.5,
  textAlign: "center",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.5,
};

function HeroContentThree() {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: 0,
        p: 0,
        width: "100%",
        mb: 10,
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
        <Grid
          sx={{
            display: "row",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            height: "100%",
          }}
        >
          <Box sx={iconStyle}>
            <LuSmartphone />
          </Box>
          <Typography component="h1" sx={iconTextStyle} gutterBottom>
            Your menu, designed for mobile
          </Typography>
          <Typography variant="subtitle2" style={iconTextSecondStyle}>
            The most user friendly mobile menu. Completely customizable. Make
            changes in seconds and start ordering or monetizing.
          </Typography>
        </Grid>

        <Grid
          sx={{
            display: "row",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            height: "100%",
          }}
        >
          <Box sx={iconStyle}>
            <FiTarget />
          </Box>
          <Typography sx={iconTextStyle} component="h1" gutterBottom>
            Order a meal package (food and drink) with a tap
          </Typography>
          <Typography variant="subtitle1" style={iconTextSecondStyle}>
            Contactless ordering, right from any smartphone. No tablets, apps,
            or waiters required.
          </Typography>
        </Grid>

        <Grid
          sx={{
            display: "row",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            height: "100%",
          }}
        >
          <Box sx={iconStyle}>
            <FiDollarSign />
          </Box>
          <Typography sx={iconTextStyle} component="h1" gutterBottom>
            Paying the bill has never been easier
          </Typography>
          <Typography variant="subtitle1" style={iconTextSecondStyle}>
            Orders (pre)payed-(pre)charged by others (by your company or
            employer you work for) in seconds. Turn new orders at record speeds.
          </Typography>
        </Grid>
      </Grid>

      <Button
        variant="outlined"
        color="warning"
        sx={{
          mt: "3rem",
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
