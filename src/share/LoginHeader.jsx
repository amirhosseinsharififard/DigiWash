import { Avatar, Box, Grid, Typography } from "@mui/material";

const LoginHeader = () => {
  const personName = { nameAcount: "amir sharifi", cost: "0", avatarImage: "" };

  return (
      <Grid item  display="flex" alignContent="center" alignItems='center' >
        <Avatar src='' sx={{ width: "48px", height: "48px" }}>
          {personName.nameAcount[0]}
        </Avatar>
        <Box display="flex" flexDirection="column" alignContent="center" alignItems='center' pr="8px">
        <Typography variant='h5' fontWeight='bold' fontSize="16px">
          {personName.nameAcount}
        </Typography>
        <Typography variant="h6" fontWeight="bold" fontSize="12px" color="rgb(56, 90, 118)"> {personName.cost} تومان اعتبار </Typography>
        </Box>
      </Grid>
  );
};

export default LoginHeader;
