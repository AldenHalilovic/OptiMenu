import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { FaCheck } from "react-icons/fa";

const AboutSection = () => {
  return (
    <Grid
      container
      className="main"
      py={{ xs: 5, sm: 10 }}
      px={{ xs: 3, sm: 0 }}
    >
      <Grid item xs={12} sx={{ display: "grid", placeItems: "center" }}>
        <Typography
          color="#ed6c02"
          textAlign="center"
          fontSize={{ xs: "24px", md: "30px" }}
        >
          We believe food should be enjoyed by everyone
        </Typography>
        <Typography
          fontSize={{ xs: "16px", md: "20px" }}
          sx={{ width: { xs: "90%", md: "70%" } }}
          textAlign="center"
        >
          We provide exceptional meals to organisations catering to the young
          and the elderly. Our meals are expertly crafted by our Dietitian and
          Chefs, then cooked with greatest passion and skills.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        mt={{ xs: 5, md: 10 }}
        sx={{ display: "grid", placeItems: "center" }}
      >
        <Typography
          color="#ed6c02"
          textAlign="center"
          fontSize={{ xs: "24px", md: "30px" }}
        >
          We are passionate about making a real difference
        </Typography>
        <Typography
          fontSize={{ xs: "16px", md: "20px" }}
          sx={{ width: { xs: "90%", md: "70%" } }}
          textAlign="center"
        >
          Everything we do is designed to make providing food to those in your
          care as simple and efficient as possible, without compromising food
          quality and putting people’ health and preferences first.
        </Typography>
      </Grid>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        justifyContent="space-between"
        mt={{ xs: 5, md: 10 }}
      >
        <Grid item xs={12} md={8}>
          <Typography color="#ed6c02" fontSize={{ xs: "24px", md: "30px" }}>
            Innovative solutions
          </Typography>
          <Typography
            fontSize={{ xs: "16px", md: "20px" }}
            sx={{ width: { xs: "90%", md: "70%" } }}
          >
            We find innovative solutions that make it easier to manage your
            kitchen, plan menus and delight your customers:
          </Typography>
          <Stack direction="column" spacing={2} mt={2}>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FaCheck color="#ed6c02" />
              Full nutritional information available in our app
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FaCheck color="#ed6c02" />
              Easy to create and plan your menu with our efficient OptiMenu’s
              app and management system
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FaCheck color="#ed6c02" />
              Advice on food waste management
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FaCheck color="#ed6c02" />
              Flexible payment plans and premium customer care
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/Xv55tTUu64ywJPKJysyLVTG4p_I=/1440x0/cultureampcom/production/052/38d/5bd/05238d5bd7872dbd36cbea18/blog-company-meeting-culture.png"
            alt="image"
            style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
          />
        </Grid>
      </Stack>

      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        spacing={3}
        justifyContent="space-between"
        mt={{ xs: 5, md: 10 }}
      >
        <Grid item xs={12} md={8}>
          <Typography color="#ed6c02" fontSize={{ xs: "24px", md: "30px" }}>
            We match you with a dedicated account manager to provide tailored
            support.
          </Typography>
          <Typography fontSize={{ xs: "16px", md: "20px" }} mt={2}>
            You will also be given full access to all ingredients, allergens and
            nutritional information via our dedicated customer portal, OptiMeal
            App
          </Typography>
          <Button sx={{ mt: 2 }} variant="contained" color="warning">
            Get in touch to discuss your needs
          </Button>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            src="https://www.ptvgroup.com/sites/default/files/styles/1x1_2560/public/2023-02/service-support-title.png.webp?itok=nHEll-ng"
            alt="image"
            style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
          />
        </Grid>
      </Stack>
    </Grid>
  );
};

export default AboutSection;
