import axios from "axios";

const BASE_URL = "https://laundry.rahcode.co/";
const BEARER_TOKEN =
  "2gEQgFviCaN9A5tcyiyFE66TvGuIjwYFaOyw000BVnrowKscDym2YhgMYLlF";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});

const fetchHomePage = async () => {
  try {
    const response = await axiosInstance.get("api/index");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching home page:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

const fetchCategoryServices = async (index) => {
  try {
    const response = await axiosInstance.get(`api/category-services/${index}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching category services:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

// baraye set kardan shomare mobaile
const fetchSendOtp = async (phoneNumber) => {
  console.log(phoneNumber);

  try {
    const response = await axiosInstance.post(
      `api/send-otp?phone_number=${phoneNumber}`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

//baraye vorod mojadad be site
const fetchVerifyOtp = async (phoneNumber, code) => {
  console.log(phoneNumber);
  console.log(code);

  try {
    const response = await axiosInstance.post(
      `api/verify-otp?phone_number=${phoneNumber}&code=${code}`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

//baraye sabtnam avalye
const fetchregisterOtp = async (firstName, phoneNumber, code, lastName) => {
  console.log(firstName);
  console.log(phoneNumber);
  console.log(code);
  console.log(lastName);

  try {
    const response = await axiosInstance.post(
      `api/register?first_name=${firstName}&phone_number=${phoneNumber}&code=${code}&last_name=${lastName}`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

const fetchOpenOrder = async () => {
  try {
    const response = await axiosInstance.get(`api/open-orders`);

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

export {
  BASE_URL,
  BEARER_TOKEN,
  fetchHomePage,
  fetchCategoryServices,
  fetchSendOtp,
  fetchVerifyOtp,
  fetchregisterOtp,
  fetchOpenOrder
};
