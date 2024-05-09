import { Box, Typography, Button, Container, Icon } from "@mui/material";

import { LuSmartphone } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";

function HeroContentThree() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
        bgcolor: "#f2f6fc",
        minHeight: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        {/* // First Box -  Your menu, designed for mobile */}
        <Box sx={{ textAlign: "center", flex: 1 }}>
          {/* // Icon Box */}
          <Box
            sx={{
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              backgroundColor: "#226fed",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
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
              color: "#226fed",
              textAlign: "center",
            }}
            gutterBottom
          >
            Your menu, designed for mobile
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "#69707a", textAlign: "center" }}
          >
            The most user friendly mobile menu. Completely customizable. Make
            changes in seconds and start ordering or monetizing.
          </Typography>
        </Box>

        {/* // Second Box -  Order a meal package (food and drink) with a tap */}
        <Box sx={{ textAlign: "center", flex: 1 }}>
          <Box
            sx={{
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              backgroundColor: "#226fed",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
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
              color: "#226fed",
              textAlign: "center",
            }}
            component="h1"
            gutterBottom
          >
            Order a meal package (food and drink) with a tap
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "#69707a", textAlign: "center" }}
          >
            Contactless ordering, right from any smartphone. No tablets, apps,
            or waiters required.
          </Typography>
        </Box>

        {/* // Third Box -  Paying the bill has never been easier */}

        <Box sx={{ textAlign: "center", flex: 1 }}>
          <Box
            sx={{
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              backgroundColor: "#226fed",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
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
              color: "#226fed",
              textAlign: "center",
            }}
            component="h1"
            gutterBottom
          >
            Paying the bill has never been easier
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "#69707a", textAlign: "center" }}
          >
            Orders (pre)payed-(pre)charged by others (by your company or
            employer you work for) in seconds. Turn new orders at record speeds.
          </Typography>
        </Box>
      </Box>

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
    </Container>
  );
}

export default HeroContentThree;
