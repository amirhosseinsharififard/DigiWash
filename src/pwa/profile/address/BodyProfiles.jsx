/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Box, Container, Grid} from "@mui/material";
import AddressBodyChildren from "./AddressBodyChildren";
import MapComponent from "../../../components/MapComponent";
import {useEffect, useState} from "react";
import {fetchAddAddress} from "../../../API/requests";

const dataAddress = [{namePlace: "خانه", typeAddress: "اتشنانی و..."}];

const ProfileBody = ({result, setGetPostiton}) => {
  const [indexData, setIndexData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAddAddress();
        // console.log("Fetched Data:", data); // اضافه کردن این خط
        setIndexData(data);
      } catch {
        setError("error fetching data");
        // console.log(error);
      }
    };
    fetchData();
  }, []);
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
            {/* {indexData ?
              indexData.map((item, i) => (
                <AddressBodyChildren
                  key={item.id}
                  id={item.id}
                  name={item.namePlace}
                  addressDriver={item.address}
                />
              )): console.log("yechi kharabe")} */}
          </Grid>
        </Container>
      )}
      {result && <MapComponent setGetPostiton={setGetPostiton} />}
    </>
  );
};

export default ProfileBody;
