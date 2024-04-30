import { Box, Container, Typography } from "@mui/material";
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
    <Container>
      <Box m='1rem 2rem'>
        <Typography
          variant='h5'
          component='p'
          fontSize='18px'
          fontFamily='Vazir-Bold'>
          خدمات دیجی واش
        </Typography>
      </Box>
      <Box
        display='flex'
        justifyContent='space-evenly'
        maxWidth='420px'
        alignContent='center'
        margin='0 auto'>
        {DataService.map((item, i) => (
          <Box
            key={i}
            textAlign='center'
            sx={{
              fontFamily: "vazir",
              fontSize: "16px",
              width: "auto"
            }}>
            {/* <Link to='/' style={{ textDecoration: "none" }}> */}
            <img src={item.serviceImg} style={{ margin: "0 auto" }} />
            <Typography variant='h6' color='black'>
              {item.serviceName}
            </Typography>
            {/* </Link> */}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Services;
