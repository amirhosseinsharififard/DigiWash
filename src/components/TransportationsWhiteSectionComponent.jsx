import { Box, Button } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import { TimelineOppositeContent } from "@mui/lab";
const TransportationsWhiteSection = () => {
  return (
    <Box  bgcolor="white" borderRadius="30px" p="8px 16px">
      <Timeline
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "flex-start",
        }}>
        <TimelineItem >
          <TimelineSeparator>
            <TimelineDot
              variant='outlined'
              sx={{
                border: "5px solid rgb(12, 174, 202)",
              }}
            />
            <TimelineConnector sx={{height:"7rem"}}/>
          </TimelineSeparator>
          <TimelineContent position='relative'>
            <Typography
              variant='h6'
              textAlign='right'
              color='rgb(85, 100, 102)'
              fontFamily='Vzir'
              fontSize='16px'
              mb='8px'>
              جمع آوری
            </Typography>
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

                "&:hover": { bgcolor: "rgb(12, 174, 202)" },
              }}
              variant='contained'>
              تنظیم زمان جمع آوری
            </Button>
          </TimelineContent>
          <TimelineOppositeContent display='none' />
        </TimelineItem>
        <TimelineItem >
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
  );
};

export default TransportationsWhiteSection;
