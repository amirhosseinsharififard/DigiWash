/* eslint-disable react/prop-types */
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import toFarsiNumber from "./functions";
const IncreaseItem = ({ title, image, cost }) => {
  return (
    <Container>
      <Grid
        container
        display='flex'
        justifyContent={"space-between"}
        alignItems='center'
        alignContent={"center"}
        bgcolor='rgb(237, 252, 255)'
        m='.2rem 0 0 .2rem '
        borderRadius={"16px"}
        height="80px"
        p={2}>
        <Grid item xs={9} sm={9} md={9} lg={9} display={"flex"}>
          <Box>
            <img src={image} style={{ padding: "1rem",width:"48px" ,height:"48px" }} />
          </Box>
          <Box display='flex' flexDirection={"column"} justifyContent='center'>
            <Typography variant='h6'fontWeight={"bold"} fontSize="16px" fontFamily="Vazir-Bold">{title}</Typography>
            <Typography variant='h6'fontWeight={"bold"} fontSize="16px" fontFamily="Vazir-Bold">
              {cost}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          lg={3}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          alignContent='center'
          >
          <Button
            sx={{
              minWidth:"48px",height:"48px",
              bgcolor: "rgb(12, 174, 202)",
              borderRadius: "50%",
              display:"flex",
              alignItems: "center",
              alignContent:"center",
              color: "white",
              "&:hover": {
                bgcolor: "rgb(12, 174, 202)"
              }
            }}>
            +
          </Button>
          <span style={{
            fontFamily:"Vazir-Bold",
            fontSize:"16px"
            ,fontWeight:"bold"
          }}>{toFarsiNumber(0)}</span>
          <Button
            sx={{
              minWidth:"48px",height:"48px",
              bgcolor: "#fff",
              borderRadius: "50%",
              alignItems: "center",
              color: "rgba(0,0,0,0.5)",
              fontSize: "14px",
              "&:hover": {
                background: "#fff"
              }
            }}>
            -
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IncreaseItem;
