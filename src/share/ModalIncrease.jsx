/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import IncreaseItem from "./IncreaseItemModal";
import { fetchOpenOrder } from "../API/requests";

const ModalIncrease = ({ toggleHandler, data,nameData}) => {
  const [showMore, setShowMore] = useState(false);
const dataList= data
const [indexData, setIndexData] = useState(null); // مقدار اولیه null به جای undefined
const [error, setError] = useState(null); // برای مدیریت خطا

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  //   {
  //   console.log(Array.isArray(data.services) ? false : data.services); // helper to find is array or Object
  // }
useEffect(()=>{

    const fetchData = async () => {
      try {
        const data = await fetchOpenOrder();
        setIndexData(data.data);


      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };
 

    fetchData(); // فراخوانی تابع غیرهمزمان


},[indexData])
// console.log(indexData && indexData)
  
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
      }}
    >
      <Link
        onClick={toggleHandler}
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
          p: "2rem 8px",
          zIndex: 3,
        }}
      >
        <Grid item xs={12}>
          <Typography variant='h5' fontWeight={"bold"} fontSize='16px' mr='8px' mb='16px' fontFamily='Vazir'>
            {nameData}
          </Typography>
        </Grid>

     
         {dataList.map((item, id) => (

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                key={id}
                p=' .5rem 8px '
                width='100%'>
                <IncreaseItem
                  data={item}
                  image={item.serviceTypeImage}
                  service_list={indexData}
                  title={item.serviceType}
                  cost={item.value}
                  id={item.id}
                />
          {/* {console.log(item.id)} */}
              </Grid>
            ))} 
  

     
      </Grid>
    </Box>
  );
};

export default ModalIncrease;
