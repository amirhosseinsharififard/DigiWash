import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// icon
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormEdit from "../common/FormEdit";

// eslint-disable-next-line react/prop-types
const HeaderEdit = ({ pageAddress }) => {
  return (
    <Box sx={{ bgcolor: "#0caeca", height: "10rem" }}>
      <Box
        sx={{
          m: "auto",
          display: "flex",
          alignItems: "container",
          flexDirection: "column",
          maxWidth: "768px"
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
            zIndex: "1"
          }}>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link
              to='/profile'
              style={{ display: "flex", alignItems: "center" }}>
              <ArrowForwardIosIcon
                style={{ color: "white", width: "32px", height: "32px" }}
              />
            </Link>
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <Link
              style={{
                textDecoration: "none",
                color: "white"
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
          borderBottom='none'
          sx={{
            bgcolor: "white",
            borderRadius: "16px 16px 0 0",
            display: "flex",
            alignContent: "space-betweens",
            justifyContent: "space-between",
            p: "1rem 1.5rem .7rem 1.5rem",
            maxWidth: "768px",
            m: "auto"
          }}>
          <FormEdit name={"نام"} dataName={"amir"} />
          <FormEdit name={"نام خانوادگی"} dataName={"sharifi"} />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button fullWidth variant='outlined' sx={{color:"rgb(12, 174, 202)",fontSize:"16px" ,fontFamily:"Vazir-Bold" ,fontWeight:"bold"}}>
              ذخیره تغییرات
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeaderEdit;
