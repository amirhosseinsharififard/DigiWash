import axios from "axios";
const BASE_URL = "https://laundry.rahcode.co/";
const BEARER_TOKEN =
  "Jbfy467FdVFjJ7s92eiHCeTwxQf5oE3WQWgcsoCBlyld9AwWQJcvHmf9YitW";
const setHeader = {headers: {Authorization: "Bearer " + BEARER_TOKEN}};
// export const getFindUser = () => {
//   axios
//     .get(`${BASE_URL}api/findUser`, setHeader)
//     .then((result) => {
//       console.log(result.data.message);
//       return result.data.message;
//     })
//     .catch((error) => {
//       console.error(error);
//       throw error;
//     });
// };

const fetchHomePage = async () => {
  return await axios
    .get(`${BASE_URL}api/index`, {
      headers: {Authorization: "Bearer " + BEARER_TOKEN},
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

const fetchCategory_services=async () => {
  return await axios
    .get(`${BASE_URL}api/category-services/1`, {
      headers: {Authorization: "Bearer " + BEARER_TOKEN},
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};


export {BASE_URL, BEARER_TOKEN, setHeader, fetchHomePage,fetchCategory_services};
