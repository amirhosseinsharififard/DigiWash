import { Box, Container, Grid, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import ModalIncrease from "../../share/ModalIncrease";
const Footer = () => {
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  return (
    // <Box
    //   sx={{
    //     position: "fixed",
    //     top: "0",
    //     left: "0",
    //     zIndex: "1",
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "flex-end",
    //     width: "768px",
    //     paddingTop: "1rem",
    //     paddingBottom: "1rem",backgrounde:"none",
    //     "@media only screen and (maxWidth: 768px)": { width: "110vh" }
    //   }}>
    <Grid
      container
      sx={{
        m: "auto",
        border: "1px solid rgb(204, 204, 204)",
        borderRadius: "8px 8px 0 0",
        maxWidth: "768px",
        paddingTop: "1rem",
        bgcolor: "white",
        position: "fixed",
        left: 0,
        bottom: "0%",
        right: 0
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
          <HomeIcon style={{ width: "24px", height: "24px" }} />
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
          to='/modal'
          // onClick={handleClick}
          style={{
            textDecoration: "none",
            color: "#0caeca",
            width: "100%",
            textAlign: "center"
          }}>
          <LocalLaundryServiceOutlinedIcon
            style={{ width: "24px", height: "24px" }}
          />
          <Typography>خانه</Typography>
          {/* {console.log(handleClick)} */}
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
          <AccountCircleOutlinedIcon
            style={{ width: "24px", height: "24px" }}
          />
          <Typography>خانه</Typography>
        </Link>
      </Grid>
    </Grid>
    // </Box>
  );
};

export default Footer;
