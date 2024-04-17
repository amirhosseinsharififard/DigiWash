// header site asli
// import Header from "./web/Header";
import { Route, Routes } from "react-router-dom";
import HeaderPwa from "./pwa/HeaderPwa";

import HomePage from "./pwa/HomePage";
import Footer from "./pwa/Footer";

//pwa site component

function App() {
  return (
    <>
      <HeaderPwa />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
