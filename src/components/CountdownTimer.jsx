import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 دقیقه به ثانیه
  const [isExpired, setIsExpired] = useState(false); // برای بررسی انقضا تایمر

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
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <>
      {isExpired ? (
        <Box display='flex'>
          <Typography color='black' fontSize="16px" fontWeight="500">
            کد را دریافت نکرده‌ اید؟
          </Typography>
          <Link to="/resend-code" style={{textDecoration:"none",color:"rgb(12, 174, 202)",marginRight:'1rem',fontWeight:"900",fontSizeL:'16px'}}>فرستادن دوباره کد</Link>
        </Box>
      ) : (
        <>
          <Typography>تا درخواست دوباره کد تایید:</Typography>
          <Typography>{formatTime(timeLeft)}</Typography>
        </>
      )}
    </>
  );
};

export default CountdownTimer;
