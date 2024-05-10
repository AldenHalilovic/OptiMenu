"use client";
import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";
import optimenu from "../../assets/images/Optimenu.png";
import MobileHeader from "./homeComponents/hero/components/MobileHeader"; // Adjust path as needed

const linkStyle = {
  color: "inherit",
  textDecoration: "none",
  marginLeft: "1rem",
};

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
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
      </Box>

      {isMobile ? (
        <MobileHeader isMobile={isMobile} />
      ) : (
        <Box display="flex" alignItems="center">
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
              For Companies
            </Typography>
          </Link>
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
      )}
    </Box>
  );
};

export default Header;
