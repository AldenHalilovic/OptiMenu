import React from 'react'
import { Grid, Stack, Typography, Button, IconButton } from '@mui/material'
import { IoChevronForwardSharp } from "react-icons/io5";

const HeroContent = () => {
    return (
        <Grid container className="main" sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" }, alignItems: "center" }}>
            <Grid item xs={12} lg={6} sx={{ display: "grid", gap: 3 }}>
                <Typography className='hero-heading'>
                    The future of food consuming and food ordering
                </Typography>
                <Typography sx={{ fontSize: "24px" }} color="white" variant="p">
                    Create Menu. Browse. (Pre)Order. Right from any smartphone
                </Typography>
                <Stack direction="row" spacing={2} mt={3}>
                    <Button variant="outlined" color="primary" sx={{ fontSize: "20px", py: 1 }}>
                        Get Started
                    </Button>
                    <IconButton sx={{ display: "flex", alignItems: "center", color: "white", fontSize: "20px" }}>
                        See all features
                        <IoChevronForwardSharp />
                    </IconButton>
                </Stack>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <img src="https://opti.menu/images/payment-mockup.svg?22" alt="hero" width="250px" />
            </Grid>
        </Grid>
    )
}

export default HeroContent