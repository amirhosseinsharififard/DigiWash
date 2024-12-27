import {Avatar, Box, Grid, Typography} from "@mui/material";
import {checkLocalStorageUserData} from "../../hooks/useLocalStorage";
import toFarsiNumber from "../../utils/functions";

const LoginHeader = () => {
  const userData =
    localStorage.getItem("userData") && checkLocalStorageUserData();

  const first_name = userData ? userData.first_name : "";

  const last_name = userData ? userData.last_name : "";

  return (
    <Grid item display='flex' alignContent='center' alignItems='center'>
      <Avatar src='' sx={{width: "48px", height: "48px"}}>
        {first_name[0]}
      </Avatar>
      <Box
        display='flex'
        flexDirection='column'
        alignContent='center'
        alignItems='center'
        pr='8px'>
        <Typography variant='h5' fontWeight='bold' fontSize='16px'>
          {`${first_name && first_name} ${last_name && last_name}`}
        </Typography>
        <Typography
          variant='h6'
          fontWeight='bold'
          fontSize='12px'
          color='rgb(56, 90, 118)'>
          {toFarsiNumber(0)} تومان اعتبار
        </Typography>
      </Box>
    </Grid>
  );
};

export default LoginHeader;
