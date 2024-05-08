"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import optimenu from "../../assets/images/Optimenu.png";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      p={1}
      bgcolor="transparent"
      sx={{ width: "100%", color: "white" }}
      className="main"
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" component="div">
          <Image src={optimenu} alt="Optimenu" width="100%" height="100%" />
        </Typography>
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
            style={{ fontSize: "1.3rem" }}
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
            style={{ fontSize: "1.3rem" }}
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
            style={{ fontSize: "1.3rem" }}
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
            style={{ fontSize: "1.3rem" }}
          >
            Support
          </Typography>
        </Link>
      </Box>
      <Box display="flex" justifyContent="flex-end" alignItems="center" flex="1">
        <Button
          color="inherit"
          style={{
            marginLeft: "1rem",
            textTransform: "none",
            fontSize: "1.3rem",
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
