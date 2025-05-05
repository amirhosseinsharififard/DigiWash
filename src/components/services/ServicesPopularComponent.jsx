/* eslint-disable react/prop-types */

import {Box, Stack, Typography} from "@mui/material";

const ServicesPopularComponent = ({
  title,

  subTitle,
  image,
  toggleHandler,
  setIsPhoneRegisterModalOpen,
  is_online,
}) => {
  // {
  //   console.log(Array.isArray(subTitle) ? false : subTitle); // helper to find is array or Object
  // }

  return (
    <>
      <Box
        onClick={() =>
          is_online ? toggleHandler : setIsPhoneRegisterModalOpen(true)
        }
        bgcolor='none'
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width:'128px',
          alignContent: "center",
        }}>
        <Stack
          display='flex'
          alignContent='center'
          alignItems='center'
          bgcolor='white'
          borderRadius='8px'
          width='100%'>
          <Box m='.5rem auto'>
            <Typography
              variant='h5'
              fontFamily={"Vazir"}
              textAlign='center'
              fontSize='14px'
              fontWeight='500'
              height='20px'>
              {title}
            </Typography>
            <Typography
              variant='h6'
              fontSize='14px'
              fontFamily={"Vazir"}
              height='20px'
              fontWeight='300'
              color='rgb(85, 100, 102)'>
              {/* {subTitle} */}
              {Array.isArray(subTitle)
                ? subTitle.join(",")
                : Object.values(subTitle).join(" , ")}
            </Typography>
          </Box>
        </Stack>
        <img
          src={image}
          style={{backgroundColor: "none", width: "64px", height: "64px"}}
        />
      </Box>
    </>
  );
};

export default ServicesPopularComponent;
