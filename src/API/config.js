import axios from "axios";
const BASE_URL = "https://laundry.rahcode.co/";
const BEARER_TOKEN =
  "Jbfy467FdVFjJ7s92eiHCeTwxQf5oE3WQWgcsoCBlyld9AwWQJcvHmf9YitW";
export const getFindUser = () => {
  axios
    .get(`${BASE_URL}api/findUser`, {
      headers: {Authorization: "Bearer " + BEARER_TOKEN},
    })
    .then((result) => {
      console.log(result.data.message);
      return result.data.message;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

//
export {BASE_URL,BEARER_TOKEN}