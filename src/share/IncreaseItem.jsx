import { Box, Button, Container, Grid, Typography } from "@mui/material";
import styles from "./IncreaseItem.module.css";
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
        m='2rem 0 0 2rem '
        borderRadius={"16px"}
        p={2}>
        <Grid item xs={10} sm={10} md={10} lg={10} display={"flex"}>
          <Box>
            <img src={image} style={{ padding: "2rem" }} />
          </Box>
          <Box display='flex' flexDirection={"column"} justifyContent='center'>
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='h6' fontWeight='bold'>
              {cost}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          lg={2}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          alignContent='center'>
          <Button
            sx={{
              bgcolor: "rgb(12, 174, 202)",
              borderRadius: "50%",
              alignItems: "center",
              p: "1.3rem",
              color: "white",
              "&:hover": {
                bgcolor: "rgb(12, 174, 202)"
              }
            }}>
            +
          </Button>
          <span>0</span>
          <Button
            sx={{
              bgcolor: "#fff",
              borderRadius: "50%",
              alignItems: "center",
              p: "1.3rem",
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
