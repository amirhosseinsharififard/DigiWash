/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";
import IncreaseItem from "./IncreaseItemModal";
import CategoryModal from "./CategoryModal";
import { Link } from "react-router-dom";
import { useState } from "react";

const ModalIncrease = ({ toggleHandler, dataModal, checkIndex }) => {
  const buttons = dataModal[checkIndex].useThis;
  const [buttonActive, setButtonActive] = useState(0);
  const useDataModal = dataModal[checkIndex].useThis[buttonActive].categoryDo;
  const buttonsActiveHandler = (id) => {
    setButtonActive(id);
  };

  console.log(useDataModal);
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
          justifyContent: "flex-end"
        }}>
        <Link
          onClick={() => toggleHandler()}
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: 2,
            position: "absolute"
          }}
        />
        <Box maxWidth='768px' m='0 auto' zIndex={3}>
          <Grid
            container
            sx={{
              height: "450px",

              display: "flex",
              backgroundColor: "#fff",
              borderRadius: "16px 16px 0 0",
              p: ".5rem 0"
            }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography
                variant='h5'
                fontWeight={"bold"}
                fontSize='16px'
                fontFamily='Vazir-Bold'
                p=' 1rem 3rem 0 0'>
                کت و شلوار
              </Typography>
            </Grid>
            {/* BUTTON FOR CHOOSE CATEGORY */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <CategoryModal
                buttonsActiveHandler={buttonsActiveHandler}
                buttonActive={buttonActive}
                buttons={buttons}
              />
            </Grid>

            {useDataModal.map((item, id) => (
              <Grid item xs={12} sm={12} md={12} lg={12} key={id}>
                <IncreaseItem
                  image={item.subImage}
                  title={item.job}
                  cost={item.price}
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
