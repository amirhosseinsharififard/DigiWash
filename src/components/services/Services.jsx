import {Box, Grid, Typography} from "@mui/material";
// import { Link } from "react-router-dom";

// svg
// import servicesSvg from "../../../assets/services.svg";
// import {BASE_URL, BEARER_TOKEN} from "../../API/requests";
// Data
// const DataService = [
//   {serviceName: "اتو", serviceImg: servicesSvg},
//   {serviceName: "شستشو", serviceImg: servicesSvg},
//   {serviceName: "لکه بری", serviceImg: servicesSvg},
//   {serviceName: "خیاطی و تعمیرات", serviceImg: servicesSvg},
// ];
// import {useEffect, useState} from "react";
// import axios from "axios";

// eslint-disable-next-line react/prop-types
const Services = ({indexData}) => {
  console.log(indexData)
  // console.log(indexData && indexData);
  return (
    <>
      <Box maxWidth='768px' p='0 1rem'>
        <Typography
          variant='h5'
          component='p'
          fontSize='18px'
          fontFamily='Vazir'
          fontWeight='bold'
          pb='2rem'
          >
          خدمات دیجی واش
        </Typography>
      </Box>
      <Grid container sx={{display:"flex",justifyContent:"space-evenly"}}  margin='0 auto'>
        {indexData &&
          // eslint-disable-next-line react/prop-types
          indexData.map((item) => (
            <Grid
              item
           
              key={item.id}
              textAlign='center'
              sx={{}}>
              <img
                src={item.image ? item.image : "nadarad"}
                style={{height: "32px", width: "32px"}}
              />

              <Typography
                variant='h6'
                color='black'
                sx={{fontFamily: "Vazir", fontSize: "16px"}}>
                {item.name}
              </Typography>
            </Grid>
          ))}
          {/* test */}
          {/* {
            <Grid
              item
           
              key={indexData[0].id}
              textAlign='center'
              sx={{}}>
              <img
                src={indexData[0].image ? indexData[0].image : "nadarad"}
                style={{height: "32px", width: "32px"}}
              />

              <Typography
                variant='h6'
                color='black'
                sx={{fontFamily: "Vazir", fontSize: "16px"}}>
                {indexData[0].name}
              </Typography>
            </Grid>
          } */}
      </Grid>
    </>
  );
};

export default Services;
