/* eslint-disable no-unused-vars */
import {Box, Grid} from "@mui/material";
import HeaderBasket from "../components/HeaderBasket";
import OrderSection from "../components/OrderSection";
import OrederSectionItem from "../components/OrederSectionItem";
import Transportations from "../components/Transportations";
// import {useSelector} from "react-redux";
// import {cart} from "../pwa/features/cart/cartSlice";
import BillComponent from "../components/BillComponent";
import {useEffect, useState} from "react";
import {fetchOpenOrder} from "../API/requests";
import {checkLocalStorageUserData} from "../hooks/useLocalStorage";
import ModalBasketTransfer from "../components/ModalBasketTransfer";

const Basket = () => {
  const [openOrders, setOpenOrders] = useState();
  const [idexData, setIndexData] = useState();
  const [tax_percentage, setTax_percentage] = useState();
  const [locations, setLocations] = useState();
  const [reloadKey, setReloadKey] = useState(0);
  const [openModalBasketTransfer, setOpenModalBasketTransfer] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const [selectedValue, setSelectedValue] = useState(""); // Initialize with an empty string
  const [responseAddress, setResponseAddress] = useState();

  const [error, setError] = useState(null); // برای مدیریت خطا
  const selectedItems = openOrders ? openOrders.data.services.length : 0;
  // console.log(selectedItems)
  const [collectAllProductLength, setCollectAllProductLength] = useState(); // for calculate all amounts of the products in orderSectionItems

  // First get products here
  const [sumPriceProducts, setSumPriceProducts] = useState();
  // second splited prices here
  const spplitValues =
    sumPriceProducts && Array.from(sumPriceProducts.values());
  // Third sum prices here
  const splitReducePrices =
    spplitValues &&
    spplitValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  // console.log( splitReducePrices);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOpenOrder();
        setOpenOrders(data);
        setIndexData(data);
        setTax_percentage(data.data.tax_percentage);
        setLocations(data.data.locations);
        console.log(data.data.locations);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    checkLocalStorageUserData() && fetchData(); // فراخوانی تابع غیرهمزمان
  }, [reloadKey]);
  // console.log(idexData&&idexData.data)
  // console.log(idexData&&openOrders.data.services)
  // console.log(idexData&&openOrders)
  // console.log(selectedData)
  console.log(selectedValue && selectedValue);
  return (
    <>
      <HeaderBasket
        pageAddress={"تکمیل سفارش"}
        collectAllProductLength={
          collectAllProductLength ? collectAllProductLength.length : 0
        }
      />
      {/* <HeaderBasket pageAddress={"تکمیل سفارش"} /> */}
      <Box sx={{bgcolor: "rgb(242, 247, 247)", pb: "5rem", height: "100%"}}>
        <Grid container m='auto' maxWidth='768px'>
          <Box alignItems='center' alignContent='center' width='100%'>
            {selectedItems === 0 && <OrderSection />}
            {selectedItems >= 1 && (
              <OrederSectionItem
                orders={openOrders ? openOrders.data.services : null}
                setCollectAllProductLength={setCollectAllProductLength}
                service_list={idexData && idexData.data.services}
                setReloadKey={setReloadKey}
                setSumPriceProducts={setSumPriceProducts}
              />
            )}
          </Box>
          <Transportations
            locations={locations}
            setOpenModalBasketTransfer={setOpenModalBasketTransfer}
            responseAddress={responseAddress}
          />
          <BillComponent
            splitReducePrices={splitReducePrices}
            tax_percentage={tax_percentage}
          />
        </Grid>
      </Box>
      {openModalBasketTransfer && (
        <ModalBasketTransfer
          locations={locations}
          setOpenModalBasketTransfer={setOpenModalBasketTransfer}
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          setSelectedValue={setSelectedValue}
          selectedValue={selectedValue}
          setResponseAddress={setResponseAddress}
          responseAddress={responseAddress}
        />
      )}
    </>
  );
};

export default Basket;
