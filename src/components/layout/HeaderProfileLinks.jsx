/* eslint-disable react/prop-types */
import {Box, Grid, Typography} from "@mui/material";
import {Link, useLocation, useNavigate} from "react-router-dom";

// icon
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HeaderProfileLinks = ({pageAddress}) => {
  const openFooter = useLocation().pathname.split("/");
  const lastIndex = openFooter.length - 1;
  // console.log(openFooter[lastIndex] == "address");
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1); // برگشت به صفحه قبلی
  };
  return (
    <Box sx={{bgcolor: "#0caeca"}}>
      <Box
        sx={{
          maxWidth: "768px",
          m: `0rem auto  ${openFooter[lastIndex] == "address" ? "0" : "5rem"}`,
          display: "flex",
          alignItems: "container",
          flexDirection: "column",
          p: "0 0 0 0 ",
        }}>
        {/* blue zone */}
        <Grid
          container
          sx={{
            display: "flex",
            alignContent: "space-betweens",
            alignItems: "center",
            justifyContent: "space-between",
            p: "1.5rem 1.5rem .7rem 1.5rem",
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
            bgcolor: "white",
            borderRadius: "30px 30px 0 0",
            display: "flex",
            alignContent: "space-betweens",
            justifyContent: "space-between",
            p: "1.5rem 1.5rem .7rem 1.5rem",
          }}>
          <Grid item display='flex' xs={10} sm={10} md={10} lg={10}>
            <Typography variant='h5' fontWeight='bold'>
              ادرس های ثبت شده
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeaderProfileLinks;
