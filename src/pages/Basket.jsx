/* eslint-disable no-unused-vars */
import {useEffect, useState} from "react";
import {Box, Button, Grid} from "@mui/material";
import HeaderBasket from "../components/layout/HeaderBasket";
import OrderSection from "../components/common/OrderSection";
import OrederSectionItem from "../components/common/OrederSectionItem";
import Transportations from "../components/common/Transportations";
import BillComponent from "../components/common/BillComponent";
import {fetchModalTransfer, fetchOpenOrder} from "../API/requests";
import {checkLocalStorageUserData} from "../hooks/useLocalStorage";
import ModalBasketTransfer from "../components/common/ModalBasketTransfer";

import PhoneRegisterModal from '../components/common/PhoneRegisterModal'
// i didnt use
// import {useSelector} from "react-redux";
// import {cart} from "../pwa/features/cart/cartSlice";

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


  const [isPhoneRegisterModalOpen,setIsPhoneRegisterModalOpen]=useState(false)
  console.log(selectedData);
  console.log(selectedValue);

  const getNow = new Date().toLocaleString("fa-IR");

  const handleFetchModalTransfer = () => {
    fetchModalTransfer(
      selectedData.id,
      getNow,
      getNow,
      Math.random() * 500
    ).then((res) => setResponseAddress(res));
  };

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
          {/* {console.log(locations)} */}
          <Transportations
          setIsPhoneRegisterModalOpen={setIsPhoneRegisterModalOpen}
            locations={locations}
            setOpenModalBasketTransfer={setOpenModalBasketTransfer}
            selectedData={selectedData}
          />
          <BillComponent
            splitReducePrices={splitReducePrices}
            tax_percentage={tax_percentage}
            deliveriPrice={selectedData ? selectedData.price : 0}
          />
        </Grid>
        {
          /* selectedData*/
          selectedData && (
            <>
              <Grid
                container
                sx={{
                  m: "auto",
                  border: "1px solid rgb(204, 204, 204)",
                  borderRadius: "8px 8px 0 0",
                  maxWidth: "768px",
                  paddingTop: "1rem",
                  bgcolor: "white",
                  position: "fixed",
                  left: 0,
                  bottom: "0%",
                  right: 0,
                  zIndex: 4,
                }}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  alignContent='center'>
                  <Button
                    onClick={handleFetchModalTransfer}
                    sx={{
                      mb: "3rem",
                      bgcolor: "rgb(12, 174, 202)",
                      m: "0 1rem",
                      borderRadius: "16px",
                      color: "white",
                      ":hover": {
                        color: "white",
                        bgcolor: "rgb(12, 174, 202)",
                      },
                    }}
                    fullWidth>
                    ثبت سفارش
                  </Button>
                </Grid>
              </Grid>
            </>
          )
        }
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

      {isPhoneRegisterModalOpen && (
        <PhoneRegisterModal
          isPhoneRegisterModalOpen={isPhoneRegisterModalOpen}
          setIsPhoneRegisterModalOpen={setIsPhoneRegisterModalOpen}
        />
      )}
    </>
  );
};

export default Basket;
