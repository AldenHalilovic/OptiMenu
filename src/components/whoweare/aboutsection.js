import React from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material'
import { FaCheck } from "react-icons/fa";

const AboutSection = () => {
    return (
        <Grid container className="main" py={10} >
            <Grid item xs={12} sx={{ display: "grid", placeItems: "center" }}>
                <Typography color="primary" textAlign={"center"} fontSize={"30px"}>
                    We believe food should be enjoyed by everyone
                </Typography>
                <Typography fontSize={"20px"} sx={{ width: "70%" }} textAlign={"center"}>
                    We provide exceptional meals to organisations catering to the young and the elderly. Our meals are
                    expertly crafted by our Dietitian and Chefs, then cooked with greatest passion and skills.
                </Typography>
            </Grid>

            <Grid item xs={12} mt={10} sx={{ display: "grid", placeItems: "center" }}>
                <Typography color="primary" textAlign={"center"} fontSize={"30px"}>
                    We are passionate about making a real difference
                </Typography>
                <Typography fontSize={"20px"} sx={{ width: "70%" }} textAlign={"center"}>
                    Everything we do is designed to make providing food to those in your care as
                    simple and efficient as possible, without compromising food quality and putting people’ health and preferences first.
                </Typography>
            </Grid>
            <Stack direction="row" justifyContent={"space-between"}>
                <Grid item xs={8} mt={10} >
                    <Typography color="primary" fontSize={"30px"}>
                        Innovative solutions
                    </Typography>

                    <Typography fontSize={"20px"} sx={{ width: "70%" }}>
                        We find innovative solutions that make it easier to manage your kitchen, plan menus and delight your customers:
                    </Typography>
                    <Stack direction={"column"} spacing={3} mt={3}>
                        <Typography sx={{ fontSize: "18px", display: "flex", alignItems: "center", gap: 1 }}>
                            <FaCheck color="#1976d2 " />
                            Full nutritional information available in our app
                        </Typography>
                        <Typography sx={{ fontSize: "18px", display: "flex", alignItems: "center", gap: 1 }}>
                            <FaCheck color="#1976d2 " />
                            Easy to create and plan your menu with our efficient OptiMenu’s app and management system
                        </Typography>
                        <Typography sx={{ fontSize: "18px", display: "flex", alignItems: "center", gap: 1 }}>
                            <FaCheck color="#1976d2 " />
                            Advice on food waste management
                        </Typography>
                        <Typography sx={{ fontSize: "18px", display: "flex", alignItems: "center", gap: 1 }}>
                            <FaCheck color="#1976d2 " />
                            Flexible payment plans and premium customer care
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={4} mt={10} sx={{ display: "grid" }}>
                    <img src="https://www.apetito.co.uk/media/wysiwyg/apetito-uk/Images/About_us/Who_We_Are/Nightingale_Customer_Support_1200x630px-min.jpg" alt="image" width={"500px"} />
                </Grid>
            </Stack>

            <Stack direction="row" justifyContent={"space-between"}>
                <Grid item xs={8} mt={10} sx={{ display: "grid" }}>
                    <img src="https://www.apetito.co.uk/media/wysiwyg/apetito-uk/Images/About_us/Who_We_Are/Nightingale_Customer_Support_1200x630px-min.jpg" alt="image" width={"500px"} />
                </Grid>

                <Grid item xs={8} mt={10} >
                    <Typography color="primary" fontSize={"30px"}>
                        We match you with a dedicated account manager to provide tailored support.
                    </Typography>
                    <Typography fontSize={"20px"} mt={3}>
                        You will also be given full access to all ingredients, allergens and nutritional information via our dedicated customer portal, OptiMeal App
                    </Typography>
                    <Button sx={{ mt: 3 }} variant="contained" color="primary">
                        Get in touch to discuss your needs
                    </Button>
                </Grid>
            </Stack>
        </Grid>
    )
}

export default AboutSection