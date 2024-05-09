import { Grid, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
    return (
        <Grid container className="aboutcompanies-hero" sx={{ display: "grid", placeItems: "start center" }}>
            <div className='overlay'></div>
            <Grid item xs={12} sx={{ zIndex: "2", width: "70%", margin: "auto" }}>
                <Typography color="white" fontSize={"50px"} textAlign={"center"}>
                    Ordering made simple
                </Typography>
                <Typography color="white" fontSize={"24px"} textAlign={"center"} lineHeight={"40px"}>
                    Along with dedicated customer support, we provide intuitive online
                    tools for effortless ordering and menu planning.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Hero