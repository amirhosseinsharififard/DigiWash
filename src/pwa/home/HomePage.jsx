import Offday from "./Offday";
import OrderPhone from "./OrderPhone";
import Services from "./Services";
import ServicesPopular from "./ServicesPopular";
import ServicesCategory from "./ServicesCategory";
import { Container } from "@mui/material";
// import HeaderPwa from "./HeaderPwa";
const HomePage = () => {
  return (
    <>
      <Container sx={{mb:"20px"}}>
        {/* <Header /> */}
        <Offday />
        <OrderPhone />
        <Services />
        <ServicesPopular />
        <ServicesCategory />
      </Container>
    </>
  );
};

export default HomePage;
