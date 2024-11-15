import {useState} from "react";

const useButtonClick = () => {
  const [result, setResult] = useState(false);
  // console.log(result);
  const handleButtonClick = () => {
    setResult((prev) => !prev);
  };
  return {result, handleButtonClick};
};
export default useButtonClick;
