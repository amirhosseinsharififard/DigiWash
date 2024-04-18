import Offday from "./home/Offday";
import OrderPhone from "./home/OrderPhone";
import Services from "./home/Services";
import ServicesPopular from "./home/ServicesPopular";
import ServicesCategory from "./home/ServicesCategory";
import { Container } from "@mui/material";
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
      </Container>
    </div>
  );
};

export default HomePage;