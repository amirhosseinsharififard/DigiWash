import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import { Grid, Typography} from "@mui/material";
//icon
import HomeIcon from "@mui/icons-material/Home";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ModalIncrease from "../common/ModalIncrease";

const Footer = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const openFooter = useLocation().pathname.split("/");
  const lastIndex = openFooter.length - 1;
  console.log(openFooter[lastIndex] == "address");
  console.log(openFooter[lastIndex] );
  const pathName = useLocation().pathname;
  const toggleHandler = () => {
    setIsShowModal(!isShowModal);
  };
  // console.log(result)
  return (
    <>
     { !(openFooter[lastIndex] == "address" || openFooter[lastIndex] == 'basket' ) && (
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
            right: 0,
            zIndex: 3,
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
                textAlign: "center",
              }}>
              <HomeIcon style={{width: "24px", height: "24px"}} />
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
              // onClick={() => toggleHandler()}
              to='/basket'
              style={{
                textDecoration: "none",
                color: "#0caeca",
                width: "100%",
                textAlign: "center",
              }}>
              <LocalLaundryServiceOutlinedIcon
                style={{width: "24px", height: "24px"}}
              />
              <Typography>سفارش ها</Typography>
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
                textAlign: "center",
              }}>
              <AccountCircleOutlinedIcon
                style={{width: "24px", height: "24px"}}
              />
              <Typography>پروفایل</Typography>
            </Link>
          </Grid>
        </Grid>
      )
}
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