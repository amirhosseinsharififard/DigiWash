import { Route, Routes } from "react-router-dom";

// header site asli
// import Header from "./web/Header";

//pwa site component

import HomePage from "./pwa/home/HomePage";
// import TestResponsive from "./pwa/TestResponsive";
import ServicePage from "./pwa/service/ServicePage";
import Footer from "./pwa/home/Footer";
import ModalIncrease from "./share/ModalIncrease";
import ProfilePage from "./pwa/profile/ProfilePage";
import AddressPage from "./pwa/profile/address/AddressPage";
import TransactionsPage from "./pwa/profile/transactions/TransactionsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/Modal' element={<ModalIncrease />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/profile/address' element={<AddressPage />} />
        <Route path='/profile/transactions' element={<TransactionsPage />} />
      </Routes>
      <Footer />

      {/* <TestResponsive/> */}
    </>
  );
}

export default App;
