import { Grid, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
    return (
        <Grid container className="whoweare-hero" sx={{ display: "grid", placeItems: "start center" }}>
            <div className='overlay'></div>
            <Grid item xs={12} sx={{ zIndex: "2", width: "70%", margin: "auto" }}>
                <Typography color="white" fontSize={"50px"} textAlign={"center"}>
                    Who we are
                </Typography>
                <Typography color="white" fontSize={"24px"} textAlign={"center"} lineHeight={"40px"}>
                    OmniMenu’s app and management system bridges the gap between the canteen(3rd party service providers) and food consumers (day-care centers, retirement homes, companies, leisure facilities, prisons, hospitals, schools, universities, local authorities etc.).
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Hero