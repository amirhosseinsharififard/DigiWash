/* eslint-disable react/prop-types */
import {Box, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

// icon
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import toFarsiNumber from "../../../share/functions";


const HeaderTransa = ({pageAddress}) => {

  return (
    <Box sx={{bgcolor: "#0caeca"}}>
      <Box
        sx={{
          m: "auto",
          display: "flex",
          alignItems: "container",
          flexDirection: "column",
          maxWidth: "768px",
        }}>
        {/* blue zone */}
        <Grid
          container
          sx={{
            display: "flex",
            alignContent: "space-betweens",
            alignItems: "center",
            m: "1rem auto",
            justifyContent: "space-between",
            p: ".5rem 1.5rem .7rem 1.5rem",
            color: "white",
          }}>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link to='/profile' style={{display: "flex", alignItems: "center"}}>
              <ArrowForwardIosIcon
                style={{color: "white", width: "32px", height: "32px"}}
              />
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
                fontFamily='Vazir'
                fontWeight='bold'
                fontSize='18px'>
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
            bgcolor: "white",
            borderRadius: "30px 30px 0 0",
            display: "flex",
            alignContent: "space-betweens",
            justifyContent: "space-between",
            p: "1.5rem 1.5rem .7rem 1.5rem",
          }}>
          <Grid item display='flex' xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                textDecoration: "none",
                color: "black",
                bgcolor: "rgb(235, 248, 250)",
                borderRadius: "16px ",
                p: "1rem",
                width: "100%",
              }}>
              <Typography variant='h6' fontFamily='Vazir' fontSize='16px'>
                مانده اعتبار
              </Typography>

              <Typography
                variant='body1'
                fontSize='12px'
                fontFamily='Vazir'
                fontWeight='bold'>
                <span style={{marginLeft: ".3rem"}}> {toFarsiNumber(0)}</span>
                تومان
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeaderTransa;
