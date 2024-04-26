import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// icon
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HeaderProfileLinks = () => {
  return (
    <Box sx={{ bgcolor: "#0caeca" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "container",
          flexDirection: "column",
          p: "0 0 0 0 "
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
            color: "white"
          }}>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link to='/profile'>
              <Typography variant='h6' fontWeight={700}>
                <ArrowForwardIosIcon
                  style={{ color: "white", padding: ".5rem" }}
                />
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <Link
              style={{
                textDecoration: "none",
                color: "white"
              }}>
              <Typography variant='h5' fontWeight={700}>
                آدرس ها
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
            p: "1.5rem 1.5rem .7rem 1.5rem"
          }}>
          <Grid item display='flex' xs={10} sm={10} md={10} lg={10}>
            <Typography variant='h5' fontWeight='bold'>
              ادرس های ثبت شده
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeaderProfileLinks;
