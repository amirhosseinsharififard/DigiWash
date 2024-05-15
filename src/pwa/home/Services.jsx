import { Box, Grid, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

// svg
import servicesSvg from "../../../assets/services.svg";

// Data
const DataService = [
  { serviceName: "اتو", serviceImg: servicesSvg },
  { serviceName: "شستشو", serviceImg: servicesSvg },
  { serviceName: "لکه بری", serviceImg: servicesSvg },
  { serviceName: "خیاطی و تعمیرات", serviceImg: servicesSvg }
];

const Services = () => {
  return (
    <>
      <Box maxWidth="768px">
        <Typography
          variant='h5'
          component='p'
          fontSize='18px'
          fontFamily='Vazir'
          fontWeight='bold'
          mr='1rem'>
          خدمات دیجی واش
        </Typography>
      </Box>
      <Grid container maxWidth='420px' alignContent='center' margin='0 auto'>
        {DataService.map((item, i) => (
          <Grid
            item
            lx={3}
            lg={3}
            md={3}
            sm={3}
            xs={3}
            key={i}
            textAlign='center'
            sx={{
              width: "auto"
            }}>
            <img src={item.serviceImg} style={{ margin: "0 auto" }} />

            <Typography
              variant='h6'
              color='black'
              sx={{ fontFamily: "Vazir", fontSize: "12px" }}>
              {item.serviceName}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Services;
