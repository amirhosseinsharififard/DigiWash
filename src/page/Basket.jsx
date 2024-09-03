import { Box, Grid, } from "@mui/material";
import HeaderBasket from "../components/HeaderBasket";
import OrderSection from "../components/OrderSection";
import OrederSectionItem from "../components/OrederSectionItem";
import Transportations from "../components/Transportations";
import { useSelector } from "react-redux";
import { cart } from "../pwa/features/cart/cartSlice";
import BillComponent from "../components/BillComponent";

const Basket = () => {
  const cartItem = useSelector(cart);
  const selectedItems = cartItem.itemsCounter;
  return (
    <>
      <HeaderBasket pageAddress={"تکمیل سفارش"} />
      <Box sx={{ bgcolor: "rgb(242, 247, 247)",pb:"5rem",height:"100%" }}>
        <Grid container m='auto' maxWidth='768px'>
          <Box alignItems='center' alignContent='center' width='100%'>
            {selectedItems === 0 && <OrderSection />}
            {selectedItems >= 1 && <OrederSectionItem />}
          </Box>
          <Transportations />
          <BillComponent />

        </Grid>
      </Box>
    </>
  );
};

export default Basket;
