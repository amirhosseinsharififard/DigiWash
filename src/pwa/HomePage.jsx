import Offday from "./Offday";
import OrderPhone from "./OrderPhone";
import Services from "./Services";
import ServicesPopular from "./ServicesPopular";
import ServicesCategory from "./ServicesCategory";
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
