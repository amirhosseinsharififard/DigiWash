import { Box, Grid } from "@mui/material";
import HeaderBasket from "../components/HeaderBasket";
import OrderSection from "../components/OrderSection";
import OrederSectionItem from "../components/OrederSectionItem";

const Basket = () => {
  const order = 1;
  return (
    <>
      <HeaderBasket pageAddress={"تکمیل سفارش"} />
      <Box sx={{ bgcolor: "rgb(242, 247, 247)" }}>
        <Grid
          container
          m='auto'
          maxWidth='768px'
          alignItems='center'
          alignContent='center'>
          {order === 0 && <OrderSection />}
          {order === 1 && <OrederSectionItem />}
        </Grid>
      </Box>
    </>
  );
};

export default Basket;
