/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Box, Button, Grid, Typography} from "@mui/material";
import toFarsiNumber, {persianPrice} from "./functions";
import {useState} from "react";
// import {useSelector, useDispatch} from "react-redux";
// import {
//   addItem,
//   cart,
//   decrease,
//   increase,
//   removeItem,
// } from "../pwa/features/cart/cartSlice";
// import {productQuantity} from "../helper/helper";
// import select from "../pwa/features/counter/counterSlice";

const IncreaseItem = ({data, title, image, cost, id, service_list}) => {
  const [quntity, setQuntity] = useState(null);

  // const findListDatas =service_list &&  service_list.map((item) => {
  //   // console.log(item);
  //   item.service_list.map(itemId=>{
  //     console.log(itemId  )
  //     return {itemId.service_id: itemId.qty}
  //     // itemId.id==id ? setQuntity(itemId.qty): 0
  //   })
  // });

  const findListDatas = service_list && service_list.reduce((acc, item) => {
    item.service_list.forEach(itemId => {
      acc[itemId.service_id] = itemId.qty; // به ازای هر service_id مقدار qty را به شیء اضافه می‌کند
    });
    return acc;
  }, {});
  
  console.log(findListDatas);
  
  // const state = useSelector(cart);
  // const dispatch = useDispatch();

  // bayad data khas behesh ersal beshe
  // const quantiy = productQuantity(state, id, data);

  // console.log(state);
  return (
    <>
      <Grid
        container
        display='flex'
        justifyContent={"space-between"}
        alignItems='center'
        alignContent={"center"}
        bgcolor='rgb(237, 252, 255)'
        m='.2rem auto'
        borderRadius={"16px"}
        height='80px'
        p={1}>
        <Grid item xs={8} sm={8} md={8} lg={8} display={"flex"}>
          <Box>
            {/* <img src={image} style={{ maxWidth: "48px", maxHeight: "48px" }} /> */}
          </Box>
          <Box display='flex' flexDirection={"column"} justifyContent='center'>
            <Typography variant='h6' fontSize='16px' fontFamily='Vazir-Bold'>
              {title}
            </Typography>
            <Typography variant='h6' fontSize='16px' fontFamily='Vazir'>
              {persianPrice(cost)} تومان
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
          justifyContent='center'
          alignItems='center'
          alignContent='center'
          sx={{textAlign: "right"}}>
          {0 == 0 ? (
            <Button
              // onClick={() => dispatch(addItem(data))}
              sx={{
                minWidth: "48px",
                height: "48px",
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
              // onClick={() => dispatch(increase(data))}
              sx={{
                minWidth: "48px",
                height: "48px",
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
            {findListDatas&& findListDatas[id] ? findListDatas[id]: 0}
            {/* {findListDatas &&
              (findListDatas.id == id ? toFarsiNumber(findListDatas.qty) : 0)} */}
          </span>
          {/* check shavad baraye fix data */}
          {0 > 1 ? (
            <Button
              // onClick={() => dispatch(decrease(data))}
              sx={{
                minWidth: "48px",
                height: "48px",
                borderRadius: "50%",
                alignItems: "center",
                color: "white",
                // check shavad baraye fix data
                bgcolor: 0 >= 1 ? "rgba(12, 174, 202,.5)" : "white",

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
              // onClick={() => dispatch(removeItem(data))}
              sx={{
                minWidth: "48px",
                height: "48px",
                // check shavad baraye fix data
                bgcolor: 0 >= 1 ? "rgba(12, 174, 202,.5)" : "white",
                borderRadius: "50%",
                alignItems: "center",
                // check shavad baraye fix data
                color: 0 >= 1 ? "white" : "black",
                ml: "2rem",
                fontSize: "14px",

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

export default IncreaseItem;
