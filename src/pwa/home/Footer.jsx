import { Box, Container, Grid, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        "@media only screen and (maxWidth: 768px)": { width: "110vh" }
      }}>
      <Container>
        <Grid
          container
          sx={{
            border: "1px solid rgb(204, 204, 204)",
            borderRadius: "8px 8px 0 0",
            bgcolor: "white"
          }}>
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            lg={4}
            display='flex'
            alignItems='center'
            justifyContent='center'
            alignContent='center'>
            <Link
              to='/'
              style={{
                textDecoration: "none",
                color: "#0caeca",
                width: "100%",
                textAlign: "center"
              }}>
              <HomeIcon />
              <Typography>خانه</Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            lg={4}
            display='flex'
            alignItems='center'
            justifyContent='center'
            alignContent='center'>
            <Link
              to='/'
              style={{
                textDecoration: "none",
                color: "#0caeca",
                width: "100%",
                textAlign: "center"
              }}>
              <LocalLaundryServiceOutlinedIcon />
              <Typography>خانه</Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            lg={4}
            display='flex'
            alignItems='center'
            justifyContent='center'
            alignContent='center'>
            <Link
              to='/profile'
              style={{
                textDecoration: "none",
                color: "#0caeca",
                width: "100%",
                textAlign: "center"
              }}>
              <AccountCircleOutlinedIcon />
              <Typography>خانه</Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
