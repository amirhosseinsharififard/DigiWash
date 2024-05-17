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
    dataIcon: (
      <PhoneInTalkOutlinedIcon style={{ opacity: "50%", fontSize: "35" }} />
    )
  },
  {
    clickData: false,
    specialStyle: "",
    address: "/profile/question",
    title: "سوالات متداول",
    dataIcon: (
      <HelpOutlineOutlinedIcon style={{ opacity: "50%", fontSize: "35" }} />
    )
  },
  {
    clickData: false,
    specialStyle: "",
    address: "/profile/rules",
    title: "قوانین و مقررات",
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
    clickData: false
  }
];
const MyDigiWash = () => {
  return (
    <Box sx={{ maxWidth: "768px", m: "3rem 1rem" }}>
      <Typography
        variant='h5'
        fontSize='18px'
        fontFamily='Vazir-bOLD'
        fontWeight='Bold'>
        دیجی واش من
      </Typography>
      <MyDigiWashSection data={dataMyDigiWash} />
      <MyDigiWashSection data={dataMyDigiWashSecond} />
      <MyDigiWashSection data={dataMyDigiWashLive} />
    </Box>
  );
};

export default MyDigiWash;
