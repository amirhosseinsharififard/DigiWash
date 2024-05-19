/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ServicesPopularComponent = ({
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  subTitle,
  image,
  toggleHandler,

}) => {

  return (
    <>
      <Box
        onClick={toggleHandler}
        bgcolor='none'
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center"
        }}>
        <Stack
          display='flex'
          alignContent='center'
          alignItems='center'
          bgcolor='white'
          borderRadius='8px'
          width='128px'
          height='124'>
          <Box m='.5rem auto' width='120px'>
            <Typography
              variant='h5'
              textAlign='center'
              fontSize='14px'
              fontWeight='bold'
              fontFamily='Vazir-Medium'
              height='20px'>
              {title}
            </Typography>
            <Typography
              variant='h6'
              fontSize='14px'
              height='20px'
              fontFamily='Vazir-Light'
              color='rgb(85, 100, 102)'>
              {subTitle}
            </Typography>
          </Box>
        </Stack>
        <img
          src={image}
          style={{ backgroundColor: "none", width: "64px", height: "64px" }}
        />
      </Box>
    </>
  );
};

export default ServicesPopularComponent;
