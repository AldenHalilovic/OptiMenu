import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const IconCard = ({ icon, header, description }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: 350,
        minHeight: 250,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "16px",
        padding: "32px",
        m: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        {icon}
      </Box>
      <Typography
        variant="h5"
        align="center"
        sx={{ mt: 0, mb: 1, fontSize: "1.2rem", fontWeight: 500 }}
      >
        {header}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ mt: 0, fontSize: "0.9rem", fontWeight: 400, lineHeight: 1.5 }}
      >
        {description}
      </Typography>
    </Paper>
  );
};

export default IconCard;
