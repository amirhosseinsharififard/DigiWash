/* eslint-disable react/prop-types */
import {Box, Grid, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";

// icon
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BasketIcon from "../../assets/svg/ordersBasket.c57a891b.svg";
import toFarsiNumber from "../../utils/functions";
const HeaderProfileLinks = ({pageAddress, collectAllProductLength}) => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <Box sx={{bgcolor: "#0caeca"}}>
      <Box
        sx={{
          maxWidth: "768px",
          m: "0rem auto ",
          display: "flex",
          alignItems: "container",
          flexDirection: "column",
          p: "0 0 0 0 ",
          bgcolor: "",
        }}>
        {/* blue zone */}
        <Grid
          container
          sx={{
            display: "flex",
            alignContent: "space-betweens",
            alignItems: "center",
            justifyContent: "space-between",
            p: "1rem 1rem .7rem 1rem",
            color: "white",
          }}>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link onClick={() => goBackHandler()}>
              <Typography variant='h6' fontWeight={700}>
                <ArrowForwardIosIcon
                  style={{color: "white", padding: ".5rem"}}
                />
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}>
              <Typography
                variant='h5'
                fontSize='18px'
                fontFamily='Vazir'
                fontWeight={700}>
                {pageAddress}
              </Typography>
            </Link>
          </Grid>
        </Grid>

        {/* white zone */}
        <Grid
          container
          border='1px solid rgba(0,0,0,.1)'
          borderBottom='none'
          sx={{
            bgcolor: "rgb(242, 247, 247)",
            borderRadius: "30px 30px 0 0",
            display: "flex",
            alignContent: "space-betweens",
            justifyContent: "space-between",
            p: "1.5rem 1.5rem .7rem 1.5rem",
          }}>
          <Grid
            item
            display='flex'
            xs={12}
            sm={12}
            md={12}
            lg={12}
            justifyContent='space-between'>
            <Box
              display='flex'
              justifyContent='start'
              alignContent='center'
              alignItems={"center"}>
              <img src={BasketIcon} height='32px' width='32px' />
              <Typography
                fontSize='16px'
                fontFamily='Vazir'
                fontWeight='bold'
                color='rgb(0, 77, 100)'
                mr='8px'>
                سفارش شما
              </Typography>
            </Box>
            <Box
              display='flex'
              justifyContent='start'
              alignContent='center'
              alignItems={"center"}>
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "Vazir",
                  fontWeight: "bold",
                  color: "rgb(0, 77, 100)",
                }}>
                {toFarsiNumber(collectAllProductLength??0)}
              </span>
              <Typography
                fontSize='18px'
                fontFamily='Vazir'
                fontWeight='bold'
                color='rgb(0, 77, 100)'
                mr='8px'>
                مورد
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeaderProfileLinks;
