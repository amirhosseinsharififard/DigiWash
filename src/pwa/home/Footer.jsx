import { Grid, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";

import ModalIncrease from "../../share/ModalIncrease";
const Footer = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleHandler = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
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
            onClick={() => toggleHandler()}
            style={{
              textDecoration: "none",
              color: "#0caeca",
              width: "100%",
              textAlign: "center"
            }}>
            <LocalLaundryServiceOutlinedIcon
              style={{ width: "24px", height: "24px" }}
            />
            <Typography>سفارش ها</Typography>
            {console.log(isShowModal)}
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
            <Typography>پروفایل</Typography>
          </Link>
        </Grid>
      </Grid>
      {isShowModal && (
        <ModalIncrease
          isShowModal={isShowModal}
          toggleHandler={() => toggleHandler()}
        />
      )}
    </>
  );
};

export default Footer;
