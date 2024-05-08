import { Grid } from '@mui/material'
import React from 'react'
import Header from '../../header'
import HeroContent from './components/heroContent'

const HeroSection = () => {
    return (
        <Grid container className='hero-section' sx={{ display: "grid", placeItems: "start center" }}>
            <Header />
            <HeroContent />
        </Grid>
    )
}

export default HeroSection