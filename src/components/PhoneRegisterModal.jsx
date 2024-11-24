/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {ArrowForwardIos} from "@mui/icons-material";
import {Box, Button, Grid, Radio, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import CountdownTimer from "./CountdownTimer";
import {fetchRegisterOtp, fetchSendOtp, fetchVerifyOtp} from "../API/requests";
import toFarsiNumber from "../share/functions";
import {setLocalStorageHandler} from "../hooks/useLocalStorage";

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
  // let regex = new RegExp("^(\\+98|0)?9\\d{9}$");
  let regex = new RegExp("^09\\d{9}$");

  let result = regex.test(fieldRegister.phoneNumber);
  const [responseSms, setResponseSms] = useState();
  const [responseVerify, setResponseVerify] = useState();

  // register Page Modal
  const handleToggle = () => {
    setFieldRegister((prevState) => ({
      ...prevState,
      radioChecked: !prevState.radioChecked,
    }));
  };

  // use regex for handle input is it number or not
  // if it is true writed
  // const changeHandler = (e) => {
  //   const {name, value} = e.target;

  //     setFieldRegister((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));

  // };

  const changeHandler = (e) => {
    const {name, value} = e.target;

    if (name === "phoneNumber") {
      // محدود کردن طول شماره تلفن به 11 رقم
      if (value.length > 11) {
        return; // اگر طول ورودی بیشتر از 11 باشد، هیچ تغییری اعمال نشود
      }
    }
    if (name === "phoneNumber") {
      // اجازه ورود فقط به اعداد
      const numericValue = value.replace(/[^0-9]/g, ""); // حذف تمام کاراکترهای غیرعددی
      setFieldRegister((prevState) => ({
        ...prevState,
        [name]: numericValue, // مقدار فقط شامل اعداد
      }));
    } else {
      // برای سایر فیلدها، مقدار بدون تغییر ذخیره می‌شود
      setFieldRegister((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleButtonClick = () => {
    setFieldRegister((prevState) => ({
      ...prevState,

      codeConfirm: "", // مقدار codeConfirm را به صفر برمی‌گرداند
    }));
  };

  const buttonHandler = async (dontChange) => {
    // if user in confrim code and click on send sms they didn't back to write phone number page
    !dontChange && setFieldRegister((prevState) => ({
      ...prevState,
      send: !prevState.send,
    }));
    try {
      const response = await fetchSendOtp(fieldRegister.phoneNumber);

      setResponseSms(response); // Update the response state with the fetched dataclg
      console.log(response);
    } catch (error) {
      console.error("Error sending OTP:", error);

      // Optionally handle the error (e.g., set an error message in state)
    }
  };

  const toggleHandler = () => {
    setIsPhoneRegisterModalOpen(false);
  };
  const fetchVerifyOtpverify = async () => {
    try {
      const response = await fetchVerifyOtp(
        fieldRegister.phoneNumber,
        fieldRegister.codeConfirm
      );
      setResponseVerify(response);
      console.log(response);
      if (response.message == "با موفقیت تایید شد.") {
        setLocalStorageHandler(response.data);
      }
    } catch (error) {
      console.log("error", error);
    }
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
      if (response.message == "کاربر با موفقیت ثبت شد.") {
        setLocalStorageHandler(response.data);
        localStorage.getItem("userData");
      }
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
    // console.log(responseVerify);
  }, [responseVerify]); // وابستگی به responseVerify

  // console.log(responseSms && responseSms);
  // console.log(responseVerify && responseVerify);

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
                  <Typography sx={{fontWeight: "bold"}}>
                    ورود/نام‌نویسی
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography marginTop='2rem' color='rgb(0, 52, 67)'>
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
                    placeholder={`مثلا ${toFarsiNumber("09172384087")} `}
                    type='text'
                    onChange={changeHandler}
                    fullWidth
                    sx={{
                      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        outline: "none",
                        border: "none",
                      },
                      "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input ":
                        {
                          textAlign: "center",
                        },
                      backgroundColor: "rgb(240, 244, 244)",
                      borderRadius: "16px",
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    variant='outlined'
                    disabled={!result}
                    fullWidth
                    onClick={() => {
                      buttonHandler(false), handleButtonClick();
                    }}
                    sx={{
                      borderRadius: "16px",
                      p: ".5rem",
                      mt: "1rem",
                      color: "rgb(12, 174, 202)",
                      borderColor: "rgb(12, 174, 202)",
                      fontWeight: "700",
                    }}>
                    مرحله بعد
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
                        color: "rgb(97, 97, 97)",
                        textDecoration: "none",
                        marginBottom: "1rem",
                      }}
                      onClick={()=>buttonHandler(false)}>
                      <ArrowForwardIos style={{fontSize: "14px"}} />
                      <Typography>اصلاح شماره موبایل</Typography>
                    </Link>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography>
                      کد ارسال شده به
                      <span
                        style={{
                          color: "rgb(12, 174, 202)",
                          margin: " 0 .2rem",
                        }}>
                        {fieldRegister.phoneNumber &&
                          toFarsiNumber(fieldRegister.phoneNumber)}
                      </span>
                      را وارد کنید.
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
                          <Typography>_____</Typography>
                          <Typography>_____</Typography>
                          <Typography>_____</Typography>
                          <Typography>_____</Typography>
                        </>
                      )}
                    </Box>
                  </Grid>

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
                    borderTop='1px solid rgba(0,0,0,0.2)'
                    pt={"1rem"}>
                    <CountdownTimer buttonHandler={buttonHandler} />
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
