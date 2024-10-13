/* eslint-disable react/prop-types */
import { Box, Button, Grid, Typography } from "@mui/material";
import { addItem, cart, decrease, increase, removeItem } from "../pwa/features/cart/cartSlice";
// import select from "../pwa/features/counter/counterSlice";

import washMashin from "../../assets/wash.c4124479.svg"
import toFarsiNumber, { persianPrice } from "../share/functions";
import { useDispatch, useSelector } from "react-redux";
import { productQuantity } from "../helper/helper";

// eslint-disable-next-line no-unused-vars
const OrderSectionItemContent = ({ data, title, image, cost, id, whichButton,quantity ,reduceCostEachMap}) => {
  const state = useSelector(cart);
  const dispatch = useDispatch();

//   // bayad data khas behesh ersal beshe
  const quantiy = productQuantity(state, id, data);

  // console.log("data");
  // console.log(data);
  // console.log("state");
  // console.log(state);
  // console.log(reduceCostEachMap  )
  return (
    <>
      <Grid
        container
        display='flex'
        justifyContent={"space-between"}
        alignItems='center'
        alignContent={"center"}
        m='.2rem auto'
        borderRadius={"16px"}
        height='80px'
        p={1}
        bgcolor="white" >
        <Grid item xs={7} sm={7} md={7} lg={7} display={"flex"}  alignItems={"center"}>
          <Box>
            {/* <img src={washMashin} style={{ maxWidth: "32px", maxHeight: "32px",marginLeft:"1rem" }} /> */}
          </Box>
          <Box display='flex' flexDirection={"column"} justifyContent='center'>
            <Typography variant='h6' fontSize='14px' fontFamily='Vazir-Bold'>
              {title}
   
            </Typography>
            <Typography variant='h6' fontSize='14px' fontFamily='Vazir'>
              {persianPrice(cost)}
           

               تومان
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={5}
          sm={5}
          md={5}
          lg={5}
          display='flex'
          justifyContent='flex-end'
          alignItems='center'
          textAlign="left"
    >
          {quantiy == 0 ? (
            <Button
              onClick={() => dispatch(addItem(data))}
              sx={{
                minWidth: "32px",
                height: "32px",
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
          ) : (
            <Button
              onClick={() => dispatch(increase(data))}
              sx={{
                minWidth: "32px",
                height: "32px",
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
          )}

          <span
            style={{
              fontFamily: "Vazir-Bold",
              fontSize: "16px",
              fontWeight: "bold",
              margin: "8px",
            }}>
            {toFarsiNumber(quantity)}
            {/* {toFarsiNumber(10)} */}
          </span>

          {quantiy > 1 ? (
            <Button
              onClick={() => dispatch(decrease(data))}
              sx={{
                minWidth: "32px",
                height: "32px",
                borderRadius: "50%",
                alignItems: "center",
                color: "white",

                bgcolor: quantiy >= 1 ? "rgba(12, 174, 202,.5)" : "white",
                // bgcolor:  "rgba(12, 174, 202,.5)" ,

                ml: "2rem",
                fontSize: "14px",
                "&:hover": {
                  bgcolor: "rgba(12, 174, 202,.5)",
                },
              }}>
              -
            </Button>
          ) : (
            <Button
              onClick={() => dispatch(removeItem(data))}
              sx={{
                minWidth: "32px",
                height: "32px",
                bgcolor:  "rgba(12, 174, 202,.5)" ,
                borderRadius: "50%",
                alignItems: "center",
                color:"white" ,
                ml: "2rem",
                fontSize: "2rem",

                "&:hover": {
                  bgcolor: "rgba(12, 174, 202,.5)",
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

export default OrderSectionItemContent;
