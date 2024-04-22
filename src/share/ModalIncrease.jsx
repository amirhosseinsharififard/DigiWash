import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import IncreaseItem from "./IncreaseItem";

const ModalIncrease = () => {
  return (
    <>
      <Box
        bgcolor='rgba(0,0,0,0.8)'
        width={"100%"}
        height={"100%"}
        zIndex={"1"}
        position={"absolute"}
        top={"0"}
        right={"0"}
      />
      
        <Container sx={{
          position: "fixed",
m:"0 1.6rem",          zIndex: "1",
          bottom: "0",
          bgcolor: "white",
          borderRadius: "16px 16px 0 0",
width:"1100px"
        }} >


        <Grid container position=''>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant='h5' fontWeight={"bold"} m={3}>
              کت و شلوار
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <IncreaseItem
              image='-'
              title={"خشکشویی + اتو"}
              cost={"۱۵۴,۸۰۰ تومان"}
            />
          </Grid>{" "}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <IncreaseItem
              image='-'
              title={"خشکشویی + اتو"}
              cost={"۱۵۴,۸۰۰ تومان"}
            />
          </Grid>{" "}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <IncreaseItem
              image='-'
              title={"خشکشویی + اتو"}
              cost={"۱۵۴,۸۰۰ تومان"}
            />
          </Grid>
        </Grid>

        </Container>
    </>
  );
};

export default ModalIncrease;
