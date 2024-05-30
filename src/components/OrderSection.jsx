import { Box, Grid, Typography } from "@mui/material";

const OrderSection = () => {
  return (
    <Grid
      bgcolor='white'
      style={{
        width: "100%",
        borderRadius: "30px",
      }}>
      <Box
        sx={{
          p: "1.5rem",
        }}>
        <Box
          to=''
          style={{
            textDecoration: "none",
            border: "1px solid rgb(235, 241, 242)",
            borderRadius: "12px",
            cursor: "pointer",
          }}>
          <Typography
            color='rgb(12, 174, 202)'
            fontSize='16px'
            fontFamily='Vazir'
            fontWeight='bold'
            m=".5rem .5rem 0 0">
            سفارش خود را ثبت کنید!
          </Typography>
          <Typography color="rgba(0, 0, 0, 0.5)" fontSize="12px" fontFamily="Vazir" m="1rem 0"
          width="100%" textAlign="center">
            برای  ثبت سفارش لطفا اقلام خود را ابتدا انتهاب کنید
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default OrderSection;
