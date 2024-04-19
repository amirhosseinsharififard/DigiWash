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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          alignContent: "center",
          p: "0 0 0 0 ",
          border: "1px solid rgb(204, 204, 204)",
          borderRadius: "8px 8px 0 0",
        }}>
        <Grid item xs={4} lg={12}>
          <Link to='/' style={{ textDecoration: "none", color: "#0caeca" }}>
            <HomeIcon />
            <Typography>خانه</Typography>
          </Link>
        </Grid>
        <Grid item xs={4} lg={12}>
          <Link to='/' style={{ textDecoration: "none", color: "#0caeca" }}>
            <LocalLaundryServiceOutlinedIcon />
            <Typography>خانه</Typography>
          </Link>
        </Grid>
        <Grid item xs={4} lg={12}>
          <Link to='/' style={{ textDecoration: "none", color: "#0caeca" }}>
            <AccountCircleOutlinedIcon />
            <Typography>خانه</Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
