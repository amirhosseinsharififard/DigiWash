/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Box, Container, Grid} from "@mui/material";
import AddressBodyChildren from "../address/AddressBodyChildren";
import MapComponent from "./MapComponent";
import {useEffect, useState} from "react";
import { fetchAddresses } from "../../API/requests";

// const dataAddress = [{namePlace: "خانه", typeAddress: "اتشنانی و..."}];

const ProfileBody = ({result, setGetPostiton,handleButtonClick,dataCompletedForSend}) => {
  const [indexData, setIndexData] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAddresses();
        // console.log("Fetched Data:", data); // اضافه کردن این خط
        setIndexData(data.message);
      } catch {
        setError("error fetching data");
        // console.log(error);
      }
    };
    fetchData();
  }, [dataCompletedForSend]);
  console.log(dataCompletedForSend)
  // console.log(indexData);
  return (
    <>
      {!result && (
        <Container>
          <Grid
            container
            sx={{
              bgcolor: "white",
              display: "flex",
              alignContent: "space-between",
              justifyContent: "space-between",
              p: "0rem 1.5rem .7rem 1.5rem",
              m: "0 auto 5rem",
              maxWidth: "768px",
            }}>
            {indexData ?
           
               indexData.map((item, i) => (
                <AddressBodyChildren
                  key={item.id}
                  id={item.id}
                  name={item.name }
                  addressDriver={item.address}
                />
              )) 
              : console.log(error)}
          </Grid>
        </Container>
      )}
      {result && <MapComponent setGetPostiton={setGetPostiton} />}
    </>
  );
};

export default ProfileBody;
