/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Check, CheckBox } from "@mui/icons-material";
import {
  Box,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  FormControlLabel,
  Checkbox,
  Stack,
  Radio,
} from "@mui/material";
import {Link} from "react-router-dom";

const ModalBasketTransfer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "4",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(15px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}>
      <Link
        style={{
          width: "100vw",
          height: "100vh",
          zIndex: 2,
          position: "absolute",
        }}
      />

      <Grid
        container
        sx={{
          backgroundColor: "white",
          //   borderRadius: "16px 16px 0 0",
          //   m: "0 auto",
          //   maxWidth: "768px",
          //   p: "2rem 1rem",
          zIndex: 3,
          borderRadius: "16px 16px 0 0",
          m: "0 auto",
          maxWidth: "768px",
          maxHeight: "70vh",
          overflow: "auto",
        }}>
        <Grid
          container
          sx={{
            borderRadius: "16px",
            bgcolor: "rgb(242, 247, 247)",
            m: "0 auto",
            p: "2rem 1rem",
          }}>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={".5rem"}>
            <Typography
              variant='h5'
              fontWeight={"bold"}
              fontSize='16px'
              mr='8px'
              mb='16px'
              color={"rgb(0, 77, 100)"}
              fontFamily='Vazir'>
              انتخاب آدرس و زمان جمع‌آوری
            </Typography>
            <Typography
              sx={{pl: "8px", color: "rgb(0, 77, 100)", fontSize: "16px"}}>
              <Checkbox />
              تحویل فوری
            </Typography>
          </Grid>

          {true && <>
            <Grid item xs={12} bgcolor={"white"} borderRadius={"16px"} m={'1rem 0'} >
            <Link style={{textDecoration:"none"}}>

            <Stack bgcolor={"white"}>
            <Typography color={"rgb(12, 174, 202)"} fontSize={"16px"}>
            <Radio checked={true}  onChange={''} value={'خونه'} />
            خونه
            </Typography>

            <Typography m={'auto'} color={'rgba(0, 0, 0, 0.5)'} fontSize={"12px"} mb={"1rem"}>
              khane
            </Typography>
            </Stack>
            </Link>

          </Grid>
     
          </>}
          <Grid item xs={12} textAlign='left'>
            <Button
              variant='contained'
              sx={{
                bgcolor: "white",
                color: "rgb(12, 174, 202)",
                fontSize: "900",
                borderRadius: "16px",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "white",
                  color: "rgb(12, 174, 202)",
                  boxShadow: "none",
                },
              }}>
              +اضافه کردن آدرس جدید
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} m={"2rem 1rem"} textAlign='center'>
          <Typography
            variant='subtitle1'
            color={"rgb(116, 116, 116)"}
            fontWeight={"bold"}>
            آدرس انتخاب شده تحت پوشش دیجی‌واش نیست.
          </Typography>
        </Grid>
        <Grid
          container
          sx={{
            borderTop: "1px solid rgb(204, 204, 204)",
            p: "1rem 0",
            borderRadius: "16px 16px 0 0",
          }}>
          <Grid item xs={12} m={"0 1rem"}>
            <Button
              variant='contained'
              sx={{
                bgcolor: "white",
                color: "rgb(12, 174, 202)",
                fontSize: "900",
                borderRadius: "16px",
                boxShadow: "none",
                border: "1px solid rgb(204, 204, 204)",
                "&:hover": {
                  bgcolor: "white",
                  color: "rgb(12, 174, 202)",
                  boxShadow: "none",
                },
              }}
              fullWidth>
              تایید
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ModalBasketTransfer;
