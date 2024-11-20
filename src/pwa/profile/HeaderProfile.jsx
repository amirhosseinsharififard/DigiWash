import {Box, Button, Grid, Typography} from "@mui/material";
import {Link, useLocation} from "react-router-dom";

// logo
import LogoPwa from "../../../assets/LogoPwa.png";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import WalletIcon from "@mui/icons-material/Wallet";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import toFarsiNumber from "../../share/functions";
import { useEffect, useState} from "react";
import { checkLocalStorageUserData } from "../../hooks/useLocalStorage";

const HeaderProfile = () => {
  const [user, setUser] = useState();
  useEffect(()=>{
    setUser(checkLocalStorageUserData)
  },[])
  const pathName = useLocation().pathname;
  // const personAccout = {
  //   nameAccount: "amir sharifi",
  //   cellPhoneNumber: "09172384087",
  //   costAccount: "0",
  // };
console.log(user)


  return (
    <>
      <Box sx={{bgcolor: "#0caeca", borderRadius: "0 0 24px 24px "}}>
        <Box
          sx={{
            maxWidth: "768px",
            m: "auto",
            display: "flex",
            alignItems: "container",
            flexDirection: "column",
            p: "2rem 1rem 0 1rem ",
          }}>
          {/* blue zone */}
          <Grid
            container
            sx={{
              display: "flex",
              alignContent: "space-betweens",
              alignItems: "center",
              justifyContent: "space-between",
              p: "1.5rem 1.5rem .7rem 1.5rem",
              color: "white",
            }}>
            <>
              <Grid item display='flex'>
                <img src={LogoPwa} height='64px' width='64px' />
                <Box mr={2}>
                  <Typography
                    variant='h6'
                    fontSize='16px'
                    fontFamily='Vazir-Bold'
                    fontWeight='bold'>
                    {user ? user.first_name : ""}
                  </Typography>
                  <Typography
                    variant='body2'
                    fontSize='14px'
                    fontFamily='Vazir'
                    fontWeight='bold'>
                    {toFarsiNumber(user ? user.number : "")}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Link
                  to='/profile/edit'
                  style={{
                    padding: "1.5rem 2rem",
                    fontWeight: "bold",
                  }}>
                  <CreateOutlinedIcon sx={{color: "white"}} />
                </Link>
              </Grid>
            </>
          </Grid>

          {/* white zone */}
          <Grid
            container
            border='1px solid rgba(0,0,0,.1)'
            borderBottom='none'
            sx={{
              bgcolor: "white",
              borderRadius: "16px 16px 0 0",
              display: "flex",
              alignContent: "space-betweens",
              justifyContent: "space-between",
              p: "1rem 1.5rem .7rem 1.5rem",
              maxWidth: "768px",
              m: "auto",
            }}>
            <Grid item display='flex' xs={6} sm={6} md={6} lg={6}>
              <Typography
                variant='h6'
                fontWeight='bold'
                fontFamily='Vazir-Bold'
                fontSize='16px'>
                {/* <span>{toFarsiNumber(personAccout.costAccount)}</span> تومان */}
                اعتبار
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} textAlign='end'>
              <Button
                sx={{
                  color: "#0caeca",
                  bgcolor: "white",
                  p: ".5rem 1rem",
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontFamily: "Vazir",

                  "&:hover": {
                    background: "none",
                  },
                }}>
                افزایش اعتبار
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* secound white zone */}
      <Box sx={{maxWidth: "768px", m: "auto"}}>
        <Grid
          container
          bgcolor='white'
          border='1px solid rgba(0,0,0,.1)'
          borderRadius=' 0 0 16px 16px'
          borderTop='none'>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignContent='center'
            alignItems='center'
            m='2rem 0'>
            <Box
              display='flex'
              justifyContent='center'
              alignContent='center'
              alignItems='center'>
              <WalletIcon sx={{color: "#0caeca"}} />
              <Typography
                variant='h6'
                fontFamily='Vazir'
                fontSize='16px'
                mr={2}>
                کیف پول
              </Typography>
            </Box>
            <Typography
              variant='body1'
              fontFamily='Vazir-Light'
              fontSize='14px'>
              need Api
              {/* <span>{toFarsiNumber(personAccout.costAccount)}</span> تومان */}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignContent='center'
            alignItems='center'
            borderRight='1px solid rgba(0,0,0,.1)'
            m='2rem 0'>
            <Box
              display='flex'
              justifyContent='center'
              alignContent='center'
              alignItems='center'>
              <CardGiftcardIcon sx={{color: "#0caeca"}} />

              <Typography
                variant='h6'
                fontFamily='Vazir'
                fontSize='16px'
                mr={2}>
                اعتبار هدیه
              </Typography>
            </Box>
            <Typography
              variant='body1'
              fontFamily='Vazir-Light'
              fontSize='14px'>
              need Api
               {/* <span>{toFarsiNumber(personAccout.costAccount)}</span> تومان */}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeaderProfile;
