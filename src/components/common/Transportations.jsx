/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Grid, Stack, Typography} from "@mui/material";
import truckIcon from "../../assets/svg/truck.dd17d905.svg";
import {Box, Button} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {TimelineOppositeContent} from "@mui/lab";
import { checkLocalStorageUserData } from "../../hooks/useLocalStorage";
const Transportations = ({
  locations,
  setOpenModalBasketTransfer,
  selectedData,
  setIsPhoneRegisterModalOpen
}) => {
  //  locations&& locations.map(item=> console.log(item.in_range))
console.log(selectedData&&selectedData)
  return (
    <Grid item xs={12} mt='2rem' width='100%'>
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
      <Box bgcolor='white' borderRadius='30px' p='8px 16px'>
        <Timeline
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
          }}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant='outlined'
                sx={{
                  border: "5px solid rgb(12, 174, 202)",
                }}
              />
              <TimelineConnector sx={{height: "7rem"}} />
            </TimelineSeparator>
            <TimelineContent position='relative'>
              <Typography
                variant='h6'
                textAlign='right'
                color='rgb(85, 100, 102)'
                fontFamily='Vzir'
                fontSize='16px'
                fontWeight={"bold"}
                mb='8px'>
                جمع آوری
              </Typography>

              {selectedData 
                  ? <>
                  <Typography
                fontFamily='Vazir'
                fontSize='16px'
                fontWeight='bold'
                textAlign='right'
                mb='8px'>
                {selectedData.address}
              
              </Typography>
              <Typography
                fontFamily='Vazir'
                fontSize='16px'
                fontWeight='bold'
                textAlign='right'
                mb='8px'>
                ست کردن ساعت از سمت سرور
              
              </Typography>
              <Typography
                fontFamily='Vazir'
                fontSize='16px'
                fontWeight='bold'
                textAlign='right'
                mb='8px'>
                <Button
                sx={{
                  position: "absolute",
                  right: "0",
                  bgcolor: "rgb(12, 174, 202)",
                  borderRadius: "16px",
                  height: "35px",
                  width: "100px",
                  fontFamily: "Vazir-Bold",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mr: "8px",

                  "&:hover": {bgcolor: "rgb(12, 174, 202)"},
                }}
                variant='contained'
                onClick={() => setOpenModalBasketTransfer(true)}>
             تغیر زمان
              </Button>
              
              </Typography>
                  </>
                  : <>
                  <Typography
                fontFamily='Vazir'
                fontSize='16px'
                fontWeight='bold'
                textAlign='right'
                mb='8px'>
            
                 محل مورد نظر خود را برای جمع آوری انتخاب کنید.
              </Typography>
              <Typography
                textAlign='right'
                color='rgb(85, 100, 102)'
                fontFamily='Vzir'
                fontSize='16px'
                mb='8px'>
                زمان جمع آوری را انتخاب کنید.
              </Typography>
              <Button
                sx={{
                  position: "absolute",
                  right: "0",
                  bgcolor: "rgb(12, 174, 202)",
                  borderRadius: "16px",
                  height: "40px",
                  width: "160px",
                  fontFamily: "Vazir-Bold",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mr: "8px",

                  "&:hover": {bgcolor: "rgb(12, 174, 202)"},
                }}
                variant='contained'
                onClick={() => checkLocalStorageUserData()=== undefined ? setIsPhoneRegisterModalOpen(true): setOpenModalBasketTransfer(true)}>
                تنظیم زمان جمع آوری
              </Button>
                  </>}
             
            </TimelineContent>
            <TimelineOppositeContent display='none' />
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant='outlined'
                sx={{
                  border: "5px solid silver",
                }}
              />
            </TimelineSeparator>
            <TimelineContent position='relative'>
              <Typography
                variant='h6'
                textAlign='right'
                color='rgb(85, 100, 102)'
                fontFamily='Vzir'
                fontSize='16px'
                fontWeight={"bold"}

                mb='8px'>
                تحویل
              </Typography>
              <Typography
                fontFamily='Vazir'
                fontSize='16px'
                fontWeight='bold'
                textAlign='right'
                mb='8px'>
                پس از آماده‌‌شدن پیامک دریافت می‌کنید
              </Typography>
            </TimelineContent>
            <TimelineOppositeContent display='none' />
          </TimelineItem>
        </Timeline>
      </Box>
    </Grid>
  );
};

export default Transportations;
