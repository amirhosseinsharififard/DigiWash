/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

// this button handler send number to server again for get new confrim code
const CountdownTimer = ({buttonHandler}) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 دقیقه به ثانیه
  const [isExpired, setIsExpired] = useState(false); // برای بررسی انقضا تایمر
  const [reset, setReset] = useState(0); // برای بررسی انقضا تایمر
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      // اینجا می‌توانید عمل دیگری انجام دهید
      console.log("تایمر به پایان رسید!"); // عمل نمونه: نمایش در کنسول
      // می‌توانید هر کدی که می‌خواهید اینجا اضافه کنید، مثلاً یک درخواست API
      return; // اگر تایمر به صفر رسید، توقف کن
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000); // هر ثانیه یک بار کاهش می‌دهد

    return () => clearInterval(timer); // پاک کردن تایمر در صورتUnmount
  }, [timeLeft, reset]);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;

    // return 0
  };
  const resetHandler = () => {
   setIsExpired(false);
   setTimeLeft(300)
    console.log("object")
  };
  return (
    <>
      {!isExpired == 0 ? (
        <Box display='flex'>
          <Typography color='initial'>کد را دریافت نکرده‌اید؟</Typography>
          <Link
            onClick={() => {
              buttonHandler(true), resetHandler();
            }}
            style={{
              color: "rgb(12, 174, 202)",
              textDecoration: "none",
              marginRight: ".5rem",
            }}>
            فرستادن دوباره کد
          </Link>
        </Box>
      ) : (
        <>
          <Typography color={"rgb(85, 100, 102)"}>
            تا درخواست دوباره کد تایید:{" "}
            <span style={{color: "black"}}>
              {formatTime(timeLeft)}
            </span>
          </Typography>
        </>
      )}
    </>
  );
};

export default CountdownTimer;
