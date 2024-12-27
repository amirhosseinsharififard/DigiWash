/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Box, Button, Grid, Typography} from "@mui/material";
import toFarsiNumber, {persianPrice} from "../../utils/functions";
import {useEffect, useState} from "react";
import {
  fetchAddToOpenOrder,
  fetchOpenOrder,
  fetchRemoveToOpenOrder,
} from "../../API/requests";
import {productQuantity} from "../../utils/helper";
import { checkLocalStorageUserData } from "../../hooks/useLocalStorage";

const IncreaseItem = ({
  data,
  title,
  image,
  cost,
  id,
  service_list,
  setReloadKey,
  reloadKey,
  setIsPhoneRegisterModalOpen,
  toggleHandler
}) => {
  // هر بار که reloadKey تغییر کند، این useEffect اجرا می‌شود
  useEffect(() => {}, [reloadKey]);
  const checkIsLogin=localStorage.getItem("userData") && checkLocalStorageUserData().is_online


  const findListDatas =
    service_list && service_list.length > 0
      ? service_list.reduce((acc, item) => {
          item.service_list.forEach((itemId) => {
            acc[itemId.service_id] = itemId.qty; // به ازای هر service_id مقدار qty را به شیء اضافه می‌کند
          });
          return acc;
        }, {}) // مقدار اولیه را به عنوان یک شیء خالی مشخص کنید
      : {};
  console.log(findListDatas && findListDatas);

  const buttonAddHandler = (id, condition) => {
    fetchAddToOpenOrder(id);
    setReloadKey((prev) => prev + 1);
    // console.log(id);
  };
  const buttonRemoveHandler = (id, condition) => {
    fetchRemoveToOpenOrder(id);
    setReloadKey((prev) => prev + 1);
    // console.log(id)
  };
  const registerHandler = () => {
    console.log(setIsPhoneRegisterModalOpen); // این خط را اضافه کنید
    toggleHandler(prev=>!prev)
    setIsPhoneRegisterModalOpen((prev) => !prev);
  };
  return (
    <>
      <Grid
        container
        display='flex'
        justifyContent={"space-between"}
        alignItems='center'
        alignContent={"center"}
        bgcolor='rgb(237, 252, 255)'
        m='.2rem auto'
        borderRadius={"16px"}
        height='80px'
        position='relative'
        p={1}>
        <Grid item xs={8} sm={8} md={8} lg={8} display={"flex"}>
          <Box ml={2}>
            <img src={image} style={{maxWidth: "48px", maxHeight: "48px",borderRadius:"16px"}} />
          </Box>
          <Box display='flex' flexDirection={"column"} justifyContent='center'>
            <Typography variant='h6' fontSize='16px'>
              {title}
              {/* {console.log(title)} */}
            </Typography>
            <Typography variant='h6' fontSize='16px' fontFamily='Vazir'>
              {toFarsiNumber(cost)} تومان
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          display='flex'
          justifyContent='end'
          alignItems='center'
          alignContent='center'
          left='0'
          position='absolute'
          sx={{textAlign: "left"}}>
          {
            <Button
              onClick={() =>checkIsLogin ? buttonAddHandler(id) :registerHandler()}
              sx={{
                minWidth: "48px",
                height: "48px",
                bgcolor: "rgba(12, 174, 202,.5)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                color: "white",
                "&:hover": {
                  bgcolor: "rgba(12, 174, 202,.5)",
                },
              }}>
              +
            </Button>
          }

          <span
            style={{
              fontFamily: "Vazir-Bold",
              fontSize: "16px",
              fontWeight: "bold",
              margin: "8px",
            }}>
            {/* {findListDatas 
              ? toFarsiNumber(findListDatas[id])
              : toFarsiNumber(0)} */}
            {/* {findListDatas &&
              (findListDatas.id == id
                ? toFarsiNumber(findListDatas.qty)
                : toFarsiNumber(0))} */}
                {!findListDatas && toFarsiNumber(0)}
                {findListDatas[id] ? findListDatas[id] : toFarsiNumber(0)}
          </span>
          {/* check shavad baraye fix data */}
          {0 > 1 ? (
            <Button
              // onClick={() =>checkIsLogin ? dispatch(decrease(data))}
              onClick={() =>checkIsLogin ? buttonRemoveHandler(id) : {registerHandler,toggleHandler}}
              sx={{
                minWidth: "48px",
                height: "48px",
                borderRadius: "50%",
                alignItems: "center",
                color: "white",
                // check shavad baraye fix data
                bgcolor: 0 >= 1 ? "rgba(12, 174, 202,.5)" : "white",

                ml: "2rem",
                fontSize: "14px",
                "&:hover": {
                  bgcolor: "rgba(12, 174, 202,.5)",
                  color:"white"
                },
              }}>
              -
            </Button>
          ) : (
            <Button
              // onClick={() =>checkIsLogin ? dispatch(removeItem(data))}
              onClick={() =>checkIsLogin ? buttonRemoveHandler(id): {registerHandler,toggleHandler}}
              sx={{
                minWidth: "48px",
                height: "48px",
                // check shavad baraye fix data
                bgcolor: 0 >= 1 ? "rgba(12, 174, 202,.5)" : "white",
                borderRadius: "50%",
                alignItems: "center",
                // check shavad baraye fix data
                color: 0 >= 1 ? "white" : "black",
                ml: "2rem",
                fontSize: "14px",

                "&:hover": {
                  bgcolor: "rgba(12, 174, 202,.5)",
                  color:"white"

                },
              }}>
              -
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default IncreaseItem;
