import React from "react";
import { Container, Typography, Box, styled } from "@mui/material";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import SocialIcons from "./SocialIcons/SocialIcons";
import "./SocialIcons/footer.css";
import optimenu from "../../../../../../assets/images/Optimenu.png";
import Image from "next/image";

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flex: 1,
    marginY: 3,
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: "80px 48px",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flex: 1,
    marginY: 3,
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingBottom: "50px",
    paddingTop: "50px",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    flex: 1,
    marginY: 3,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  [theme.breakpoints.up("xl")]: {
    display: "flex",
    flex: 1,
    marginY: 3,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  [theme.breakpoints.up("xxl")]: {
    display: "flex",
    flex: 1,
    marginY: 3,
    flexDirection: "row",
  },
}));

const Footer = () => {
  const today = new Date();
  return (
    <>
      <Container
        maxWidth="xxl"
        disableGutters
        sx={{ backgroundColor: "#1A1C1E" }}
      >
        <StyledBox>
          <Box
            display="flex"
            flexDirection="column"
            gap="40px"
            justifyContent="center"
            alignItems="center"
            flexGrow={2}
          >
            <Image
              src={optimenu}
              alt="Optimenu"
              width={200}
              height={50}
              style={{
                filter: "invert(1)",
                objectFit: "contain",
              }}
            />
            {/* <SocialIcons /> */}
          </Box>
          <Box
            flexGrow={1}
            display="flex"
            flexDirection="column"
            alignItems={"flex-start"}
            gap={{ xs: "5px", md: "10px" }}
            width={{ xs: "100%", md: "auto" }}
          >
            <Typography
              variant="h6"
              fontWeight={"bold"}
              color="#fff"
              paddingTop={3}
            >
              Useful Links
            </Typography>
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
            <Link href="/signup" style={linkStyle}>
              <Typography
                variant="body1"
                component="span"
                style={{ fontSize: "1.3rem" }}
              >
                Get Started
              </Typography>
            </Link>
          </Box>
          {/* <Box
            flexGrow={1}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={{ xs: "5px", md: "10px" }}
            width={{ xs: "100%", md: "auto" }}
          >
            <Typography
              variant="h6"
              fontWeight={"bold"}
              color="#fff"
              paddingTop={3}
            >
              Contact
            </Typography>
            <Typography variant="body1" color="#fff">
              Optimenu
            </Typography>
            <Typography variant="body1" color="#fff">
              s.Labunshta 6336
            </Typography>
            <Typography variant="body1" color="#fff">
              Struga Macedonia
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              display="flex"
              alignItems="center"
              sx={{ justifyContent: "flex-start" }}
            >
              <FaPhone />
              &emsp;Tel: 077 777 777
            </Typography>

            <Typography
              variant="body1"
              color="#fff"
              display="flex"
              alignItems="center"
              sx={{ justifyContent: "flex-start" }}
            >
              <FaEnvelope />
              &emsp;info@optimenu.co
            </Typography>
          </Box> */}
        </StyledBox>
      </Container>
      <Box bgcolor="#fff">
        <Typography variant="subtitle1" textAlign="center" paddingY="10px">
          &copy; {today.getFullYear()} Optimenu
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
