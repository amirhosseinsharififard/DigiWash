import {  Grid, Stack, Typography } from "@mui/material";
import truckIcon from "../../assets/truck.dd17d905.svg";
import TransportationsWhiteSection from "./TransportationsWhiteSectionComponent";
const Transportations = () => {
  return (
    <Grid item xs={12} mt='2rem' width="100%">
      <Stack
        m='0 1rem 2rem 0'
        display='flex'
        flexDirection='row'
        justifyContent='start'
        alignContent='center'>
        <img src={truckIcon} />
        <Typography
          mr='.5rem'
          fontFamily='Vazir-Bold'
          fontWeight='Bold'
          color='rgb(0, 77, 100)'
          fontSize='16px'>
          حمل و نقل
        </Typography>
      </Stack>
      <TransportationsWhiteSection />
    </Grid>
  );
};

export default Transportations;
