import { Container, Typography } from "@mui/material";
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
    clickData:false,
    specialStyle: "",
    address: "/profile/address",
    title: "ادرس",
    dataIcon: <LocationOnIcon style={{ color: "#0caeca", fontSize: "35" }} />
  },
  {
    clickData:false,
    specialStyle: "",
    address: "/profile/transactions",
    title: "لیست تراکنش ها",
    dataIcon: <CreditCardIcon style={{ color: "#0caeca", fontSize: "35" }} />
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
    clickData:false,
    specialStyle: "",
    address: "/profile/question",
    title: "سوالات متداول",
    dataIcon: (
      <HelpOutlineOutlinedIcon style={{ opacity: "50%", fontSize: "35" }} />
    )
  },
  {
    clickData:false,
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
      <LogoutIcon style={{ color: "red", opacity: "50%", fontSize: "35" }} />
    ),
    specialStyle: "red",
    clickData:false,
  }
];
const MyDigiWash = () => {
  return (
    <Container sx={{ mt: "6rem" }}>
      <Typography variant='h5' fontWeight='bold'>
        دیجی واش من
      </Typography>
      <MyDigiWashSection data={dataMyDigiWash} />
      <MyDigiWashSection data={dataMyDigiWashSecond} />
      <MyDigiWashSection data={dataMyDigiWashLive} />
    </Container>
  );
};

export default MyDigiWash;
