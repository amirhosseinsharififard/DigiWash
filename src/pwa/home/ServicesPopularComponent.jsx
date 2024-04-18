import { Box, Stack, Typography } from "@mui/material";

const ServicesPopularComponent = ({ title, subTitle, image ,linkProduct}) => {
  return (
    <Box
      bgcolor='none'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center"
      }}>

      <Stack bgcolor='white'  p='1rem' borderRadius='8px'>
        <Typography variant='h5' fontWeight='bold'>
          {title}
        </Typography>
        <Typography variant='h6'  >
          {subTitle}
        </Typography>
      </Stack>
      <img
        src={image}
        style={{ backgroundColor: "none", width: "100px", height: "100px" }}
      />
    </Box>
  );
};

export default ServicesPopularComponent;