import { Container, Grid, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Container>
      <Grid
        container
        sx={{
          border: "1px solid rgb(204, 204, 204)",
          borderRadius: "8px 8px 0 0"
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
              padding: "4px",
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
              padding: "4px",
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
              padding: "4px",
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
  );
};

export default Footer;
