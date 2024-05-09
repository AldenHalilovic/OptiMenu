import { Box, Container, Typography, Grid } from "@mui/material";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5";
import "../../../../../app/globals.css";

export default function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        sx={{ mt: 3, mb: 1, letterSpacing: 1 }}
        align="center"
      >
        Heres What You Get
      </Typography>
      <Typography
        variant="subtitle1"
        className="text"
        sx={{ mb: 2.5, letterSpacing: 1 }}
        align="center"
      >
        OmniMenu’s Dashboard simplifies management between canteens and food
        consumers like day-care centers, retirement homes, and more.
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {/* Menu Section */}
        <Grid item xs={12} sm={5.5}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom className="title">
              Paperless System
            </Typography>
            <Typography variant="body2" className="text" letterSpacing={0.8}>
              Fully paperless operations save significant time, resources, and
              money by eliminating traditional coupon distribution across
              consumers including employees, students, and event attendees.
            </Typography>
            <Link
              href="/learn-more"
              style={{ textDecoration: "none" }}
              className="link"
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                Learn More
                <IoChevronForwardSharp />
              </Box>
            </Link>
          </Box>
        </Grid>

        {/* Orders Section */}
        <Grid item xs={12} sm={5.5}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom className="title">
              Customized Catering
            </Typography>
            <Typography variant="body2" className="text" letterSpacing={0.8}>
              Customize catering operations to match user preferences and
              organizational policies, providing precise pre-order stats and
              consumption tracking to ensure efficient operation and reduce
              wastage.
            </Typography>

            <Link
              href="/learn-more"
              style={{ textDecoration: "none" }}
              className="link"
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                Learn More
                <IoChevronForwardSharp />
              </Box>
            </Link>
          </Box>
        </Grid>

        {/* Staff Management Section */}
        <Grid item xs={12} sm={5.5}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom className="title">
              Efficient Management
            </Typography>
            <Typography variant="body2" className="text" letterSpacing={0.8}>
           Optimize management with a multi-user platform thats easy to
              install and operate, enhancing the efficiency and security of food
              service operations, thus reducing potential system manipulation.
            </Typography>
            <Link
              href="/learn-more"
              style={{ textDecoration: "none" }}
              className="link"
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                Learn More
                <IoChevronForwardSharp />
              </Box>
            </Link>
          </Box>
        </Grid>

        {/* Fourth Section */}
        <Grid item xs={12} sm={5.5}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom className="title">
              Resource Optimization
            </Typography>
            <Typography variant="body2" className="text" letterSpacing={0.8}>
              Track and manage resources effectively across the entire supply
              and value chain, helping to minimize waste in canteens, caterings,
              and restaurants by accurately monitoring resources.
            </Typography>
            <Link
              href="/learn-more"
              style={{ textDecoration: "none" }}
              className="link"
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                Learn More
                <IoChevronForwardSharp />
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
