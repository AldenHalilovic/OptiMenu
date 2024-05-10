import { Box, Grid, Button } from "@mui/material";
import { LuSmartphone } from "react-icons/lu";
import { FiDollarSign, FiTarget } from "react-icons/fi";
import IconCard from "./IconCard";

const iconStyle = {
  width: "4rem",
  height: "4rem",
  borderRadius: "50%",
  backgroundColor: "#ed6c02",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
};

const HeroContentThree = () => {
  const cardData = [
    {
      icon: (
        <Box sx={iconStyle}>
          <LuSmartphone size={24} />
        </Box>
      ),
      header: "Your menu, designed for mobile",
      description:
        "The most user-friendly mobile menu. Completely customizable. Make changes in seconds and start ordering or monetizing.",
    },
    {
      icon: (
        <Box sx={iconStyle}>
          <FiTarget size={24} />
        </Box>
      ),
      header: "Order a meal package (food and drink) with a tap",
      description:
        "Contactless ordering, right from any smartphone. No tablets, apps, or waiters required.",
    },
    {
      icon: (
        <Box sx={iconStyle}>
          <FiDollarSign size={24} />
        </Box>
      ),
      header: "Paying the bill has never been easier",
      description:
        "Orders (pre)payed-(pre)charged by others (by your company or employer you work for) in seconds. Turn new orders at record speeds.",
    },
  ];

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: 0,
        px: 3,
        width: "100%",
        mb: 10,
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {cardData.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <IconCard
              icon={item.icon}
              header={item.header}
              description={item.description}
            />
          </Grid>
        ))}
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
};

export default HeroContentThree;
