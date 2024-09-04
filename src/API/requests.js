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

const getIndex =  () => {
   axios
    .get(`${BASE_URL}/api/index`, setHeader)
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};

export {BASE_URL, BEARER_TOKEN, getIndex,setHeader};

