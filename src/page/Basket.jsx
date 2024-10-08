import { Box, Grid, } from "@mui/material";
import HeaderBasket from "../components/HeaderBasket";
import OrderSection from "../components/OrderSection";
import OrederSectionItem from "../components/OrederSectionItem";
import Transportations from "../components/Transportations";
import { useSelector } from "react-redux";
import { cart } from "../pwa/features/cart/cartSlice";
import BillComponent from "../components/BillComponent";
import { useEffect, useState } from "react";
import { fetchOpenOrder } from "../API/requests";

const Basket = () => {
  // const [order,setOrder]=useState()
  // const [addToOpenOrder,setAddToOpenOrder]=useState()
  // const [removeToOpenOrder,setRemoveToOpenOrder]=useState()
  const [openOrders,setOpenOrders]=useState()
  const [error, setError] = useState(null); // برای مدیریت خطا

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const data = await fetchOpenOrder();
        setOpenOrders(data)
        
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    fetchData(); // فراخوانی تابع غیرهمزمان
  },[])
  // const cartItem = useSelector(cart);
  const selectedItems = openOrders? openOrders.data.length :0
  return (
    <>
      <HeaderBasket pageAddress={"تکمیل سفارش"} />
      <Box sx={{ bgcolor: "rgb(242, 247, 247)",pb:"5rem",height:"100%" }}>
        <Grid container m='auto' maxWidth='768px'>
          <Box alignItems='center' alignContent='center' width='100%'>
            {selectedItems === 0 && <OrderSection />}
            {selectedItems >= 1 && <OrederSectionItem orders={openOrders ? openOrders.data:null }/>}
          </Box>
          <Transportations />
          <BillComponent />

        </Grid>
      </Box>
    </>
  );
};

export default Basket;
