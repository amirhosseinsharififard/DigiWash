import { Route, Routes } from "react-router-dom";



// header site asli
// import Header from "./web/Header";


//pwa site component

import HomePage from "./pwa/home/HomePage";
// import TestResponsive from "./pwa/TestResponsive";
import ServicePage from "./pwa/service/ServicePage";
import HeaderPwa from "./pwa/home/HeaderPwa";
function App() {
  return (
    <>
        <HeaderPwa/>

      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='/' element={<ServicePage />} />
      </Routes>
      {/* <TestResponsive/> */}
    </>
  );
}

export default App;
