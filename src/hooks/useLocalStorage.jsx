
const setLocalStorageHandler = (userSetData) => {
  const localStorageGetItem = localStorage.getItem("userData");
  if (localStorageGetItem == null || !localStorage) {
    localStorage.setItem("userData", JSON.stringify(userSetData));
  }
};

const checkLocalStorageUserData = () => {
  const localStorageGetItem = localStorage.getItem("userData");
  // console.log(JSON.parse(localStorageGetItem));
  if (localStorageGetItem) {
    const userData = JSON.parse(localStorageGetItem);
    const {first_name, last_name, number, api_token, is_online} = userData;
    return {first_name, last_name, number, api_token, is_online};
  }
};

export {checkLocalStorageUserData, setLocalStorageHandler};
