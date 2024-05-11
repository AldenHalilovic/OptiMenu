import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const SignupForm = () => {
  const [registerType, setRegisterType] = useState("company");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [registerType]);

  return (
    <Grid
      container
      spacing={2}
      py={{ xs: 5, md: 10 }}
      sx={{ display: "grid", placeItems: "start center" }}
    >
      <Grid item xs={12}>
        <Typography
          textAlign="center"
          variant="h4"
          fontWeight="600"
          color="#ed6c02"
          sx={{ fontSize: { xs: "20px", sm: "24px", md: "30px" } }}
        >
          Help Us Help You
        </Typography>
        <Typography
          textAlign="center"
          variant="subtitle1"
          color="#000"
          mb={2}
          sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
        >
          Get started by filling the form for your business or as a consumer. We
          will get back to you as soon as possible.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          {["company", "consumer"].map((type, index) => (
            <Card
              key={index}
              sx={{ width: { xs: "100%", sm: "350px" }, cursor: "pointer" }}
              onClick={() => !loading && setRegisterType(type)}
            >
              <CardContent
                sx={{
                  background: registerType === type ? "#ed6c02" : "white",
                  transition: "0.2s ease-in-out",
                }}
              >
                <Typography
                  variant="h6"
                  color={registerType === type ? "white" : "text.secondary"}
                  textTransform="capitalize"
                  sx={{ fontSize: { xs: "16px", md: "18px" } }}
                >
                  {type}
                </Typography>
                <Typography
                  variant="body2"
                  color={registerType === type ? "white" : "text.secondary"}
                >
                  {`Submit form as a ${type}`}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Grid>

      <Grid item xs={12} sx={{ width: "100%", position: "relative" }}>
        {loading ? (
          <Grid sx={{ display: "grid", placeItems: "center", height: "300px" }}>
            <CircularProgress />
          </Grid>
        ) : (
          <>
            <iframe
              id="JotFormIFrame-241297263369364"
              title={
                registerType === "company"
                  ? "Company Registration"
                  : "Consumer Registration"
              }
              onload="window.parent.scrollTo(0,0)"
              allowtransparency="true"
              allow="geolocation; microphone; camera; fullscreen"
              src={
                registerType === "company"
                  ? "https://form.jotform.com/241297270645359"
                  : "https://form.jotform.com/241297263369364"
              }
              frameborder="0"
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                height: registerType === "company" ? "1200px" : "1600px",
                border: "none",
              }}
            ></iframe>
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100px",
                bottom: 0,
                left: 0,
                background: "#fff",
                zIndex: 3,
              }}
            ></Box>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default SignupForm;
