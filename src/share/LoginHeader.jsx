import { Avatar, Box, Grid, Typography } from "@mui/material";

const LoginHeader = () => {
  const personName = { nameAcount: "amir sharifi", cost: "0", avatarImage: "" };

  return (
      <Grid item  display="flex" alignContent="center" alignItems='center' >
        <Avatar src='' sx={{ width: "70px", height: "70px" }}>
          {personName.nameAcount[0]}
        </Avatar>
        <Box display="flex" flexDirection="column" alignContent="center" alignItems='center' mr={3}>
        <Typography variant='h5' fontWeight='bold'>
          {personName.nameAcount}
        </Typography>
        <Typography variant="h6" color="rgb(56, 90, 118)"> {personName.cost} تومان اعتبار </Typography>
        </Box>
      </Grid>
  );
};

export default LoginHeader;
