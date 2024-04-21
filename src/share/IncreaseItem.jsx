import { Box, Button, Grid, Typography } from "@mui/material";

const IncreaseItem = ({ title, image, cost }) => {
  return (
    <Grid
      container
      display='flex'
      justifyContent={"space-between"}
      alignItems='center'
      alignContent={"center"}>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        <Box>
          <img src={image} />
        </Box>
        <Box display='flex' flexDirection={"column"}>
          <Typography variant='h6'>{title}</Typography>
          <Typography variant='h6' fontWeight='bold'>
            {cost}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2}>
        <Button>+</Button>
        <span>0</span>
        <Button>-</Button>
      </Grid>
    </Grid>
  );
};

export default IncreaseItem;
