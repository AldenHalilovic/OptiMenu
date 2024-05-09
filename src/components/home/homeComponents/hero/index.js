"use client"

import { Grid } from '@mui/material'
import React from 'react'
import Header from '../../header'
import HeroContent from './components/heroContent'

import { usePathname } from 'next/navigation'

const HeroSection = () => {
    const pathname = usePathname()
    
    return (
        <Grid container className={`hero-section ${pathname === "/" && "h-100"}`} sx={{ display: "grid", placeItems: "start center" }}>
            <Header />
            {pathname === '/' && <HeroContent />}
        </Grid>
    )
}

export default HeroSection