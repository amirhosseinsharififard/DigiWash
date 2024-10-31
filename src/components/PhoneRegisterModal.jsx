import {ArrowForwardIos} from "@mui/icons-material";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";
import CountdownTimer from "./CountdownTimer";
import {fetchSendOtp, fetchVerifyOtp} from "../API/requests";
import toFarsiNumber from "../share/functions";
const PhoneRegisterModal = ({
  isPhoneRegisterModalOpen,
  setIsPhoneRegisterModalOpen,
}) => {
  const [fieldRegister, setFieldRegister] = useState({
    phoneNumber: null,
    send: false,
    codeConfirm: null,
  });

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setFieldRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const buttonHandler = async () => {
    setFieldRegister((prevState) => ({
      ...prevState,
      send: !prevState.send,
    }));
    fetchSendOtp(fieldRegister.phoneNumber);
  };

  const toggleHandler = () => {
    setIsPhoneRegisterModalOpen(false);
  };

  let regex = new RegExp("^(\\+98|0)?9\\d{9}$");
  let result = regex.test(fieldRegister.phoneNumber);

  console.log(result);
  return (
    <>
      {isPhoneRegisterModalOpen && (
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
            onClick={() => toggleHandler()}
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
            {/* send sms to number */}
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
            {/* check sms code */}
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
                      fieldRegister.codeConfirm.split("").map((item, i) => (
                        <Typography mr={5} key={i}>
                          {toFarsiNumber(item)}
                        </Typography>
                      ))
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
                  onChange={(e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // چک می‌کند که آیا ورودی فقط شامل اعداد است
      setFieldRegister((prevState) => ({
        ...prevState,
        codeConfirm: value.slice(0, 4), // محدودیت به 4 کاراکتر
      }));
    }
  (fieldRegister.codeConfirm.length >= 2) && fetchVerifyOtp(fieldRegister.phoneNumber,fieldRegister.codeConfirm)
    
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
                  inputProps={{min: 0, style: { textAlign: 'left' }}} 
                  sx={{
                    cursor:"default"
                  }}
                  // onChange={changeHandler}
                  onKeyUp={(e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // چک می‌کند که آیا ورودی فقط شامل اعداد است
      setFieldRegister((prevState) => ({
        ...prevState,
        codeConfirm: value.slice(0, 4), // محدودیت به 4 کاراکتر
      }));
    }
  (fieldRegister.codeConfirm.length >= 2) && fetchVerifyOtp(fieldRegister.phoneNumber,fieldRegister.codeConfirm)
    
  }}
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
      )}
    </>
  );
};

export default PhoneRegisterModal;
