/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {Box, Grid, Typography, Button, Checkbox} from "@mui/material";
import {Link} from "react-router-dom";
import ModalAddressContent from "./ModalAddressContent";
import {useEffect, useState} from "react";
import {fetchModalTransfer} from "../API/requests";

const ModalBasketTransfer = ({
  locations,
  setOpenModalBasketTransfer,
  selectedData,
  setSelectedData,
  selectedValue,
  setSelectedValue,
  responseAddress,setResponseAddress
}) => {
  const handleRadioChange = (name) => {
    setSelectedValue(name); // Update the selected radio name
  };
  const getNow = new Date().toLocaleString("fa-IR");

const handleFetchModalTransfer=()=>{
  fetchModalTransfer(
    selectedData.id,
    getNow,
    getNow,
    Math.random() * 500
  ).then(res=> setResponseAddress(res))
}
useEffect(()=>{

},[responseAddress])
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "4",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(15px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}>
      <Link
        style={{
          width: "100vw",
          height: "100vh",
          zIndex: 2,
          position: "absolute",
        }}
        onClick={() => setOpenModalBasketTransfer(false)}
      />

      <Grid
        container
        sx={{
          backgroundColor: "white",

          zIndex: 3,
          borderRadius: "16px 16px 0 0",
          m: "0 auto",
          maxWidth: "768px",
          maxHeight: "70vh",
          overflowY: "scroll",
        }}>
        <Grid
          container
          sx={{
            borderRadius: "16px",
            bgcolor: "rgb(242, 247, 247)",
            m: "0 auto",
            p: "2rem 1rem",
          }}>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={".5rem"}>
            <Typography
              variant='h5'
              fontWeight={"bold"}
              fontSize='16px'
              mr='8px'
              mb='16px'
              color={"rgb(0, 77, 100)"}
              fontFamily='Vazir'>
              انتخاب آدرس و زمان جمع‌آوری
            </Typography>
            <Typography
              sx={{pl: "8px", color: "rgb(0, 77, 100)", fontSize: "16px"}}>
              <Checkbox />
              تحویل فوری
            </Typography>
          </Grid>

          {true &&
            locations &&
            locations.map((item) => (
              <ModalAddressContent
                key={item.id}
                address={item.address}
                name={item.name}
                in_range={item.in_range}
                id={item.id}
                handleRadioChange={handleRadioChange}
                setSelectedData={setSelectedData}
                selectedValue={selectedValue}
              />
            ))}
          <Grid item xs={12} textAlign='left'>
            <Button
              variant='contained'
              sx={{
                bgcolor: "white",
                color: "rgb(12, 174, 202)",
                fontSize: "900",
                borderRadius: "16px",
                boxShadow: "none",
                ml: ".5rem",
                "&:hover": {
                  bgcolor: "white",
                  color: "rgb(12, 174, 202)",
                  boxShadow: "none",
                },
              }}>
              +اضافه کردن آدرس جدید
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} m={"2rem 1rem"} textAlign='center'>
          <Typography
            variant='subtitle1'
            color={"rgb(116, 116, 116)"}
            fontWeight={"bold"}>
            آدرس انتخاب شده تحت پوشش دیجی‌واش نیست.
          </Typography>
        </Grid>
        <Grid
          container
          sx={{
            borderTop: "1px solid rgb(204, 204, 204)",
            p: "1rem 0",
            borderRadius: "16px 16px 0 0",
          }}>
          <Grid item xs={12} m={"0 1rem"}>
            <Button
              variant='contained'
              sx={{
                bgcolor: "white",
                color: "rgb(12, 174, 202)",
                fontSize: "900",
                borderRadius: "16px",
                boxShadow: "none",
                border: "1px solid rgb(204, 204, 204)",
                "&:hover": {
                  bgcolor: "white",
                  color: "rgb(12, 174, 202)",
                  boxShadow: "none",
                },
              }}
              fullWidth
              disabled={selectedData && !selectedData.in_range}
              onClick={
                handleFetchModalTransfer
              }>
              تایید
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ModalBasketTransfer;
