/* eslint-disable react/prop-types */
import { Box, Button, Grid, Typography } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
import {
//   addItem,
// //   cart,
//   decrease,
//   increase,
//   removeItem,
} from "../pwa/features/cart/cartSlice";
// import { productQuantity } from "../helper/helper";
// import select from "../pwa/features/counter/counterSlice";

import washMashin from "../../assets/wash.c4124479.svg"
import toFarsiNumber, { persianPrice } from "../share/functions";

const OrderSectionItemContent = ({ data, title, image, cost, id, whichButton }) => {
//   const state = useSelector(cart);
//   const dispatch = useDispatch();

//   // bayad data khas behesh ersal beshe
//   const quantiy = productQuantity(state, id, data);

//   console.log(state);
//   console.log(whichButton);
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
        <Grid item xs={8} sm={8} md={8} lg={8} display={"flex"}>
          <Box>
            <img src={washMashin} style={{ maxWidth: "48px", maxHeight: "48px" }} />
          </Box>
          <Box display='flex' flexDirection={"column"} justifyContent='center'>
            <Typography variant='h6' fontSize='16px' fontFamily='Vazir-Bold'>
              {/* {title} */}
              خشکشویی + اتو
            </Typography>
            <Typography variant='h6' fontSize='16px' fontFamily='Vazir'>
              {/* {persianPrice(cost)} */}
              {persianPrice(220000)}

               تومان
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          display='flex'
          justifyContent='end'
          alignItems='center'
          textAlign="left"
    >
          {/* {quantiy == 0 ? ( */}
            <Button
            //   onClick={() => dispatch(addItem(data))}
              sx={{
                minWidth: "48px",
                height: "48px",
                bgcolor: "rgb(12, 174, 202)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                color: "white",
                "&:hover": {
                  bgcolor: "rgb(12, 174, 202)",
                },
              }}>
              +
            </Button>
          {/* ) : ( */}
            {/* <Button
            //   onClick={() => dispatch(increase(data))}
              sx={{
                minWidth: "48px",
                height: "48px",
                bgcolor: "rgb(12, 174, 202)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                color: "white",
                "&:hover": {
                  bgcolor: "rgb(12, 174, 202)",
                },
              }}>
              +
            </Button> */}
          {/* )} */}

          <span
            style={{
              fontFamily: "Vazir-Bold",
              fontSize: "16px",
              fontWeight: "bold",
              margin: "8px",
            }}>
            {/* {toFarsiNumber(quantiy)} */}
            {toFarsiNumber(10)}
          </span>

          {/* {quantiy > 1 ? ( */}
            <Button
            //   onClick={() => dispatch(decrease(data))}
              sx={{
                minWidth: "48px",
                height: "48px",
                borderRadius: "50%",
                alignItems: "center",
                color: "white",

                // bgcolor: quantiy >= 1 ? "rgb(12, 174, 202)" : "white",
                bgcolor:  "rgb(12, 174, 202)" ,

                ml: "2rem",
                fontSize: "14px",
                "&:hover": {
                  bgcolor: "rgb(12, 174, 202)",
                },
              }}>
              -
            </Button>
          {/* ) : ( */}
            {/* <Button
            //   onClick={() => dispatch(removeItem(data))}
              sx={{
                minWidth: "48px",
                height: "48px",
                // bgcolor: quantiy >= 1 ? "rgb(12, 174, 202)" : "white",
                borderRadius: "50%",
                alignItems: "center",
                // color: quantiy >= 1 ? "white" : "black",
                ml: "2rem",
                fontSize: "14px",

                "&:hover": {
                  bgcolor: "rgb(12, 174, 202)",
                },
              }}>
              -
            </Button> */}
          {/* )} */}
        </Grid>
      </Grid>
    </>
  );
};

export default OrderSectionItemContent;
