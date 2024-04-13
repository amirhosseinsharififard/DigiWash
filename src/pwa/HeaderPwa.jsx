import { Box, Button, Container, Grid, Typography } from "@mui/material";

// logo
import LogoPwa from "../../assets/LogoPwa.png";

const HeaderPwa = () => {
  return (
    <Box sx={{ bgcolor: "#0caeca" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "container",
          flexDirection: "column",
          p: "0 0 0 0 "
        }}>
        <Box sx={{ height: "22px", width: "98px", m: ".5rem auto" }}>LOGO</Box>

        <Grid
          container
          sx={{
            bgcolor: "white",
            borderRadius: "50px 50px 0 0",
            display: "flex",
            alignContent: "space-betweens",
            justifyContent: "space-between",
            p: "1.5rem 1.5rem .7rem 1.5rem"
          }}>
          <Grid item display='flex'>
            <img src={LogoPwa} height='48px' width='48px' />
            <Box mr={2}>
              <Typography variant='h6' fontWeight={700}>
                دیجی واش من
              </Typography>
              <Typography variant='body2'>وارد حساب کاربری خود شوید</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              sx={{
                bgcolor: "#0caeca",
                p: ".5rem 1rem",fontWeight:"bold",
                borderRadius: "30px",
                "&:hover": {
                  background: "#0caeca"
                }
              }}>
              ثبتنام / ورود
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeaderPwa;
