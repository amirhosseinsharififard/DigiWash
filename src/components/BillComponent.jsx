import { Grid, Stack, Typography } from "@mui/material";
import recipt from "../../assets/receipt.d74dde96.svg";
import BillContentComponent from "./BillContentComponent";

const BillComponent = ({splitReducePrices}) => {
  return (
    <Grid item xs={12} mt='2rem' width='100%'>
      <Stack
        m='0 1rem 2rem 0'
        display='flex'
        flexDirection='row'
        justifyContent='start'
        alignItems="center"
        alignContent='center'>
        <img src={recipt} />
        <Typography
          mr='.5rem'
          fontFamily='Vazir-Bold'
          fontWeight='Bold'
          color='rgb(0, 77, 100)'
          fontSize='16px'>
          صورتحساب
        </Typography>
      </Stack>
      <BillContentComponent splitReducePrices={splitReducePrices}/>

      
    </Grid>
  );
};

export default BillComponent;
