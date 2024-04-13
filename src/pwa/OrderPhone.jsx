import { Box, Button, Container, Typography } from "@mui/material";

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
          p: "0.5rem ",m:"0 2rem",
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
              p: ".5rem 1rem",
              fontWeight: "bold",
              borderRadius: "30px",
              "&:hover": {
                background: "#0caeca"
              }
            }}>
            ثبت سفارش تلفنی
          </Button>
          <Typography variant='h5' mt='1rem'>
            021-45802000
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderPhone;
