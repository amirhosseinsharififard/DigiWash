import {ArrowForwardIos} from "@mui/icons-material";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";
import CountdownTimer from "./CountdownTimer";
const PhoneRegisterModal = () => {
  const [fieldRegister, setFieldRegister] = useState({
    phoneNumber: "09172384087",
    send: true,
    codeConfirm: "",
  });

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setFieldRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const buttonHandler = () => {
    setFieldRegister((prevState) => ({
      ...prevState,
      send: !prevState.send,
    }));
  };



  let regex = new RegExp("^(\\+98|0)?9\\d{9}$");
  let result = regex.test(fieldRegister.phoneNumber);


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
          {!fieldRegister.send && (
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
                  name='phoneNumber'
                  value={fieldRegister.phoneNumber}
                  id='outlined-basic'
                  variant='outlined'
                  placeholder='مثلا 09172384087'
                  type='number'
                  onChange={changeHandler}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button
                  variant='outlined'
                  disabled={!result}
                  onClick={buttonHandler}>
                  لطفا شماره موبایل خود را وارد کنید تا کد فعال سازی برایتان
                  فرستاده شود.
                </Button>
              </Grid>
            </>
          )}
          {fieldRegister.send && (
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
                  }}
                  onClick={buttonHandler}>
                  <ArrowForwardIos style={{fontSize: "14px"}} />
                  <Typography>اصلاح شماره موبایل</Typography>
                </Link>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography>
                  کد ارسال شده به {fieldRegister.phoneNumber} را وارد کنید.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} position='relative'>
                <Box
                  display='flex'
                  justifyContent='space-evenly'
                  width='100%'
                  margin='auto'
                  position='absolute'
                  top='0'
                  mt='1rem'>
                  {fieldRegister.codeConfirm ? (
                    fieldRegister.codeConfirm
                      .split()
                      .map((item, i) => <Typography key={i}>{item}</Typography>)
                  ) : (
                    <>
                      <Typography>-</Typography>
                      <Typography>-</Typography>
                      <Typography>-</Typography>
                      <Typography>-</Typography>
                    </>
                  )}
                </Box>
              </Grid>
              <TextField
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 4);
                }}
                name='codeConfirm'
                value={fieldRegister.codeConfirm}
                id='outlined-basic'
                variant='outlined'
                placeholder='مثلا 09172384087'
                type='text'
                style={{opacity: "0%"}}
                fullWidth
                zIndex='3'
                onChange={changeHandler}
              />

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                borderTop='1px solid rgba(0,0,0,0.2)'>
                <CountdownTimer />
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default PhoneRegisterModal;
