import { Box, Button, Container, Grid, Typography } from "@mui/material";

// logo
import LogoPwa from "../../../assets/LogoPwa.png";
import HeaderService from "../service/HeaderService";
import { Link, useLocation } from "react-router-dom";
import LoginHeader from "../../share/LoginHeader";
import persianDigiWash from "../../../assets/persianDigiWash.png";
const HeaderPwa = () => {
  const pathName = useLocation().pathname;
  const isLogin = false;
  console.log(pathName);

  return (
    <Box sx={{ bgcolor: "#0caeca" }}>
      <Box sx={{ maxWidth: "768px", m: "auto" }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "container",
            flexDirection: "column",

            ml: "auto",
            mr: "auto"
          }}>
          {pathName == "/services" ? (
            <HeaderService />
          ) : (
            <Box sx={{  m: " auto ",  }}>
              <Link to='/'>
                <img
                  src={persianDigiWash}
                  style={{ width: "98px", height: "22px",padding:"16px" }}
                />
              </Link>
            </Box>
          )}
        </Container>
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: " 768px",
            top: "-76px"
          }}>
          <Grid
            container
            sx={{
              bgcolor: "white",
              borderRadius: "50px 50px 0 0",
              display: "flex",
              alignContent: "space-betweens",
              justifyContent: "space-between",
              p: "1.5rem 1.5rem .7rem 1.5rem",
              ml: "auto",
              mr: "auto"
            }}>
            {isLogin ? (
              <LoginHeader />
            ) : (
              <Grid item xs={12} sm={12} md={12} lg={12} display="flex" justifyContent="space-between">
                <Grid  display='flex' >
                  <img src={LogoPwa} height='48px' width='48px' />
                  <Box mr={2}>
                    <Typography variant='h6'  fontSize="16px" fontWeight="bold">
                      دیجی واش من
                    </Typography>
                    <Typography variant='body2' fontSize="12px" color="rgb(56, 90, 118)" width="auto">
                      وارد حساب کاربری خود شوید
                    </Typography>
                  </Box>
                </Grid>
                <Grid >
                  <Button
                    variant='contained'
                    sx={{
                      bgcolor: "#0caeca",
                      p: ".5rem 1rem",
                      fontWeight: "bold",
                      borderRadius: "30px",
                      width:"auto",
                      "&:hover": {
                        background: "#0caeca"
                      }
                    }}>
                    ثبتنام / ورود
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderPwa;
