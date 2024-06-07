import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { persianPrice } from "../share/functions";

const BillContentComponent = () => {
  return (
    <>
      <Box
        bgcolor='white'
        borderRadius='30px'
        p='32px 16px'
        display='flex'
        flexDirection='column'>
        <Stack p='0 16px' display='flex' flexDirection='row' width="100%">
          <TextField label='کد تخفیف خود را وارد کنید' sx={{width:"100%"}}/>
          <Button>ثبت کد</Button>
        </Stack>
        <Stack
          p='0 16px'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'>
          <Typography>مجموع خدمات</Typography>
          <Typography>{persianPrice(220000)} تومان</Typography>
        </Stack>
        <Stack
          p='0 16px'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'>
          <Typography>مالیات بر ارزش‌افزوده</Typography>
          <Typography>{persianPrice(220000)} تومان</Typography>
        </Stack>
        <Stack
          p='0 16px'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'>
          <Typography>تخفیف</Typography>
          <Typography>{persianPrice(220000)} تومان</Typography>
        </Stack>{" "}
        <Stack
          p='0 16px'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'>
          <Typography>هزینه ارسال</Typography>
          <Typography>{persianPrice(220000)} تومان</Typography>
        </Stack>
        <Stack p='0 16px' sx={{ height: "1px", bgcolor: "rgba(0,0,0,.2)" }} />
        <Stack
          p='0 16px'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'>
          <Typography>قابل پرداخت</Typography>
          <Typography>{persianPrice(220000)} تومان</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default BillContentComponent;
