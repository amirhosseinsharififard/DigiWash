import { Box, Stack, Typography } from "@mui/material";

const ServicesPopularComponent = ({ title, subTitle, image ,linkProduct}) => {
  return (
    <Box
      bgcolor='none'
      width='200px'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center"
      }}>

      <Stack bgcolor='white' width='170px' borderRadius='8px'>
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
