import { Box, Button, Container, Grid, Typography } from "@mui/material";

// logo
import LogoPwa from "../../../assets/LogoPwa.png";
import { useLocation } from "react-router-dom";

const ProfleHeader = () => {
  const pathName = useLocation().pathname;
  const personAccout = {
    nameAccount: "amir sharifi",
    cellPhoneNumber: "09172384087",
    costAccount: "0"
  };
  console.log(pathName);

  return (
    <>
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
              justifyContent: "space-between",
              p: "1.5rem 1.5rem .7rem 1.5rem",
              color: "white"
            }}>
            <>
              <Grid item display='flex'>
                <img src={LogoPwa} height='48px' width='48px' />
                <Box mr={2}>
                  <Typography variant='h6' fontWeight={700}>
                    {personAccout.nameAccount}
                  </Typography>
                  <Typography variant='body2'>
                    {personAccout.cellPhoneNumber}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  sx={{
                    bgcolor: "#0caeca",
                    p: ".5rem 1rem",
                    fontWeight: "bold",
                    borderRadius: "30px",
                    "&:hover": {
                      background: "#0caeca"
                    }
                  }}>
                  ICon Pencil
                </Button>
              </Grid>
            </>
          </Grid>

          {/* white zone */}
          <Grid
            container
            border='1px solid rgba(0,0,0,.1)' borderBottom="none"
            sx={{
              bgcolor: "white",
              borderRadius: "16px 16px 0 0",
              display: "flex",
              alignContent: "space-betweens",
              justifyContent: "space-between",
              p: "1.5rem 1.5rem .7rem 1.5rem",
              
            }}>
            <Grid item display='flex' xs={10} sm={10} md={10} lg={10}>
              <Typography variant='h6' fontWeight='bold'>
                {personAccout.costAccount} تومان اعتبار
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} textAlign='end'>
              <Button
                sx={{
                  color: "#0caeca",
                  bgcolor: "white",
                  p: ".5rem 1rem",
                  fontWeight: "bold",
                  fontSize: 18,

                  "&:hover": {
                    background: "none"
                  }
                }}>
                افزایش اعتبار
              </Button>
            </Grid>
          </Grid>
          {/* secound white zone */}
        </Container>
      </Box>
      <Container>
        <Grid container bgcolor='white' border='1px solid rgba(0,0,0,.1)' borderTop="none">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignContent='center'
            alignItems='center' mb={10}>
            <Box
              display='flex'
              justifyContent='center'
              alignContent='center'
              alignItems='center'>
              <img src='1' />
              <Typography variant='h6' fontWeight='bold' mr={2}>
                کیف پول
              </Typography>
            </Box>
            <Typography variant='body1'>
              {personAccout.costAccount} تومان
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignContent='center'
            alignItems='center'
            borderRight='1px solid rgba(0,0,0,.1)' mb={10}>
            <Box
              display='flex'
              justifyContent='center'
              alignContent='center'
              alignItems='center'>
              <img src='1' />
              <Typography variant='h6' fontWeight='bold' mr={2}>
                کیف پول
              </Typography>
            </Box>
            <Typography variant='body1'>
              {personAccout.costAccount} تومان
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProfleHeader;
