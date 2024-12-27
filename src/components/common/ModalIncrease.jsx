/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {Box, Grid, Typography, Button, ButtonGroup} from "@mui/material";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import IncreaseItem from "../common/IncreaseItemModal";
import {fetchOpenOrder} from "../../API/requests";
import {checkLocalStorageUserData} from "../../hooks/useLocalStorage";

const ModalIncrease = ({
  toggleHandler,
  data,
  nameData,
  uniqeSubTitle,
  itemServices,
  setIsPhoneRegisterModalOpen,
}) => {
  // console.log(itemServices)
  // const [showMore, setShowMore] = useState(false);
  // const dataList = data;
  // const [indexData, setIndexData] = useState(null); // مقدار اولیه null به جای undefined
  // const [error, setError] = useState(null); // برای مدیریت خطا
  // // create Buttons for Uniqe datas
  // const [activeButton,setActiveButton]=useState(uniqeSubTitleButton(uniqeSubTitle).length ? uniqeSubTitleButton(uniqeSubTitle)[0] : null)
  // //   {
  // //   console.log(Array.isArray(data.services) ? false : data.services); // helper to find is array or Object
  // // }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchOpenOrder();
  //       setIndexData(data.data);
  //     } catch (err) {
  //       setError("Error fetching data");
  //       console.error(err);
  //     }
  //   };

  //   fetchData(); // فراخوانی تابع غیرهمزمان

  //   //  ************ inja dare modam request mifreste**************

  //   // },[indexData])
  // }, []);
  //  ************ inja dare modam request mifreste**************

  // console.log(indexData && indexData)

  // for find uniqSubs
  // const uniqeSubTitleButton = (subTitle) => {
  //   return [...new Set(Object.values(subTitle))];
  // };
  // const [selectedIndex, setSelectedIndex] = useState(null);
  // const handleClick = (index) => {
  //   setSelectedIndex(index);
  // };
  // console.log(uniqeSubTitleButton(uniqeSubTitle)[0]);

  const dataList = data;
  const [indexData, setIndexData] = useState(null);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);
  const checkIsLogin =
    localStorage.getItem("userData") && checkLocalStorageUserData().is_online;

  console.log(indexData);
  // تابع برای پیدا کردن مقادیر یکتا از ساب‌تایتل
  const uniqeSubTitleButton = (subTitle) => {
    return [...new Set(Object.values(subTitle))];
  };

  // تنظیم مقدار اولیه activeButton بر اساس مقادیر یکتا
  const [activeButton, setActiveButton] = useState(
    uniqeSubTitleButton(uniqeSubTitle)
      ? uniqeSubTitleButton(uniqeSubTitle)[1]
      : null
  );

  // تابع برای واکشی داده‌ها
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOpenOrder();
        setIndexData(data.data.services);
        // console.log(data)
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    localStorage.getItem("userData") && fetchData(); // فراخوانی تابع واکشی داده‌ها
  }, [reloadKey]); // حذف indexData از وابستگی‌ها

  // اگر خطایی وجود داشت نمایش خطا
  if (error) {
    return <div>{error}</div>;
  }

  console.log(indexData);
  return (
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
        onClick={toggleHandler}
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
        <Grid item xs={12}>
          <Typography
            variant='h5'
            fontWeight={"bold"}
            fontSize='16px'
            mr='8px'
            mb='16px'
            fontFamily='Vazir'>
            {nameData}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <ButtonGroup
            fullWidth
            aria-label='Basic button group'
            sx={{
              bgcolor: "rgb(240, 244, 244)",
              direction: "ltr",
              borderRadius: "60px",
              "& .MuiButton-root": {
                borderRadius: "60px", // تنظیم شعاع گوشه برای همه دکمه‌ها به 60px
              },
              "& .MuiButtonGroup-grouped:first-of-type": {
                borderRadius: "60px", // گوشه گرد برای دکمه اول
              },
              "& .MuiButtonGroup-grouped:last-of-type": {
                borderRadius: "60px", // گوشه گرد برای دکمه آخر
              },
              "& .MuiButtonGroup-grouped": {
                // حذف تغییرات border-radius در حالت انتخاب شده
                "&.Mui-selected, &:active, &:focus": {
                  // بدون تغییر در border-radius
                },
              },
            }}>
            {uniqeSubTitleButton(uniqeSubTitle).length >= 2 &&
              uniqeSubTitleButton(uniqeSubTitle).map((item, id) => (
                <>
                  <Button
                    value='default'
                    variant='outlined'
                    dir='ltr'
                    sx={{
                      bgcolor:
                        item === activeButton
                          ? "rgb(12, 174, 202)"
                          : "rgb(240, 244, 244)",
                      border: "none",
                      color: item === activeButton ? "white" : "black",
                      borderRadius: "60px", // تنظیم ثابت برای گوشه‌های گرد

                      width: "100%",
                      "&:hover": {
                        bgcolor:
                          item === activeButton
                            ? "rgb(12, 174, 202)"
                            : "rgb(240, 244, 244)",
                        color: item === activeButton ? "white" : "black",
                        border: "none",
                      },
                    }}
                    onClick={() => setActiveButton(item)}>
                    {item}
                  </Button>
                </>
              ))}
          </ButtonGroup>
        </Grid>

        {Array.isArray(dataList)
          ? dataList.map((item, id) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                key={id}
                p=' .5rem 8px '
                width='100%'>
                <IncreaseItem
                  data={item}
                  image={item.serviceTypeImage}
                  service_list={indexData}
                  title={item.serviceType}
                  cost={item.value}
                  id={item.id}
                  setReloadKey={setReloadKey}
                  setIsPhoneRegisterModalOpen={setIsPhoneRegisterModalOpen}
                  toggleHandler={toggleHandler}
                />
                {/* {console.log(item.id)} */}
              </Grid>
            ))
          : Object.entries(itemServices.services)
              .filter(([key, value]) => key === activeButton) // فقط کلیدی که برابر با targetKey است
              .map(([key, value]) =>
                value.map((item, id) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    key={`${key}-${id}`}
                    p=' .5rem 8px '
                    width='100%'>
                    {console.log(item)}
                    <IncreaseItem
                      data={item}
                      image={item.serviceTypeImage}
                      service_list={indexData}
                      title={item.serviceType}
                      cost={item.value}
                      id={item.id}
                      setReloadKey={setReloadKey}
                      reloadKey={reloadKey}
                      setIsPhoneRegisterModalOpen={setIsPhoneRegisterModalOpen}
                      toggleHandler={toggleHandler}
                    />
                  </Grid>
                ))
              )}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          p=' .5rem 8px '
          width='100%'
          display={"flex"}
          flexDirection={"row-reverse"}>
          <Button
            sx={{
              bgcolor: "white",
              color: "rgb(12, 174, 202)",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "16px",
              border:"1px solid rgb(12, 174, 202)",m:'0 .5rem',
              ":hover": {
                bgcolor: "white",
                color: "rgb(12, 174, 202)",
              },
            }}
            onClick={toggleHandler}
            fullWidth>
            ثبت سفارش
          </Button>
          <Button
            sx={{
              bgcolor: "rgb(12, 174, 202)",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "16px",
              m:'0 .5rem',
              ":hover": {
                bgcolor: "rgb(12, 174, 202)",
                color: "white",
              },
            }}
            onClick={toggleHandler}
            fullWidth>
            ثبت سفارش
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ModalIncrease;
