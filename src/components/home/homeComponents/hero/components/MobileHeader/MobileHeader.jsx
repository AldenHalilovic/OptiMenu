"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link"; // Correcting the import
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const linkStyle = {
  color: "#1A1C1E",
  textDecoration: "none",
};

const MobileHeader = ({ isMobile }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{
          sx: { display: "flex", alignItems: "flex-start", width: "60%" },
        }}
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          display="flex"
          p="20px"
          width="100%"
          justifyContent="space-between"
        >
          <IoMdClose fontSize="large" onClick={() => setOpenDrawer(false)} />
        </Box>
        <Divider sx={{ width: "100%" }} />
        <List
          sx={{
            width: "100%",
            "& > *": {
              height: "50px",
              borderBottom: "1px solid #00000022",
              width: "100%",
            },
          }}
        >
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/who-we-are" style={linkStyle}>
                <Typography variant="body2">Who We Are</Typography>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/for-companies" style={linkStyle}>
                <Typography variant="body2">For Companies</Typography>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} sx={{ mb: 2 }}>
            <ListItemText>
              <Link href="/signup" style={linkStyle}>
                <Typography variant="body2">Get Started</Typography>
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <IoIosMenu />
        </IconButton>
      </Box>
    </>
  );
};

export default MobileHeader;
