import {  Container, Typography } from "@mui/material";

const Offday = () => {
  return (
    <Container sx={{display:"flex" ,justifyContent:"center"}} >
      <Typography variant="h5" fontWeight={700} component="p" bgcolor="red" borderRadius="30px" textAlign="center" color="white" p={4} m="1.5rem">
        
      باتوجه به تعطیلی موقت شعبه حضوری اپال، در بخش تحویل حضوری ایرانمال، یا
        به صورت انلاین در خدمت مشتریان عزیز اپال هستیم.
      
      </Typography>
    </Container>
  );
};

export default Offday;
