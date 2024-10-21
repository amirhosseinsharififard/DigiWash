import axios from "axios";

const BASE_URL = "https://laundry.rahcode.co/";
const BEARER_TOKEN =
  "KsbRD6PjiJ7v1paGMZP6au8VIbQFO6VvilLeKVkSpWLyNq0jhBmbTxMZesfy";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});

const fetchHomePage = async () => {
  try {
    const response = await axiosInstance.get("api/index");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching home page:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

const fetchCategoryServices = async (index) => {
  try {
    const response = await axiosInstance.get(`api/category-services/${index}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching category services:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

// baraye set kardan shomare mobaile
const fetchSendOtp = async (phoneNumber) => {
  // console.log(phoneNumber);

  try {
    const response = await axiosInstance.post(
      `api/send-otp?phone_number=${phoneNumber}`
    );

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

//baraye vorod mojadad be site
const fetchVerifyOtp = async (phoneNumber, code) => {
  // console.log(phoneNumber);
  // console.log(code);

  try {
    const response = await axiosInstance.post(
      `api/verify-otp?phone_number=${phoneNumber}&code=${code}`
    );

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

//baraye sabtnam avalye
const fetchRegisterOtp = async (firstName, phoneNumber, code, lastName) => {
  // console.log(firstName);
  // console.log(phoneNumber);
  // console.log(code);
  // console.log(lastName);

  try {
    const response = await axiosInstance.post(
      `api/register?first_name=${firstName}&phone_number=${phoneNumber}&code=${code}&last_name=${lastName}`
    );

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

const fetchOpenOrder = async () => {
  // console.log("object")
  try {
    const response = await axiosInstance.get(`api/open-orders`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

const fetchAddToOpenOrder = async (idForAdd) => {
  // console.log("object")
  try {
    const response = await axiosInstance.get(`api/addToOpenOrder/${idForAdd}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};
const fetchRemoveToOpenOrder = async (idForAdd) => {
  // console.log("object")
  try {
    const response = await axiosInstance.get(`api/removeFromOpenOrder/${idForAdd}`);
    console.log(response.data);
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
  fetchRegisterOtp,
  fetchOpenOrder,fetchRemoveToOpenOrder,fetchAddToOpenOrder
};
