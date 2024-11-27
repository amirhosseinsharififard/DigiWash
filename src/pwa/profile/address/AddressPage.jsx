/* eslint-disable no-unused-vars */
import { Box, Button, Grid } from "@mui/material";
import useButtonClick from "../../../helper/customHooks";
import HeaderProfileLinks from "../../../share/HeaderProfileLinks";
import BodyProfiles from "./BodyProfiles";
import { useState, useEffect } from "react";
import ModalForAddress from "./ModalForAddress";

const AddressPage = () => {
  const [nameAddress, setNameAddress] = useState("");
  const [addressDriver, setAddressDriver] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [getPosition, setGetPostiton] = useState([]);
  const { result, handleButtonClick } = useButtonClick();

  const dataCompletedForSend = {
    getPosition,
    addressDriver,
    nameAddress,
  };
useEffect(()=>{},[result,openModal,dataCompletedForSend])
  const modalForAddresstoggleHandler = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <>
      <HeaderProfileLinks />
      <BodyProfiles
        pageAddress='آدرس ها'
        result={result}
        nameAddress={nameAddress}
        addressDriver={addressDriver}
        modalForAddresstoggleHandler={modalForAddresstoggleHandler}
        setGetPostiton={setGetPostiton}
        dataCompletedForSend={dataCompletedForSend}
      />
      {!result && (
        <Button
          sx={{
            m: "auto",
            border: "1px solid rgb(12, 174, 202)",
            borderRadius: "16px ",
            maxWidth: "768px",
            p: "1rem",
            color: "rgb(12, 174, 202)",
            bgcolor: "white",
            position: "fixed",
            left: 0,
            bottom: "2%",
            right: 0,
            zIndex: 3,
            ":hover": {
              bgcolor: "white",
              color: "rgb(12, 174, 202)",
            },
          }}
          onClick={handleButtonClick}>
          + اضافه کردن آدرس جدید
        </Button>
      )}
      {result && (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} textAlign={"center"}>
            <Button
              variant='contained'
              onClick={modalForAddresstoggleHandler}
              sx={{
                bgcolor: "rgb(0, 173, 159)",
                color: "white",
                position: "fixed",
                bottom: "2%",
                m: "auto",
                zIndex: 500,
                boxShadow: "none",
                ":hover": {
                  bgcolor: "rgb(0, 173, 159)",
                  color: "white",
                  boxShadow: "none",
                },
              }}>
              ثبت آدرس {"> بذارم"}
            </Button>
          </Grid>
        </Grid>
      )}
      {openModal && (
        <ModalForAddress
          setNameAddress={setNameAddress}
          setAddressDriver={setAddressDriver}
          modalForAddresstoggleHandler={modalForAddresstoggleHandler}
          dataCompletedForSend={dataCompletedForSend}
          handleButtonClick={handleButtonClick}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default AddressPage;