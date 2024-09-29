import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import Offday from "./Offday";
import OrderPhone from "./OrderPhone";
import Services from "./Services";
import ServicesPopular from "./ServicesPopular";
import ServicesCategory from "./ServicesCategory";
import HeaderPwa from "./HeaderPwa";
import {fetchHomePage} from "../../API/requests"; // import کردن فقط متغیرهای لازم
import PhoneRegisterModal from "../../components/PhoneRegisterModal";

const HomePage = () => {
  const [indexData, setIndexData] = useState(null); // مقدار اولیه null به جای undefined
  const [error, setError] = useState(null); // برای مدیریت خطا

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHomePage();
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
      <Box sx={{maxWidth: "768px", m: "0rem auto 5rem"}}>
        <Offday />
        <OrderPhone />
        <Services indexData={indexData} />
        <ServicesPopular indexData={indexData} />
        <ServicesCategory indexData={indexData} />


        {/* rigester Form completed need css */}
        {/* <PhoneRegisterModal /> */}
      </Box>
    </>
  );
};

export default HomePage;
