/* eslint-disable react/prop-types */
import {Button, Box} from "@mui/material";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {useLocation, useNavigate} from "react-router-dom";

const ServiceListButton = ({openOrderData}) => {
  console.log(openOrderData);
  const orders = openOrderData?.data?.services || [];
  const count = orders.reduce(
    (acc, item) => acc + (item.service_list?.length || 0),
    0
  );
  const navigate = useNavigate();
  const pathName = useLocation().pathname;
  const buttonHandler = () => {
    navigate("/basket");
  };

  // بررسی مسیر با توجه به پایان و شروع آن
  if (pathName !== "/profile" && !pathName.includes("/basket")) {
    // اضافه کردن شرط برای مسیری که شامل "/basket" است
    return (
      <>
        {count >0 && (
          <Box
            sx={{
              position: "fixed",
              bottom: 100,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 20,
              width: "100%",
              maxWidth: "768px", // محدود کردن محدوده نمایش
            }}>
            <Button
              onClick={buttonHandler}
              sx={{
                bgcolor: "rgb(12, 174, 202)",
                borderRadius: "24px",
                display: "flex", // اصلاح اشتباه تایپی
                justifyContent: "center",
                alignItems: "center", // اصلاح تایپ "alignContent"
                p: 1,
                color: "#fff",
                fontSize: 14,
                ":hover": {
                  color: "white",
                  bgcolor: "rgb(12, 174, 202)",
                },
              }}>
              <DryCleaningIcon /> {count} مورد{" "}
              <span style={{fontSize: "1px"}}>
                <ArrowBackIosNewIcon />
              </span>
            </Button>
          </Box>
        )}
      </>
    );
  }

  return null; // اضافه کردن این مقدار برای زمانی که مسیر "/profile" باشد
};

export default ServiceListButton;
