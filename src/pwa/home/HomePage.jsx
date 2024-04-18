import Offday from "./Offday";
import OrderPhone from "./OrderPhone";
import Services from "./Services";
import ServicesPopular from "./ServicesPopular";
import ServicesCategory from "./ServicesCategory";
import { Container } from "@mui/material";
// import HeaderPwa from "./HeaderPwa";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <div>
      <Container>
        {/* <Header /> */}
        <Offday />
        <OrderPhone />
        <Services />
        <ServicesPopular />
        <ServicesCategory />
        <Footer/>
      </Container>
    </div>
  );
};

export default HomePage;
