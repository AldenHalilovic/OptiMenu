"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";

import Link from "next/link";
import Image from "next/image";
import optimenu from "../../assets/images/Optimenu.png";

const linkStyle = {
  color: "inherit",
  textDecoration: "none",
  marginLeft: "1rem",
};

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      p={1}
      bgcolor="transparent"
      sx={{ width: "100%", color: "black" }}
      className="main"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <Image src={optimenu} alt="Optimenu" width={200} height={50} />
        </Link>
        <Link href="/who-we-are" style={linkStyle}>
          <Typography
            variant="body1"
            component="span"
            style={{ fontSize: "1.3rem" }}
          >
            Who We Are
          </Typography>
        </Link>
        <Link href="/for-companies" style={linkStyle}>
          <Typography
            variant="body1"
            component="span"
            style={{ fontSize: "1.3rem" }}
          >
            For Companies Hello
          </Typography>
        </Link>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        flex="1"
      >
        <Link href="/signup">
          <Button
            variant="contained"
            color="warning"
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
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
