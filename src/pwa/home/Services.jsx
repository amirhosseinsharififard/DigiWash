import {Box, Grid, Typography} from "@mui/material";
// import { Link } from "react-router-dom";

// svg
// import servicesSvg from "../../../assets/services.svg";
import {BASE_URL, BEARER_TOKEN} from "../../API/requests";
// Data
// const DataService = [
//   {serviceName: "اتو", serviceImg: servicesSvg},
//   {serviceName: "شستشو", serviceImg: servicesSvg},
//   {serviceName: "لکه بری", serviceImg: servicesSvg},
//   {serviceName: "خیاطی و تعمیرات", serviceImg: servicesSvg},
// ];
import {useEffect, useState} from "react";
import axios from "axios";

const Services = () => {
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
      <Box maxWidth='768px'>
        <Typography
          variant='h5'
          component='p'
          fontSize='18px'
          fontFamily='Vazir'
          fontWeight='bold'
          mr='1rem'>
          خدمات دیجی واش
        </Typography>
      </Box>
      <Grid container maxWidth='420px' alignContent='center' margin='0 auto'>
        {indexData &&
          indexData.data.service_types.map((item) => (
            <Grid
              item
              lx={3}
              lg={3}
              md={3}
              sm={3}
              xs={3}
              key={item.id}
              textAlign='center'
              sx={{
                width: "auto",
              }}>
              {/* check shavad */}
              <img
                src={item.icon ? item.icon : "nadarad"}
                style={{margin: "0 auto"}}
              />

              <Typography
                variant='h6'
                color='black'
                sx={{fontFamily: "Vazir", fontSize: "12px"}}>
                {item.name}
              </Typography>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Services;
