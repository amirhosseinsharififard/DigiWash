import {Box, Grid} from "@mui/material";
import HeaderBasket from "../components/HeaderBasket";
import OrderSection from "../components/OrderSection";
import OrederSectionItem from "../components/OrederSectionItem";
import Transportations from "../components/Transportations";
import {useSelector} from "react-redux";
import {cart} from "../pwa/features/cart/cartSlice";
import BillComponent from "../components/BillComponent";
import {useEffect, useState} from "react";
import {fetchOpenOrder} from "../API/requests";

const Basket = () => {
  const [openOrders, setOpenOrders] = useState();
  const [idexData, setIndexData] = useState();
  const [reloadKey, setReloadKey] = useState(0);

  const [error, setError] = useState(null); // برای مدیریت خطا
  const selectedItems = openOrders ? openOrders.data.length : 0;

  const [collectAllProductLength, setCollectAllProductLength] = useState(); // for calculate all amounts of the products in orderSectionItems

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOpenOrder();
        setOpenOrders(data);
        setIndexData(data.data)
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    fetchData(); // فراخوانی تابع غیرهمزمان
  }, [reloadKey]);
console.log(idexData)
  // console.log(collectAllProductLength.length)
  return (
    <>
      <HeaderBasket pageAddress={"تکمیل سفارش"} collectAllProductLength={collectAllProductLength?collectAllProductLength.length:0}/>
      {/* <HeaderBasket pageAddress={"تکمیل سفارش"} /> */}
      <Box sx={{bgcolor: "rgb(242, 247, 247)", pb: "5rem", height: "100%"}}>
        <Grid container m='auto' maxWidth='768px'>
          <Box alignItems='center' alignContent='center' width='100%'>
            {selectedItems === 0 && <OrderSection />}
            {selectedItems >= 1 && (
              <OrederSectionItem
                orders={openOrders ? openOrders.data : null}
                setCollectAllProductLength={setCollectAllProductLength}
                service_list={idexData}
                setReloadKey={setReloadKey}
              />
            )}
          </Box>
          <Transportations />
          <BillComponent />
        </Grid>
      </Box>
    </>
  );
};

export default Basket;
