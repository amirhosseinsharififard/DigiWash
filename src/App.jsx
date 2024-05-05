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

import { ThemeProvider } from "@mui/material";
import theme from "./Theme";
import EditPage from "./pwa/profile/edit/EditPage";
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicePage />} />
        {/* <Route path='' element={<ModalIncrease />} /> */}
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/profile/address' element={<AddressPage />} />
        <Route path='/profile/transactions' element={<TransactionsPage />} />
        <Route path='/profile/edit' element={<EditPage />} />
      </Routes>
      <Footer />
      </ThemeProvider>
      {/* <ModalIncrease /> */}
      {/* <TestResponsive/> */}
    </>
  );
}

export default App;
