import AboutSection from '@/components/forcompanies/aboutsection'
import Hero from '@/components/forcompanies/hero'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const ForCompanies = () => {
    return (
        <Grid container>
            <Hero />
            <AboutSection />
        </Grid>
    )
}

export default ForCompanies