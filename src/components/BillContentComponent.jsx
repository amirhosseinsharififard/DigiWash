import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {persianPrice} from "../share/functions";
import ErrorIcon from "@mui/icons-material/Error";
import Rtl from "./RtlComponents";
const BillContentComponent = () => {
  return (
    <>
      <Box
        bgcolor='white'
        borderRadius='30px'
        p='32px 16px'
        display='flex'
        flexDirection='column'>
        <Stack
          mt='8px'
          p='0 16px'
          display='flex'
          flexDirection='row'
          alignContent='center'
          width='100'
          alignItems='center'
          height='70px'
          position='relative'>
          <Rtl dir='rtl'>
            <TextField
              label='کد تخفیف خود را وارد کنید'
              sx={{
                width: "100%",
                dir: "rtl",
                borderColor: "rgb(235, 241, 242)",
                borderRadius: "16px",
                "&:hover": {
                  borderColor: "rgb(235, 241, 242)",
                },
              }}
            />
          </Rtl>
          <Button
            sx={{
              bgcolor: "rgb(204, 204, 204)",
              height: "30px",
              weight: "78px",
              color: "white",
              m: "auto 0",
              borderRadius: "10px",
              position: "absolute",
              left: "25px",
              "&:hover": {
                bgcolor: "rgb(204, 204, 204)",
                color: "white",
              },
            }}>
            ثبت کد
          </Button>
        </Stack>
        <Stack
          mt='8px'
          p='0 16px'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'>
          <Typography
            fontFamily='Vazir-Medium'
            color='rgb(85, 100, 102)'
            fontWeight='bold'>
            مجموع خدمات
          </Typography>
          <Typography
            color='rgb(85, 100, 102)'
            fontSize='14px'
            fontFamily='Vazir'>
            {persianPrice(220000)} تومان
          </Typography>
        </Stack>
        <Stack
          mt='8px'
          p='0 16px'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'>
          <Typography
            fontFamily='Vazir-Medium'
            color='rgb(85, 100, 102)'
            fontWeight='bold'>
            مالیات بر ارزش افزوده
          </Typography>
          <Typography
            color='rgb(85, 100, 102)'
            fontSize='14px'
            fontFamily='Vazir'>
            {persianPrice(220000)} تومان
          </Typography>
        </Stack>
        <Stack
          mt='8px'
          p='0 16px'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'>
          <Typography
            fontFamily='Vazir-Medium'
            color='rgb(85, 100, 102)'
            fontWeight='bold'>
            تخفیف
          </Typography>
          <Typography
            color='rgb(85, 100, 102)'
            fontSize='14px'
            fontFamily='Vazir'>
            {persianPrice(220000)} تومان
          </Typography>
        </Stack>
        <Stack
          mt='8px'
          p='0 16px'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'>
          <Typography
            fontFamily='Vazir-Medium'
            color='rgb(85, 100, 102)'
            fontWeight='bold'>
            هزینه ارسال
          </Typography>
          <Typography
            color='rgb(85, 100, 102)'
            fontSize='14px'
            fontFamily='Vazir'>
            {persianPrice(220000)} تومان
          </Typography>
        </Stack>
        <Box
          p='0 16px'
          color='rgb(0, 173, 159)'
          display='flex'
          mt='8px'
          mb='8px'
          flexDirection='row'>
          <ErrorIcon fontSize='4px' />
          <Typography
            fontFamily='Vazir'
            fontWeight='bold'
            fontSize='12px'
            mr='.3rem'>
            هزینه حمل و نقل برای سفارش هایی که مبلغ کل اقلام آنها بالای ۶۰۰ هزار
            تومان باشد رایگان است.
          </Typography>
        </Box>
        <Stack p='0 16px' sx={{height: "1px", bgcolor: "rgba(0,0,0,.2)"}} />
        <Stack
          mt='8px'
          p='0 16px'
          display='flex'
          flexDirection='row'
          fontWeight='bold'
          justifyContent='space-between'>
          <Typography>قابل پرداخت</Typography>
          <Typography>{persianPrice(220000)} تومان</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default BillContentComponent;
