import AboutSection from '@/components/whoweare/aboutsection'
import Hero from '@/components/whoweare/hero'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const WhoWeAre = () => {
    return (
        <Grid container>
            <Hero />
            <AboutSection />
        </Grid>
    )
}

export default WhoWeAre