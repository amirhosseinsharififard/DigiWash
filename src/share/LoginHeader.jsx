import {Avatar, Box, Grid, Typography} from "@mui/material";
import {checkLocalStorageUserData} from "../hooks/useLocalStorage";
import toFarsiNumber from "./functions";

const LoginHeader = () => {
  const {first_name, last_name, number, api_token, is_online} =
    checkLocalStorageUserData();

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
          {`${first_name} ${last_name}`}
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
