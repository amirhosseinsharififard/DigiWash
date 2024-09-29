import axios from "axios";

const BASE_URL = "https://laundry.rahcode.co/";
const BEARER_TOKEN = "Jbfy467FdVFjJ7s92eiHCeTwxQf5oE3WQWgcsoCBlyld9AwWQJcvHmf9YitW";

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

const fetchCategoryServices = async () => {
  try {
    const response = await axiosInstance.get("api/category-services/1");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching category services:", error);
    throw error; // بازگرداندن خطا برای مدیریت در جای دیگر
  }
};

export { BASE_URL, BEARER_TOKEN, fetchHomePage, fetchCategoryServices };
