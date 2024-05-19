import { Box, Grid, Stack, Typography } from "@mui/material";
import toFarsiNumber from "../../share/functions";

// eslint-disable-next-line react/prop-types
const ServicesCoponent = ({ image, cost, title, subTitle }) => {
  return (
    <Grid item lx={4} lg={4} md={4} sm={4} xs={6}>
      <Box
        bgcolor='rgb(237, 252, 255)'
        borderRadius='12px'
        height='80%'
        p='.5rem 0 0 0'>
        <Stack
          display='flex'
          justifyContent='center'
          alignContent='center'
          alignItems='center'
          flexDirection='column'
          bgcolor='white'
          overflow='hidden'
          m='.5rem .5rem'>
          <Typography
            variant='h5'
            fontFamily='Vazir'
            fontWeight='bold'
            fontSize='14px'
            height='auto'
            pt='1rem'>
            {title}
          </Typography>
          <Typography
            variant='body1'
            sx={{
              fontFamily: "Vazir",
              fontSize: "14px",
              height: "auto"
            }}>
            {subTitle}
          </Typography>
        </Stack>
        <Stack
          display='flex'
          justifyContent='space-between'
          flexDirection='row'
          alignContent='center'
          alignItems={"center"}>
          <Box
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "64px",
              width: "64px",
              overflow: "hidden",
              display: "block"
            }}
          />
          <Typography
            variant='body2'
            bgcolor={"white"}
            borderRadius='0 8px 8px 0'
            fontFamily='Vazir'
            fontSize='10px'
            textAlign='right'
            alignContent='center'
            sx={{
              maxWidth: "77px",
              height: "23px"
            }}>
            از
            <span>{toFarsiNumber(cost)}</span>
            تومان
          </Typography>
        </Stack>
      </Box>
    </Grid>
  );
};

export default ServicesCoponent;
