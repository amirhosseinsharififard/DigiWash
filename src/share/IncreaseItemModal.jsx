/* eslint-disable react/prop-types */
import { Box, Button, Grid, Typography } from "@mui/material";
import toFarsiNumber, { persianPrice } from "./functions";
const IncreaseItem = ({ title, image, cost }) => {
  return (
    <>
      <Grid
        container
        display='flex'
        justifyContent={"space-between"}
        alignItems='center'
        alignContent={"center"}
        bgcolor='rgb(237, 252, 255)'
        m='.2rem auto'
        borderRadius={"16px"}
        height='80px'
        p={1}>
        <Grid item xs={8} sm={8} md={8} lg={8} display={"flex"}>
          <Box>
            <img src={image} style={{ maxWidth: "48px", maxHeight: "48px" }} />
          </Box>
          <Box display='flex' flexDirection={"column"} justifyContent='center'>
            <Typography variant='h6' fontSize='16px' fontFamily='Vazir-Bold'>
              {title}
            </Typography>
            <Typography variant='h6' fontSize='16px' fontFamily='Vazir'>
              {persianPrice(cost)} تومان
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          display='flex'
          justifyContent='center'
          alignItems='center'
          alignContent='center'
          sx={{ textAlign: "right" }}>
          <Button
            sx={{
              minWidth: "48px",
              height: "48px",
              bgcolor: "rgb(12, 174, 202)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              color: "white",
              "&:hover": {
                bgcolor: "rgb(12, 174, 202)"
              }
            }}>
            +
          </Button>
          <span
            style={{
              fontFamily: "Vazir-Bold",
              fontSize: "16px",
              fontWeight: "bold",
              margin: "8px"
            }}>
            {toFarsiNumber(0)}
          </span>
          <Button
            sx={{
              minWidth: "48px",
              height: "48px",
              bgcolor: "#fff",
              borderRadius: "50%",
              alignItems: "center",
              color: "rgba(0,0,0,0.5)",
              ml: "2rem",
              fontSize: "14px",
              "&:hover": {
                background: "#fff"
              }
            }}>
            -
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default IncreaseItem;
