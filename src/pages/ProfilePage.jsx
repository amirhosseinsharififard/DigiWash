import {Box} from "@mui/material";
import ProfileHeader from "../components/layout/HeaderProfile";
import MyDigiWash from "../components/MyDigiWash";
import {checkLocalStorageUserData} from "../hooks/useLocalStorage";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const ProfilePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = checkLocalStorageUserData();

    if (userData == undefined) navigate("/");
  },[]);

  return (
    <Box m='0'>
      <ProfileHeader />
      <MyDigiWash />
    </Box>
  );
};

export default ProfilePage;
