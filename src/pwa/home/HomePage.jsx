// import Offday from "./Offday";
// import OrderPhone from "./OrderPhone";
// import Services from "./Services";
// import ServicesPopular from "./ServicesPopular";
// import ServicesCategory from "./ServicesCategory";
// import {Box} from "@mui/material";
// import HeaderPwa from "./HeaderPwa";
// import {useEffect, useState} from "react";
// import axios from "axios";
// import {BASE_URL, BEARER_TOKEN, fetchIndex} from "../../API/requests";
// // import HeaderPwa from "./HeaderPwa";
// const HomePage = () => {
//   const [indexData, setIndexData] = useState();
//   useEffect(() => {
 
// fetchIndex().then(res=>setIndexData(res))
//   }, []);
//   console.log(indexData?indexData:"")
//   return (
//     <>
//       <HeaderPwa />
//       <Box sx={{maxWidth: "768px", m: "0rem auto 5rem"}}>
//         {/* <Header /> */}
//         <Offday />
//         <OrderPhone />
//         <Services indexData={indexData} />
//         <ServicesPopular indexData={indexData} />
//         <ServicesCategory indexData={indexData} />
//       </Box>
//     </>
//   );
// };

// export default HomePage;



import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Offday from "./Offday";
import OrderPhone from "./OrderPhone";
import Services from "./Services";
import ServicesPopular from "./ServicesPopular";
import ServicesCategory from "./ServicesCategory";
import HeaderPwa from "./HeaderPwa";
import { fetchIndex } from "../../API/requests"; // import کردن فقط متغیرهای لازم
import PhoneRegisterModal from "../../components/PhoneRegisterModal";

const HomePage = () => {
  const [indexData, setIndexData] = useState(null); // مقدار اولیه null به جای undefined
  const [error, setError] = useState(null); // برای مدیریت خطا

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIndex();
        setIndexData(data);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    fetchData(); // فراخوانی تابع غیرهمزمان
  }, []);

  // اگر داده‌ها در حال لود هستند
  if (!indexData && !error) return <div>Loading...</div>;
  // اگر خطا رخ داده باشد
  if (error) return <div>{error}</div>;

  return (
    <>
      <HeaderPwa />
      <Box sx={{ maxWidth: "768px", m: "0rem auto 5rem" }}>
        <Offday />
        <OrderPhone />
        <Services indexData={indexData} />
        <ServicesPopular indexData={indexData} />
        <ServicesCategory indexData={indexData} />
      <PhoneRegisterModal />
      </Box>
    </>
  );
};

export default HomePage;
