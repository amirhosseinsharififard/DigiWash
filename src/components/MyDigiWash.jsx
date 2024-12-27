import { Link } from "react-router-dom";
import { Box,  Typography } from "@mui/material";
import MyDigiWashSection from "./MyDigiWashSection";

// Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import LogoutIcon from "@mui/icons-material/Logout";

// data
const dataMyDigiWash = [
  {
    clickData: false,
    specialStyle: "",
    address: "/profile/address",
    title: "ادرس",
    leaveAccount:false
,
    dataIcon: (
      <LocationOnIcon
        style={{ color: "#0caeca", width: "24px", height: "24px" }}
      />
    )
  },
  {
    clickData: false,
    specialStyle: "",
    address: "/profile/transactions",
    title: "لیست تراکنش ها",
    leaveAccount:false
,
    dataIcon: (
      <CreditCardIcon
        style={{ color: "#0caeca", width: "24px", height: "24px" }}
      />
    )
  }
];

const dataMyDigiWashSecond = [
  {
    clickData: true,
    specialStyle: "",
    address: "",
    title: "تماس با پشتیبانی",
    leaveAccount:false
,
    dataIcon: (
      <PhoneInTalkOutlinedIcon style={{ opacity: "50%", fontSize: "35" }} />
    )
  },
  {
    clickData: false,
    specialStyle: "",
    address: "/profile/question",
    title: "سوالات متداول",
    leaveAccount:false
,
    dataIcon: (
      <HelpOutlineOutlinedIcon style={{ opacity: "50%", fontSize: "35" }} />
    )
  },
  {
    clickData: false,
    specialStyle: "",
    address: "/profile/rules",
    title: "قوانین و مقررات",
    leaveAccount:false
,
    dataIcon: <DescriptionIcon style={{ opacity: "50%", fontSize: "35" }} />
  }
];

const dataMyDigiWashLive = [
  {
    address: "/",
    title: "خروج از حساب کاربری",
    dataIcon: (
      <LogoutIcon
        style={{ color: "red", opacity: "50%", width: "24px", height: "24px" }}
      />
    ),
    specialStyle: "red",
    clickData: true,
    leaveAccount:true
  }
];
const MyDigiWash = () => {
  return (
    <Box sx={{ maxWidth: "768px", m: "3rem auto 5rem" }}>
      <Typography
        variant='h5'
        fontSize='18px'
        fontFamily='Vazir-bOLD'
        fontWeight='Bold'
        mr="2rem"
        >
        دیجی واش من
      </Typography>
      <MyDigiWashSection data={dataMyDigiWash} />
      <MyDigiWashSection data={dataMyDigiWashSecond} />
      <MyDigiWashSection data={dataMyDigiWashLive} />
    </Box>
  );
};

export default MyDigiWash;
