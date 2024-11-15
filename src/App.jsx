/* eslint-disable no-unused-vars */
import {Route, Routes} from "react-router-dom";

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

import {ThemeProvider} from "@mui/material";
import theme from "./Theme";
import EditPage from "./pwa/profile/edit/EditPage";
import Basket from "./page/Basket";
import PhoneRegisterModal from "./components/PhoneRegisterModal";
import {useEffect, useState} from "react";
import {checkLocalStorageUserData} from "./hooks/useLocalStorage";
import { BEARER_TOKEN } from "./API/requests";
import HeaderPwa from "./pwa/home/HeaderPwa";
// import {BEARER_TOKEN, setBT} from "./API/requests";

function App() {
  const [isPhoneRegisterModalOpen, setIsPhoneRegisterModalOpen] =
    useState(false);
  const localStorageGetItem = localStorage.getItem("userData")
  useEffect(() => {
    // console.log(checkLocalStorageUserData().api_token);
    // setBT(checkLocalStorageUserData().api_token)
    console.log("BEARER_TOKEN")
    console.log(BEARER_TOKEN)
  
  
  }, [localStorageGetItem]);
  return (
    <>
      <ThemeProvider theme={theme}>
      <HeaderPwa setIsPhoneRegisterModalOpen={setIsPhoneRegisterModalOpen} />

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
          {/* <Route path='/profile/transactions' element={<TransactionsPage />} /> */}
          {/* <Route path='/profile/edit' element={<EditPage />} /> */}
          <Route path='/basket' element={<Basket />} />
        </Routes>
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
