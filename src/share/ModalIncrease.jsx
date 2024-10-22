/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  Box,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  ToggleButtonGroup,
} from "@mui/material";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import IncreaseItem from "./IncreaseItemModal";
import {fetchOpenOrder} from "../API/requests";

const ModalIncrease = ({toggleHandler, data, nameData, uniqeSubTitle}) => {
  // const [showMore, setShowMore] = useState(false);
  const dataList = data;
  const [indexData, setIndexData] = useState(null); // مقدار اولیه null به جای undefined
  const [error, setError] = useState(null); // برای مدیریت خطا
  // create Buttons for Uniqe datas
  const activeButton = "دو نفره";
  //   {
  //   console.log(Array.isArray(data.services) ? false : data.services); // helper to find is array or Object
  // }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOpenOrder();
        setIndexData(data.data);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    fetchData(); // فراخوانی تابع غیرهمزمان

    //  ************ inja dare modam request mifreste**************

    // },[indexData])
  }, []);
  //  ************ inja dare modam request mifreste**************

  // console.log(indexData && indexData)

  // for find uniqSubs
  const uniqeSubTitleButton = (subTitle) => {
    return [...new Set(Object.values(subTitle))];
  };
  // const [selectedIndex, setSelectedIndex] = useState(null);
  console.log(uniqeSubTitleButton(uniqeSubTitle));
  // const handleClick = (index) => {
  //   setSelectedIndex(index);
  // };
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
              "& .MuiButton-root": {
                borderRadius: 0, // تنظیم پیش‌فرض برای همه دکمه‌ها
              },
              "& .MuiButtonGroup-grouped:first-of-type": {
                borderRadius: "60px 0 0 60px", // اعمال گوشه گرد به دکمه اول فقط در صورت فعال بودن
              },
              "& .MuiButtonGroup-grouped:last-of-type": {
                borderRadius: "0 60px 60px 0", // اعمال گوشه گرد به دکمه آخر فقط در صورت فعال بودن
              },
              "& .MuiButtonGroup-grouped": {
                "&.Mui-selected, &:active, &:focus": {
                  borderRadius: "60px", // شعاع گرد برای دکمه‌های داخلی وقتی فعال یا انتخاب شده‌اند
                },
              },
            }}>
            {uniqeSubTitleButton(uniqeSubTitle).length >= 2 &&
              uniqeSubTitleButton(uniqeSubTitle).map((item, id) => (
                <>
                  <Button
                    value='default'
                    variant='outlined'
                    dir='rtl'
                    sx={{
                      bgcolor:
                        item == activeButton
                          ? "rgb(12, 174, 202)"
                          : "rgb(240, 244, 244)",
                      border: "none",
                      color: item == activeButton ? "white" : "black",
                      borderRadius: item == activeButton && "60px" ,

                      width: "100%",
                      "&:hover": {
                        bgcolor:
                          item == activeButton
                            ? "rgb(12, 174, 202)"
                            : "rgb(240, 244, 244)",

                        color: item == activeButton ? "white" : "black",
                        border: "none",
                      },
                    }}
                    // onClick={() => handleClick(2)}
                  >
                    {item}
                  </Button>
                </>
              ))}
          </ButtonGroup>
        </Grid>
        {/* <ButtonGroup
          variant='contained'
          aria-label='outlined primary button group'
          sx={{
            "& .MuiButton-root": {
              borderRadius: 0, // تنظیم پیش‌فرض برای همه دکمه‌ها
            },
            "& .MuiButtonGroup-grouped:first-of-type": {
              borderRadius: selectedIndex === 0 ? "60px 0 0 60px" : 0, // اعمال گوشه گرد به دکمه اول فقط در صورت فعال بودن
            },
            "& .MuiButtonGroup-grouped:last-of-type": {
              borderRadius: selectedIndex === 2 ? "0 60px 60px 0" : 0, // اعمال گوشه گرد به دکمه آخر فقط در صورت فعال بودن
            },
            "& .MuiButtonGroup-grouped": {
              "&.Mui-selected, &:active, &:focus": {
                borderRadius: "60px", // شعاع گرد برای دکمه‌های داخلی وقتی فعال یا انتخاب شده‌اند
              },
            },
          }}>
          <Button onClick={() => handleClick(0)} selected={selectedIndex === 0}
          >
            One
          </Button>
          <Button onClick={() => handleClick(1)} selected={selectedIndex === 1}>
            Two
          </Button>
          <Button onClick={() => handleClick(2)} selected={selectedIndex === 2}>
            Three
          </Button>
        </ButtonGroup>
        <ButtonGroup sx={{ direction: 'ltr' }} variant="outlined"   aria-label="Disabled button group">
        <Button
            variant='outlined'
            dir="rtl"
            sx={{
              bgcolor: "rgb(12, 174, 202)",
              color: "white",
          
              "&:hover": {
                bgcolor: "rgb(12, 174, 202)",
            
              },
            }}>
            مجلسی
          </Button>   <Button
            variant='outlined'
            dir="rtl"
            sx={{
              bgcolor: "rgb(12, 174, 202)",
              color: "white",
          
              "&:hover": {
                bgcolor: "rgb(12, 174, 202)",
            
              },
            }}>
            مجلسی
          </Button>
          <Button
            variant='outlined'
            dir="rtl"
            sx={{
              bgcolor: "rgb(12, 174, 202)",
              color: "white",
          
              "&:hover": {
                bgcolor: "rgb(12, 174, 202)",
            
              },
            }}>
            مجلسی
          </Button>
      
        </ButtonGroup> */}
        {/* <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button
              variant='outlined'
              sx={{
                bgcolor: "rgb(12, 174, 202)",
                color: "white",
                border: "none",
                "&:hover": {
                  bgcolor: "rgb(12, 174, 202)",
                  border: "none",
                },
              }}>
              مجلسی
            </Button>
          </Grid>
        </Grid> */}
        {/* {uniqeSubTitle && uniqeSubTitleButton(uniqeSubTitle).map(item=> )} */}
      </Grid>
    </Box>
  );
};

export default ModalIncrease;

// {dataList.map((item, id) => (
//   <Grid
//     item
//     xs={12}
//     sm={12}
//     md={12}
//     lg={12}
//     key={id}
//     p=' .5rem 8px '
//     width='100%'>
//     <IncreaseItem
//           data={item}
//           image={item.serviceTypeImage}
//           service_list={indexData}
//           title={item.serviceType}
//           cost={item.value}
//           id={item.id}
//         />
//     {/* {console.log(item.id)} */}
//   </Grid>
// ))}
