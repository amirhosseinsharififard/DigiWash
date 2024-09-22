import {ArrowForwardIos} from "@mui/icons-material";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const PhoneRegisterModal = () => {
  let regex = new RegExp("^(\\+98|0)?9\\d{9}$");
  let result = regex.test("09172384087");

  const confrimSend = true;
  const inputPhoneNumber = "09172384087";
  const timer = false;
  console.log(result);
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "4",
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(15px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}>
        <Link
          //   onClick={() => toggleHandler()}
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: 2,
            position: "absolute",
          }}
        />

        <Grid
          container
          sx={{
            backgroundColor: "#FFF",
            borderRadius: "16px 16px 0 0",
            m: "0 auto",
            maxWidth: "768px",
            p: "2rem 8px",
            zIndex: 3,
          }}>
          {!confrimSend && (
            <>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography>ورود/نام‌نویسی</Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography>
                  لطفا شماره موبایل خود را وارد کنید تا کد فعال سازی برایتان
                  فرستاده شود.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  placeholder='مثلا 09172384087'
                  type='number'
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button variant='outlined' disabled={!result}>
                  لطفا شماره موبایل خود را وارد کنید تا کد فعال سازی برایتان
                  فرستاده شود.
                </Button>
              </Grid>
            </>
          )}
          {confrimSend && (
            <>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display='flex'
                justifyContent='start'>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}>
                  <ArrowForwardIos style={{fontSize: "14px"}} />
                  <Typography>اصلاح شماره موبایل</Typography>
                </Link>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography>
                  کد ارسال شده به {inputPhoneNumber} را وارد کنید.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} position='relative' >
                <Box
                  display='flex'
                  justifyContent='space-evenly'
                  width='100%'
                  margin='auto'
                  position='absolute'
                  top='0'
                  mt='1rem'>
                  <Typography>5</Typography>
                  <Typography>5</Typography>
                  <Typography>5</Typography>
                  <Typography>5</Typography>
                </Box>
              </Grid>
              <TextField
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 4);
                }}
                id='outlined-basic'
                variant='outlined'
                placeholder='مثلا 09172384087'
                type='number'
                style={{opacity:"0%"}}
                fullWidth
                zIndex='3'
              />

              <Grid item xs={12} sm={12} md={12} lg={12}  borderTop="1px solid rgba(0,0,0,0.2)">
                {timer ? (
                  <>
                    <Typography>تا درخواست دوباره کد تایید:</Typography>
                    <Typography>timer 5:00</Typography>
                  </>
                ) : (
                  <Box display='flex'>
                    <Typography color='initial'>
                      {" "}
                      کد را دریافت نکرده اید؟
                    </Typography>
                    <Link>فرستادن دوباره کد</Link>
                  </Box>
                )}
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default PhoneRegisterModal;
