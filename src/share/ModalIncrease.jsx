/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";
import IncreaseItem from "./IncreaseItemModal";
import CategoryModal from "./CategoryModal";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { product } from "../pwa/features/products/productsSlice";

const ModalIncrease = ({ toggleHandler, checkIndex ,data}) => {
  // const products = useSelector(product);

  // const buttons = products[checkIndex].useThis;

  // const [buttonActive, setButtonActive] = useState(0);

  // const useProducts = products[checkIndex].useThis[buttonActive].categoryDo;
  // const buttonsActiveHandler = (id) => {
  //   setButtonActive(id);
  // };
console.log(data)
  return (
    <>
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
        }}>
        <Link
          onClick={() => toggleHandler()}
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: 2,
            position: "absolute",
          }}
        />
        <Box maxWidth='768px' m='0 auto' zIndex={3}>
          <Grid
            container

            sx={{
              backgroundColor: "#FFF",
              borderRadius: "16px 16px 0 0",
              p: "2rem 8px",
            }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography
                variant='h5'
                fontWeight={"bold"}
                fontSize='16px'
                mr='8px'
                mb='16px'
                fontFamily='Vazir'>
               {data.name}
              </Typography>
            </Grid>
            
            {/* BUTTON FOR CHOOSE CATEGORY */}
            {/* {buttons.length == 1 ? (
              ""
            ) : (
              <Grid item xs={12} sm={12} md={12} lg={12} m=' .5rem 8px'>
                <CategoryModal
                gridItem={buttons.length}
                  buttonsActiveHandler={buttonsActiveHandler}
                  buttonActive={buttonActive}
                  buttons={buttons}
                />
              </Grid>
            )} */}

             { console.log(data.services["ساده"])}
            {data.services["ساده"].map((item, id) => (
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
                  // image={item.subImage}
                  title={item.serviceType}
                  cost={item.value}
                  // id={item.id}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ModalIncrease;
