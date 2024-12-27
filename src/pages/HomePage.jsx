import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import Offday from "../components/common/Offday";
import OrderPhone from "../components/common/OrderPhone";
import Services from "../components/services/Services";
import ServicesPopular from "../components/services/ServicesPopular";
import ServicesCategory from "../components/services/ServicesCategory";
import {fetchHomePage} from "../API/requests"; // import کردن فقط متغیرهای لازم
import { checkLocalStorageUserData } from "../hooks/useLocalStorage";

// eslint-disable-next-line react/prop-types
const HomePage = ({setIsPhoneRegisterModalOpen}) => {
  const [indexData, setIndexData] = useState(null); // مقدار اولیه null به جای undefined
  const [error, setError] = useState(null); // برای مدیریت خطا

  const checkIsLogin=localStorage.getItem("userData") && checkLocalStorageUserData().is_online
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
  }, [checkIsLogin]);

  // اگر داده‌ها در حال لود هستند
  if (!indexData && !error) return <div>Loading...</div>;
  // اگر خطا رخ داده باشد
  if (error) return <div>{error}</div>;

  return (
    <>
      <Box sx={{maxWidth: "768px", m: "0rem auto 5rem"}}>
        <Offday />
        <OrderPhone />
        <Services indexData={indexData && indexData.data.service_types} />

        {/* LINK ha va tedad data ha niaz be update dare alan kar nmikone */}
        <ServicesPopular indexData={indexData.data.favorite_services} setIsPhoneRegisterModalOpen={setIsPhoneRegisterModalOpen} />
        <ServicesCategory indexData={indexData.data.categories} />

        {/* rigester Form completed need css */}
      </Box>
    </>
  );
};

export default HomePage;
