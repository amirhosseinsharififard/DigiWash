/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {Box, Grid, Typography, Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import {fetchAddAddress} from "../../API/requests";
// import {fetchOpenOrder} from "../API/requests";

const ModalForAddress = ({
  setAddressDriver,
  setNameAddress,
  modalForAddresstoggleHandler,
  dataCompletedForSend,
  handleButtonClick,
  setOpenModal,
}) => {
  const {nameAddress, addressDriver, getPosition} = dataCompletedForSend;

  const sendAddressToServer = async () => {
    if (
      !nameAddress ||
      !addressDriver ||
      !getPosition ||
      getPosition.length < 2
    ) {
      console.error("مقادیر ورودی معتبر نیستند");
      return; // از ادامه کار جلوگیری کنید
    }


    try {
      // console.log("Sending to server:", nameAddress, addressDriver, getPosition);
      await fetchAddAddress(
        nameAddress,
        addressDriver,
        getPosition[0].toFixed(4),
        getPosition[1].toFixed(4)
      );
      console.log("آدرس با موفقیت ارسال شد");
      handleButtonClick(false)
      setOpenModal(false)
    } catch (error) {
      console.error("خطا در ارسال آدرس:", error);
    }
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1000",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(15px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}>
      <Link
        onClick={modalForAddresstoggleHandler}
        style={{
          width: "100vw",
          height: "100vh",
          zIndex: 2,
          position: "absolute",
        }}
      />

      <Grid
        container
        sx={{
          backgroundColor: "#FFF",
          borderRadius: "16px 16px 0 0",
          m: "0 auto",
          maxWidth: "768px",
          p: "0.5rem 8px",
          zIndex: 3,
        }}>
        <Grid item xs={12}>
          <Typography
            variant='h5'
            fontWeight={"bold"}
            fontSize='16px'
            textAlign={"center"}
            fontFamily='Vazir'>
            افزودن آدرس منتخب
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          display={"flex"}
          flexDirection={"column"}
          p={"0 1rem"}>
          <TextField
            onChange={(e) => setNameAddress(e.target.value)}
            sx={{
              m: "1rem 0 0 0",
              borderRadius: "8px",
              "& .css-1whjz5e-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {borderColor: "none"},
            }}
            fullWidth
            placeholder='نام (مثال: خانه, محل کار و ...)'
          />
          <TextField
            onChange={(e) => setAddressDriver(e.target.value)}
            sx={{
              m: "1rem 0 0 0",
              borderRadius: "8px",
              "& .css-1whjz5e-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {borderColor: "none"},
            }}
            fullWidth
            placeholder='آدرس دقیق برای مسیر یابی راننده'
          />
          <Button
            variant='contained'
            onClick={() => sendAddressToServer()}
            sx={{
              bgcolor:
                dataCompletedForSend.addressDriver &&
                dataCompletedForSend.nameAddress
                  ? "rgb(0, 173, 159)"
                  : "rgb(204, 204, 204)",
              boxShadow: "none",
              mt: "1rem",
              borderRadius: "24px",
              height: "60px",
              "&:hover": {
                bgcolor:
                  dataCompletedForSend.addressDriver &&
                  dataCompletedForSend.nameAddress
                    ? "rgb(0, 173, 159)"
                    : "rgb(204, 204, 204)",
                boxShadow: "none",
              },
            }}>
            {" اضافه کنم >   "} افزودن آدرس
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ModalForAddress;
