// header site asli
// import Header from "./web/Header";

//pwa site component
import HeaderPwa from "./pwa/HeaderPwa";
import Offday from "./pwa/Offday";
import OrderPhone from "./pwa/OrderPhone";
import Services from "./pwa/Services";
import ServicesPopular from "./pwa/ServicesPopular";
import ServicesCategory from "./pwa/ServicesCategory";
function App() {
  return (
    <>
      {/* <Header /> */}
      <HeaderPwa />
      <Offday />
      <OrderPhone />
      <Services />
      <ServicesPopular />
      <ServicesCategory />
    </>
  );
}

export default App;
