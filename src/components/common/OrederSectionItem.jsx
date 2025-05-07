/* eslint-disable react/prop-types */
import {Box, Grid, Typography} from "@mui/material";
// import {persianPrice} from "../share/functions";
import {useEffect, useState} from "react";
import OrederSectionItemContent from "../common/OrederSectionItemContent";
import {persianPrice} from "../../utils/functions";

const OrederSectionItem = ({
  orders,
  setCollectAllProductLength,
  service_list,
  setReloadKey,
  setSumPriceProducts,
}) => {
  const [sums, setSums] = useState(new Map()); // state برای ذخیره مجموع هزینه‌ها
  const findListDatas =
    service_list && service_list.length > 0
      ? service_list.reduce((acc, item) => {
          item.service_list.forEach((itemId) => {
            acc[itemId.service_id] = itemId.qty; // به ازای هر service_id مقدار qty را به شیء اضافه می‌کند
          });
          return acc;
        }, {}) // مقدار اولیه را به عنوان یک شیء خالی مشخص کنید
      : {};
  const calculateSums = () => {
    const reduceCost = new Map(); // Map برای ذخیره مجموع هزینه‌ها

    // محاسبه مجموع هزینه‌ها بر اساس خدمات
    orders.forEach((item) => {
      const {name, service_list} = item;

      if (service_list && Array.isArray(service_list)) {
        service_list.forEach((service) => {
          const totalValue = Number(service.qty) * Number(service.value);

          // به‌روزرسانی reduceCost
          if (reduceCost.has(name)) {
            reduceCost.set(name, reduceCost.get(name) + totalValue);
          } else {
            reduceCost.set(name, totalValue);
          }
        });
      }
    });
    setSums(reduceCost); // به‌روزرسانی State
  };
  // محاسبه مجموع‌ها هنگام بارگذاری کامپوننت
  useEffect(() => {
    calculateSums(); // محاسبه مجموع هزینه‌ها
    if (sums.size > 0) {
      setCollectAllProductLength(productLength(sums)); // ارسال طول محصولات به تابع
      setSumPriceProducts(sums && sums);
    }
    // console.log(sums)
  }, [orders]); // وابسته به orders و sums
  const productLength = (item) => {
    const keys = Array.from(item.keys()); // گرفتن کلیدهای Map
    // console.log(item); // نمایش Map
    // console.log(keys); // نمایش کلیدها
    return keys;
  };
  return (
    <>
      <Grid
        bgcolor='white'
        style={{
          width: "100%",
          borderRadius: "30px",
        }}>
        <Box
          sx={{
            p: "1.50rem ",
          }}>
          {orders &&
            orders.map((item, i) => (
              <Grid
                key={i}
                container
                sx={{
                  border: "1px solid rgb(235, 241, 242)",
                  borderRadius: "12px",
                  bgcolor: "rgb(237, 252, 255)",
                  display: "flex",
                  justifyContent: "space-between",

                  mb: 2,
                }}>
                {/* {console.log(item.name)} */}
                <Grid
                  key={item.id}
                  item
                  m='1rem .7rem 0.2rem '
                  display='flex'
                  justifyContent='space-between'
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}>
                  <>
                    <Typography fontSize='16px' fontFamily='Vazir'>
                      {item.name}
                    </Typography>
                    <Typography fontSize='12px' fontFamily='Vazir'>
                      درمجموع:
                      <span
                        style={{
                          fontFamily: "Vazir",
                          fontWeight: "bold",
                          marginRight: "2px",
                        }}>
                        {persianPrice(sums && sums.get(item.name))} تومان
                      </span>
                    </Typography>

                    {/* {console.log(sums["شلوار"])} برای بررسی مقادیر */}
                    {/* {console.log(reduceCost)} برای بررسی مقادیر */}
                  </>
                </Grid>
                <Grid item m='1rem .7rem ' xs={12} sm={12} md={12} lg={12}
                 sx={{
    '& > :nth-last-child(2)': {
      mb: '2rem', // دومین آیتم از آخر
    },
  }}
                >
                  {item.service_list.map((item2) => (
                    <>
                      <OrederSectionItemContent
                        setReloadKey={setReloadKey}
                        key={item2.id}
                        id={item2.service_id}
                        cost={item2.value}
                        title={item2.service_type}
                        quantity={item2.qty}
                        data={item2}
                        findListDatas={findListDatas}
                      />
                    </>
                  ))}

                  <Box display={"flex"} gap={1} flexDirection={"row"} mt="">
                    {item?.service_list.map((item3) => (
                      <Typography
                        key={item3.id}
                        borderRadius={"16px"}
                        p='8px'
                        bgcolor='white'
                        display='inline-block' fontFamily={"Vazir"} fontWeight={500}>
                        {item3.qty} <span style={{color: "#7fcfdd"}}>|</span>{" "}
                        {item3.service_type}
                      </Typography>
                    ))}
                  </Box>
                  {console.log(item.service_list)}
                </Grid>
              </Grid>
            ))}
        </Box>
      </Grid>
    </>
  );
};

export default OrederSectionItem;
