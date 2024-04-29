import { Box, Container, Grid, Typography } from "@mui/material";
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
        <Typography variant='h5' component='p' fontWeight={700}>
          خدمات دیجی واش
        </Typography>
      </Box>
      <Grid
        container
        m='1rem 2rem'
        display='flex'
        justifyContent='space-between'
        width='60%'
        alignContent='center'
        spacing={4}
        margin="2rem auto"
        >
        {DataService.map((item, i) => (
          <Grid item key={i} textAlign="center" 
          
             xs={6}
          sm={3}
          md={3}
          lg={3}
          sx={{
              "@media only screen and (maxWidth: 1200px)": { fontSize: 18 },
              "@media only screen and (maxWidth: 992px)": { fontSize: 16 },
              "@media only screen and (maxWidth: 768px)": { fontSize: 12 },
              "@media only screen and (maxWidth: 576px)": { fontSize: 9 }
            }}
          >
            {/* <Link to='/' style={{ textDecoration: "none" }}> */}
              <img src={item.serviceImg} style={{margin:"0 auto"}} />
              <Typography variant='h6' color='black' fontWeight='bold'>
                {item.serviceName}
              </Typography>
            {/* </Link> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
