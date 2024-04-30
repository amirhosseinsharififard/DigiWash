import Offday from "./Offday";
import OrderPhone from "./OrderPhone";
import Services from "./Services";
import ServicesPopular from "./ServicesPopular";
import ServicesCategory from "./ServicesCategory";
import { Box } from "@mui/material";
import HeaderPwa from "./HeaderPwa";
// import HeaderPwa from "./HeaderPwa";
const HomePage = () => {
  return (
    <>
      <HeaderPwa />
      <Box sx={{maxWidth:"768px" ,m:"auto"}}>
        {/* <Header /> */}
        <Offday />
        <OrderPhone />
        {/* <Services /> */}
        {/* <ServicesPopular /> */}
        {/* <ServicesCategory /> */}
        </Box>
    </>
  );
};

export default HomePage;
