"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import optimenu from "../../assets/Optimenu.png";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      p={1}
      bgcolor="transparent"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Image src={optimenu} alt="Optimenu" width="100%" height="100%" />
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Link
          href="/"
          style={{
            color: "inherit",
            textDecoration: "none",
            marginLeft: "1rem",
          }}
        >
          <Typography
            variant="body1"
            component="span"
            style={{ fontSize: "1.2rem" }}
          >
            Home
          </Typography>
        </Link>
        <Link
          href="/feature"
          style={{
            color: "inherit",
            textDecoration: "none",
            marginLeft: "1rem",
          }}
        >
          <Typography
            variant="body1"
            component="span"
            style={{ fontSize: "1.2rem" }}
          >
            Feature
          </Typography>
        </Link>
        <Link
          href="/pricing"
          style={{
            color: "inherit",
            textDecoration: "none",
            marginLeft: "1rem",
          }}
        >
          <Typography
            variant="body1"
            component="span"
            style={{ fontSize: "1.2rem" }}
          >
            Pricing
          </Typography>
        </Link>
        <Link
          href="/support"
          style={{
            color: "inherit",
            textDecoration: "none",
            marginLeft: "1rem",
          }}
        >
          <Typography
            variant="body1"
            component="span"
            style={{ fontSize: "1.2rem" }}
          >
            Support
          </Typography>
        </Link>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          color="inherit"
          style={{
            marginLeft: "1rem",
            textTransform: "none",
            fontSize: "1.2rem",
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          style={{
            marginLeft: "1rem",
            padding: "10px 20px",
            textTransform: "none",
            height: "50px",
            fontSize: "1.1rem",
            borderRadius: "5px",
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
