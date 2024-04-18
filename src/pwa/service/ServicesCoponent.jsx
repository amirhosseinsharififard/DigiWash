import { Box, Grid, Stack, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ServicesCoponent = ({ image, cost ,title,subTitle}) => {
  return (
    <Grid item xs={6} sm={6} md={6} lg={4}>
      <Box bgcolor='rgb(237, 252, 255)' pt={2} borderRadius='12px' height='80%'>
        <Stack
          display='flex'
          justifyContent='center'
          alignContent='center'
          alignItems='center'
          flexDirection='column'
          bgcolor='white'
          m='0 16px'>
          <Typography
            variant='h5'
            fontWeight={"bold"}
            sx={{
              "@media only screen and (max-width: 1200px)": { fontSize: 22 },
              "@media only screen and (max-width: 992px)": { fontSize: 20 },
              "@media only screen and (max-width: 768px)": { fontSize: 14 },
              "@media only screen and (max-width: 576px)": { fontSize: 12 }
            }}>
            {title}
          </Typography>
          <Typography
            variant='body1'
            sx={{
              "@media only screen and (max-width: 1200px)": { fontSize: 18 },
              "@media only screen and (max-width: 992px)": { fontSize: 16 },
              "@media only screen and (max-width: 768px)": { fontSize: 12 },
              "@media only screen and (max-width: 576px)": { fontSize: 9 }
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
          <img
            src={image}
            style={{
              height: "80px",
              width: "75px",
              "@media only screen and (max-width: 1200px)": { fontSize: 14 },
              "@media only screen and (max-width: 992px)": { fontSize: 12 },
              "@media only screen and (max-width: 768px)": { fontSize: 8 },
              "@media only screen and (max-width: 576px)": { fontSize: 7 }
            }}
          />
          <Typography
            variant='body2'
            bgcolor={"white"}
            borderRadius='0 8px 8px 0'
            p='4px 8px'
            sx={{
              "@media only screen and (max-width: 1200px)": { fontSize: 14 },
              "@media only screen and (max-width: 992px)": { fontSize: 12 },
              "@media only screen and (max-width: 768px)": { fontSize: 8 },
              "@media only screen and (max-width: 576px)": { fontSize: 7 }
            }}>
            از
            <span>{cost}</span>
            تومان
          </Typography>
        </Stack>
      </Box>
    </Grid>
  );
};

export default ServicesCoponent;
