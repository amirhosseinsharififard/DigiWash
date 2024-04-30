import { Box, Button, Container, Typography } from "@mui/material";
import toFarsiNumber from "../../share/functions";
const OrderPhone = () => {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "rgb(242, 247, 247)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          p: "0.5rem ",m:"1rem 0 ",
          borderRadius:"8px"
        }}>
        <Box
          m='1rem auto'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignContent='center'>
          <Button
            variant='contained'
            sx={{
              bgcolor: "#0caeca",
              p: "8px",
              fontSize:"16px",
            fontWeight:"bold",
              fontFamily:"Vazir",
              borderRadius: "16px",
              "&:hover": {
                background: "#0caeca"
              }
            }}>
            ثبت سفارش تلفنی
          </Button>
          <Typography variant='h5' mt='1rem' fontFamily="vazir" fontWeight="bold">
          {toFarsiNumber('02145802000')}
            
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderPhone;
