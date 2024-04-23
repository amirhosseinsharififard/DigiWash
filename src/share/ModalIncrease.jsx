import { Box, Container, Grid,  Typography } from "@mui/material";
import IncreaseItem from "./IncreaseItem";
import CategoryModal from "./CategoryModal";
import whashSvg from "../../assets/wash.c4124479.svg"
const ModalIncrease = () => {
  return (
    <>
      {/* <Box
        bgcolor='rgba(0,0,0,0.8)'
        width="100vw"
        height="100vh"
        zIndex={"1"}
        position={"absolute"}
        top={"0"}
        right={"0"}
        sx={{height:"100%"}}
      /> */}

      <Box
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "1",
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(15px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        }}>
        {/* <Container
        sx={{
          position: "relative",
          top: "",
          zIndex: "1",
          bgcolor: "white",
          borderRadius: "16px 16px 0 0"
        }}> */}
        <Container
          >
          <Grid container sx={{
            display: "flex",
            backgroundColor: "#fff",
            borderRadius: "16px 16px 0 0",
            p: "3rem 0"
          }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant='h5' fontWeight={"bold"} p={3}>
                کت و شلوار
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
            <CategoryModal/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <IncreaseItem
                image={whashSvg}
                title={"خشکشویی + اتو"}
                cost={"۱۵۴,۸۰۰ تومان"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <IncreaseItem
                image={whashSvg}
                title={"خشکشویی + اتو"}
                cost={"۱۵۴,۸۰۰ تومان"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <IncreaseItem
                image={whashSvg}
                title={"خشکشویی + اتو"}
                cost={"۱۵۴,۸۰۰ تومان"}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ModalIncrease;
