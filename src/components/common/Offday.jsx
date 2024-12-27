import {  Container, Typography } from "@mui/material";

const Offday = () => {
  return (
    <Container sx={{display:"flex" ,justifyContent:"center",m:"1rem auto"}} >
      <Typography variant="h5" fontSize="16px" fontFamily='Vazir-Bold' fontWeight="bold" component="p" bgcolor="red" borderRadius="24px" textAlign="center" color="white"  sx={{p:'1rem 1rem'}} >
        
      باتوجه به تعطیلی موقت شعبه حضوری اپال، در بخش تحویل حضوری ایرانمال، یا
        به صورت انلاین در خدمت مشتریان عزیز اپال هستیم.
      
      </Typography>
    </Container>
  );
};

export default Offday;
