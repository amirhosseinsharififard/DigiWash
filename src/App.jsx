/* eslint-disable no-unused-vars */
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

//pwa site component

import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/layout/Footer";
import ModalIncrease from "./components/common/ModalIncrease";
import ProfilePage from "./pages/ProfilePage";
import AddressPage from "./components/address/AddressPage";
import TransactionsPage from "./components/transactions/TransactionsPage";
// theme provider mui
import {ThemeProvider} from "@mui/material";
import theme from "./Theme";

import EditPage from "./components/edit/EditPage";
import Basket from "./pages/Basket";
import PhoneRegisterModal from "./components/common/PhoneRegisterModal";
import Header from "./components/layout/Header";
import ServiceListButton from "./components/common/ServiceListButton";

// TODO check konam
// import ModalBasketTransfer from "./components/ModalBasketTransfer";
// import {checkLocalStorageUserData} from "./hooks/useLocalStorage";
// import { BEARER_TOKEN } from "./API/requests";
// import {BEARER_TOKEN, setBT} from "./API/requests";

function App() {
  const [isPhoneRegisterModalOpen, setIsPhoneRegisterModalOpen] =
    useState(false);
  const localStorageGetItem = localStorage.getItem("userData");
  useEffect(() => {}, [localStorageGetItem]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header setIsPhoneRegisterModalOpen={setIsPhoneRegisterModalOpen} />

        <Routes>
          <Route
            path='/'
            element={
              <HomePage
                setIsPhoneRegisterModalOpen={setIsPhoneRegisterModalOpen}
              />
            }
          />
          <Route path='/services/:id' element={<ServicePage />} />
          <Route path='' element={<ModalIncrease />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/profile/address' element={<AddressPage />} />
          <Route path='/profile/transactions' element={<TransactionsPage />} />
          <Route path='/profile/edit' element={<EditPage />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
        <ServiceListButton/>
        
        <Footer />
        <PhoneRegisterModal
          isPhoneRegisterModalOpen={isPhoneRegisterModalOpen}
          setIsPhoneRegisterModalOpen={setIsPhoneRegisterModalOpen}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
