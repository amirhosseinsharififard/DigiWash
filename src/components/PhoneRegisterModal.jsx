/* eslint-disable react/prop-types */
import {ArrowForwardIos} from "@mui/icons-material";
import {Box, Button, Grid, Radio, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import CountdownTimer from "./CountdownTimer";
import {fetchRegisterOtp, fetchSendOtp, fetchVerifyOtp} from "../API/requests";
import toFarsiNumber from "../share/functions";

const PhoneRegisterModal = ({
  isPhoneRegisterModalOpen,
  setIsPhoneRegisterModalOpen,
}) => {
  const [fieldRegister, setFieldRegister] = useState({
    phoneNumber: null,
    send: false,
    codeConfirm: null,
    verifyOtp: true,
    userName: "",
    userLastName: "",
    radioChecked: false,
  });

  const [responseSms, setResponseSms] = useState();

  const [responseVerify, setResponseVerify] = useState();

  // register Page Modal
  const handleToggle = () => {
    setFieldRegister((prevState) => ({
      ...prevState,
      radioChecked: !prevState.radioChecked,
    }));
  };

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setFieldRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleButtonClick = () => {
    setFieldRegister((prevState) => ({
      ...prevState,

      codeConfirm: "", // مقدار codeConfirm را به صفر برمی‌گرداند
    }));
  };

  const buttonHandler = async () => {
    setFieldRegister((prevState) => ({
      ...prevState,
      send: !prevState.send,
    }));
    try {
      const response = await fetchSendOtp(fieldRegister.phoneNumber);

      setResponseSms(response); // Update the response state with the fetched data
    } catch (error) {
      console.error("Error sending OTP:", error);

      // Optionally handle the error (e.g., set an error message in state)
    }
  };

  const toggleHandler = () => {
    setIsPhoneRegisterModalOpen(false);
  };
  const registerhandler = async () => {
    setIsPhoneRegisterModalOpen(false);
    try {
      const response = await fetchRegisterOtp(
        fieldRegister.userName,
        fieldRegister.phoneNumber,
        fieldRegister.codeConfirm,
        fieldRegister.userLastName
      );
      setResponseVerify(response);
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  let regex = new RegExp("^(\\+98|0)?9\\d{9}$");
  let result = regex.test(fieldRegister.phoneNumber);

  const fetchVerifyOtpverify = async () => {
    try {
      const response = await fetchVerifyOtp(
        fieldRegister.phoneNumber,
        fieldRegister.codeConfirm
      );
      setResponseVerify(response);
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (
      responseVerify &&
      responseVerify.message === "با موفقیت تایید شد اما کاربری یافت نشد." &&
      responseVerify.status === 100
    ) {
      setFieldRegister((prevState) => ({
        ...prevState,

        verifyOtp: !prevState.verifyOtp,
      }));
    } else if (
      responseVerify &&
      responseVerify.status === 101 &&
      responseVerify.message === "با موفقیت تایید شد."
    ) {
      setIsPhoneRegisterModalOpen(false);
    }
  }, [responseVerify]); // وابستگی به responseVerify

  console.log(responseSms && responseSms);
  console.log(responseVerify && responseVerify);

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
              zindex: 2,
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
              p: "2rem 2rem",
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
                    value={fieldRegister.phoneNumber || ""}
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
                    onClick={() => {
                      buttonHandler(), handleButtonClick();
                    }}>
                    لطفا شماره موبایل خود را وارد کنید تا کد فعال سازی برایتان
                    فرستاده شود.
                  </Button>
                </Grid>
              </>
            )}

            {/* check sms code  */}
            {fieldRegister.send &&
              fieldRegister.verifyOtp &&
              !(
                responseVerify &&
                responseVerify.message ===
                  "با موفقیت تایید شد اما کاربری یافت نشد." &&
                responseVerify.status === 100
              ) && (
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

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    position='relative'>
                    <Box
                      display='flex'
                      justifyContent='space-evenly'
                      width='100%'
                      margin='auto'
                      position='absolute'
                      top='0'
                      mt='1rem'
                      sx={{direction: "ltr"}}>
                      {fieldRegister.codeConfirm ? (
                        fieldRegister.codeConfirm.split("").map((item, i) => (
                          <Typography mr={5} key={i} sx={{direction: "ltr"}}>
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
                  {/* <TextField
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
                    fieldRegister.codeConfirm.length >= 2 &&
                      fetchVerifyOtpverify();
                  }}
                  name='codeConfirm'
                  value={fieldRegister.codeConfirm || ""}
                  id='outlined-basic'
                  variant='outlined'
                  placeholder='مثلا 09172384087'
                  type='text'
                  style={{opacity: "0%"}}
                  fullWidth
           
                  inputProps={{min: 0, style: {textAlign: "left"}}}
                  sx={{
                    cursor: "default", zIndex:'3',
                    textAlign:"left"
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
                    fieldRegister.codeConfirm.length >= 2 &&
                      fetchVerifyOtpverify();
                  }}
                /> */}
                  <TextField
                    onChange={(e) => {
                      const value = e.target.value;

                      if (/^\d*$/.test(value)) {
                        // چک می‌کند که آیا ورودی فقط شامل اعداد است

                        const newValue = value.slice(0, 4); // محدودیت به 4 کاراکتر

                        setFieldRegister((prevState) => ({
                          ...prevState,

                          codeConfirm: newValue,
                        }));

                        // اگر طول کد تأیید بزرگتر یا مساوی 2 باشد، تابع تأیید OTP را فراخوانی کنید

                        if (newValue.length == 4) {
                          console.log(newValue.length);
                        }
                      }
                    }}
                    onKeyUp={() =>
                      fieldRegister.codeConfirm &&
                      fieldRegister.codeConfirm.length == 4 &&
                      fetchVerifyOtpverify()
                    }
                    name='codeConfirm'
                    value={fieldRegister.codeConfirm || ""}
                    id='outlined-basic'
                    variant='outlined'
                    placeholder='کد تایید'
                    type='text'
                    style={{opacity: "0%"}}
                    fullWidth
                    inputProps={{min: 0, style: {textAlign: "left"}}}
                    sx={{
                      cursor: "default",

                      zIndex: "3",

                      textAlign: "left",
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

            {/* if isn't exist in datas */}
            {responseVerify &&
              responseVerify.message ==
                "با موفقیت تایید شد اما کاربری یافت نشد." &&
              responseVerify.status == 100 && (
                <Grid item xs={12} sm={12} md={12} lg={12} m={"0 .5rem"}>
                  <Typography variant='h6' color='initial'>
                    ثبتنام
                  </Typography>

                  <Box>
                    <Typography color={"rgb(0, 52, 67)"}>
                      لطفا نام خود را وارد کنید
                    </Typography>
                    <TextField
                      name='userName'
                      onChange={changeHandler}
                      placeholder='نام'
                      value={fieldRegister.userName || ""}
                      sx={{
                        bgcolor: "rgb(240, 244, 244)",
                        borderRadius: "16px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none", // حذف حاشیه
                        },
                        "& .MuiInputBase-input": {
                          textAlign: "center", // Center the input text
                        },

                        "& .MuiInputBase-input::placeholder": {
                          textAlign: "center", // Center the placeholder text
                        },
                      }}
                      fullWidth
                    />
                  </Box>
                  <Box>
                    <Typography color={"rgb(0, 52, 67)"}>
                      لطفا نام خانوادگی خود را وارد کنید
                    </Typography>
                    <TextField
                      onChange={changeHandler}
                      name='userLastName'
                      placeholder=' نام خانوادگی '
                      value={fieldRegister.userLastName || ""}
                      sx={{
                        bgcolor: "rgb(240, 244, 244)",
                        borderRadius: "16px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none", // حذف حاشیه
                        },
                        "& .MuiInputBase-input": {
                          textAlign: "center", // Center the input text
                        },

                        "& .MuiInputBase-input::placeholder": {
                          textAlign: "center", // Center the placeholder text
                        },
                      }}
                      fullWidth
                    />
                  </Box>

                  <Box display='flex' alignItems={"center"}>
                    <Radio
                      sx={{
                        borderColor: "rgb(186, 230, 233)", // Change the color of the radio when unchecked

                        "&.Mui-checked": {
                          color: "rgb(0, 173, 159)", // Change the color of the radio when checked
                        },
                      }}
                      checked={fieldRegister.radioChecked}
                      onClick={handleToggle}
                    />
                    <Typography color={"rgb(0, 52, 67)"}>
                      <Link
                        style={{
                          color: "rgb(12, 174, 202)",
                          textDecoration: "none",
                          marginLeft: "5px",
                        }}>
                        قوانین و شرایط
                      </Link>
                      دیجی‌واش را میپذیرم
                    </Typography>
                  </Box>
                  <Button
                    variant='outlined'
                    fullWidth
                    sx={{
                      bgColor: "white",
                      borderRadius: "16px",
                      p: "8px 16px",
                      color: "rgb(12, 174, 202)",
                      borderColor: "rgb(12, 174, 202)",
                      "&:hover": {
                        color: "rgb(12, 174, 202)", // Keep the text color the same on hover
                        borderColor: "rgb(12, 174, 202)", // Keep the border color the same on hover
                        // borderColor: "rgb(12, 174, 202)",
                        // bgcolor: "white", // Keep the background color the same on hover

                        bgcolor: "white",
                        boxShadow: "none", // Optional: remove shadow on hover
                      },
                    }}
                    disabled={
                      fieldRegister.userName &&
                      fieldRegister.userLastName &&
                      fieldRegister.radioChecked
                        ? false
                        : true
                    }
                    onClick={registerhandler}>
                    تایید اطلاعات
                  </Button>
                </Grid>
              )}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default PhoneRegisterModal;
