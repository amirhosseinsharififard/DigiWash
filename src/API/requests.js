import axios from "axios";
import {checkLocalStorageUserData} from "../hooks/useLocalStorage";

const BASE_URL = "https://laundry.rahcode.co/api/";

// ************************************************ moshkel dare
// const BEARER_TOKEN = localStorage.getItem("userData").api_token
//   "KsbRD6PjiJ7v1paGMZP6au8VIbQFO6VvilLeKVkSpWLyNq0jhBmbTxMZesfy";

const BEARER_TOKEN = localStorage.getItem("userData")
  ? checkLocalStorageUserData().api_token
  : "";

// console.log(
//   localStorage.getItem("userData") &&
//     JSON.parse(localStorage.getItem("userData")).api_token
// );
// const setBT = (BT) => {
//   return BT;
// };

// *********************************************** moshkel dare
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});

const fetchHomePage = async () => {
  try {
    const response = await axiosInstance.get("index");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching home page:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

const fetchCategoryServices = async (index) => {
  try {
    const response = await axiosInstance.get(`category-services/${index}`);
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
      `send-otp?phone_number=${phoneNumber}`
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
      `verify-otp?phone_number=${phoneNumber}&code=${code}`
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
      `register?first_name=${firstName}&phone_number=${phoneNumber}&code=${code}&last_name=${lastName}`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

//  ************ inja dare modam request mifreste**************
const fetchOpenOrder = async () => {
  // console.log("object")
  try {
    const response = await axiosInstance.get(`open-orders`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

const fetchAddToOpenOrder = async (idForAdd) => {
  // console.log("object")
  try {
    const response = await axiosInstance.get(`addToOpenOrder/${idForAdd}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};
const fetchRemoveToOpenOrder = async (idForRemove) => {
  // console.log("object")
  try {
    const response = await axiosInstance.get(`removeFromOpenOrder/${idForRemove}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching send Otp:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

const fetchAddAddress = async (name, driverAddress, lat, lng) => {
  // console.log(nameAddress)
  // console.log(addressDriver)
  // console.log(lat)
  // console.log(lng)
  try {
    const response = await axiosInstance.post(
      `addAddress?name=${name}&address=${driverAddress}&lat=${lat}&lng=${lng}`
    );

    console.log(response);

    return response.data; // بررسی کنید که آیا نیاز به دسترسی به داده‌ها به صورت خاصی دارید
  } catch (error) {
    if (error.response) {
      console.error("خطا در داده‌ها:", error.response.data);
      console.error("وضعیت خطا:", error.response.status);
    } else {
      console.error("خطا:", error.message);
    }
  }
};
const fetchRemoveAddress = async (id) => {
  // console.log(nameAddress)
  // console.log(addressDriver)
  // console.log(lat)
  // console.log(lng)
  try {
    const response = await axiosInstance.get(`removeAddress/${id}`);

    console.log(response.data);

    return response.data; // بررسی کنید که آیا نیاز به دسترسی به داده‌ها به صورت خاصی دارید
  } catch (error) {
    if (error.response) {
      console.error("خطا در داده‌ها:", error.response.data);
      console.error("وضعیت خطا:", error.response.status);
    } else {
      console.error("خطا:", error.message);
    }
  }
};
const fetchAddresses = async () => {
  // console.log(nameAddress)
  // console.log(addressDriver)
  // console.log(lat)
  // console.log(lng)
  try {
    const response = await axiosInstance.get(`addresses`);

    console.log(response.data);

    return response.data; // بررسی کنید که آیا نیاز به دسترسی به داده‌ها به صورت خاصی دارید
  } catch (error) {
    if (error.response) {
      console.error("خطا در داده‌ها:", error.response.data);
      console.error("وضعیت خطا:", error.response.status);
    } else {
      console.error("خطا:", error.message);
    }
  }
};


const fetchModalTransfer = async (address_id,delivery_date,orderDate,orderUnix) => {
  // console.log(nameAddress)
  // console.log(addressDriver)
  // console.log(lat)
  // console.log(lng)
  try {
    const response = await axiosInstance.post(`FinalizeOrder?address_id=${address_id}&delivery_date=${delivery_date}&orderDate=${orderDate}&orderUnix=${orderUnix}`);

    console.log(response.data);

    return response.data; // بررسی کنید که آیا نیاز به دسترسی به داده‌ها به صورت خاصی دارید
  } catch (error) {
    if (error.response) {
      console.error("خطا در داده‌ها:", error.response.data);
      console.error("وضعیت خطا:", error.response.status);
    } else {
      console.error("خطا:", error.message);
    }
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
  fetchOpenOrder,
  fetchRemoveToOpenOrder,
  fetchAddToOpenOrder,
  fetchAddAddress,
  fetchRemoveAddress,
  fetchAddresses,
  fetchModalTransfer
  // setBT,
};
