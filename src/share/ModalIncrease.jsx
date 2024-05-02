import { Box, Container, Grid,  Typography } from "@mui/material";
import IncreaseItem from "./IncreaseItem";
import CategoryModal from "./CategoryModal";
import whashSvg from "../../assets/wash.c4124479.svg"
const ModalIncrease = () => {
  return (
    <>

      <Box
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "2",
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(15px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        }}>
 
        <Box maxWidth="768px" m='0 auto'
          >
          <Grid container sx={{
            height:"450px",

            display: "flex",
            backgroundColor: "#fff",
            borderRadius: "16px 16px 0 0",
            p: ".5rem 0"
          }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant='h5' fontWeight={"bold"} fontSize="16px" fontFamily="Vazir-Bold" p=" 1rem 3rem 0 0">
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
        </Box>
      </Box>
    </>
  );
};

export default ModalIncrease;
