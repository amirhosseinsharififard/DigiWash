import Offday from "./Offday";
import OrderPhone from "./OrderPhone";
import Services from "./Services";
import ServicesPopular from "./ServicesPopular";
import ServicesCategory from "./ServicesCategory";
import { Box } from "@mui/material";
import HeaderPwa from "./HeaderPwa";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, BEARER_TOKEN } from "../../API/requests";
// import HeaderPwa from "./HeaderPwa";
const HomePage = () => {
  const [indexData, setIndexData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setIndexData(
        await axios
          .get(`${BASE_URL}api/index`, {
            headers: {Authorization: "Bearer " + BEARER_TOKEN},
          })
          .then((res) => {
            // console.log(res.data);
            return res.data;
          })
      );
    };

    fetchData();
  }, []);
  return (
    <>
      <HeaderPwa />
      <Box sx={{maxWidth:"768px" ,m:"0rem auto 5rem"}}>
        {/* <Header /> */}
        <Offday />
        <OrderPhone />
        <Services indexData={indexData} />
        <ServicesPopular indexData={indexData}/>
        <ServicesCategory indexData={indexData}/>
        </Box>
    </>
  );
};

export default HomePage;
