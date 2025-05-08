/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  Box,
  Grid,
  Typography,
  Button,
  Checkbox,
  Stack,
  Radio,
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import ModalAddressContent from "../address/ModalAddressContent";
import toFarsiNumber from "../../utils/functions";

const ModalBasketTransfer = ({
  locations,
  setOpenModalBasketTransfer,
  selectedData,
  setSelectedData,
  selectedValue,
  setSelectedValue,
}) => {
  const navigate = useNavigate();
  const handleRadioChange = (name) => {
    setSelectedValue(name); // Update the selected radio name
  };
  const navigateHandler = () => {
    navigate("/profile/address");
  };

  console.log(selectedData);
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
        onClick={() => setOpenModalBasketTransfer(false)}
      />

      <Grid
        container
        sx={{
          backgroundColor: "white",

          zIndex: 3,
          borderRadius: "16px 16px 0 0",
          m: "0 auto",
          maxWidth: "768px",
          maxHeight: "70vh",
          overflowY: "scroll",
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

          {locations &&
            locations.map((item) => (
              <ModalAddressContent
                key={item.id}
                address={item.address}
                name={item.name}
                in_range={item.in_range}
                price={item.price}
                id={item.id}
                handleRadioChange={handleRadioChange}
                setSelectedData={setSelectedData}
                selectedValue={selectedValue}
              />
            ))}
          <Grid item xs={12} textAlign='left' pb={"2rem"}>
            <Button
              variant='contained'
              onClick={() => navigateHandler()}
              sx={{
                bgcolor: "white",
                color: "rgb(12, 174, 202)",
                fontSize: "900",
                borderRadius: "16px",
                boxShadow: "none",
                ml: ".5rem",
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
        {/* time service */}
        <Grid
          item
          xs={12}
          bgcolor={"white"}
          border={"2px solid #EBF8Fa"}
          position={"relative"}
          top='-2.5rem'
          m={".3rem 0.5rem"}
          p='12px 8px'
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            gap: ".2rem",
          }}>
          <Link to={"/"}>
            <Box
              bgcolor={true ? "rgb(12, 174, 202)" : "white"}
              display='inline-block'
              maxWidth={"67px"}
              p={"8px 16px"}
              borderRadius={3}
              textAlign={"center"}
              color={true ? "white" : "rgb(12, 174, 202)"}>
              <Typography fontFamily={"Vazir"} fontWeight={"bold"}>
                {" "}
                need data
              </Typography>
              <Typography fontFamily={"Vazir"} fontWeight={"bold"}>
                19
              </Typography>
            </Box>
          </Link>
          <Link to={"/"}>
            <Box
              bgcolor={false ? "rgb(12, 174, 202)" : "white"}
              display='inline-block'
              maxWidth={"67px"}
              p={"8px 16px"}
              borderRadius={3}
              textAlign={"center"}
              color={false ? "white" : "rgb(12, 174, 202)"}>
              <Typography fontFamily={"Vazir"} fontWeight={"bold"}>
                {" "}
                need data
              </Typography>
              <Typography fontFamily={"Vazir"} fontWeight={"bold"}>
                19
              </Typography>
            </Box>
          </Link>
          <Link to={"/"}>
            <Box
              bgcolor={false ? "rgb(12, 174, 202)" : "white"}
              display='inline-block'
              maxWidth={"67px"}
              p={"8px 16px"}
              borderRadius={3}
              textAlign={"center"}
              color={false ? "white" : "rgb(12, 174, 202)"}>
              <Typography fontFamily={"Vazir"} fontWeight={"bold"}>
                {" "}
                need data
              </Typography>
              <Typography fontFamily={"Vazir"} fontWeight={"bold"}>
                19
              </Typography>
            </Box>
          </Link>
          <Link to={"/"}>
            <Box
              bgcolor={false ? "rgb(12, 174, 202)" : "white"}
              display='inline-block'
              maxWidth={"67px"}
              p={"8px 16px"}
              borderRadius={3}
              textAlign={"center"}
              color={false ? "white" : "rgb(12, 174, 202)"}>
              <Typography fontFamily={"Vazir"} fontWeight={"bold"}>
                {" "}
                need data
              </Typography>
              <Typography fontFamily={"Vazir"} fontWeight={"bold"}>
                19
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          bgcolor={"white"}
          border={"2px solid #EBF8Fa"}
          position={"relative"}
          top='-2.5rem'
          m={".3rem 0.5rem"}
          p='8px'
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
          }}>
          <Link style={{width: "100%", textDecoration: "none", color: "black"}}>
            <Typography fontFamily={"Vazir"} fontSize={"16px"}>
              <Radio
                // checked={selectedValue === name} // Check if this radio is selected
                // value={name}
                sx={{
                  color: "rgb(12, 174, 202)",
                  "&.Mui-checked": {
                    color: "rgb(12, 174, 202)",
                  },
                }}
              />
              13:00 تا 17:00
            </Typography>
          </Link>
        </Grid>{" "}
        <Grid
          item
          xs={12}
          bgcolor={"white"}
          border={"2px solid #EBF8Fa"}
          position={"relative"}
          top='-2.5rem'
          m={".3rem 0.5rem"}
          p='8px'
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
          }}>
          <Link style={{width: "100%", textDecoration: "none", color: "black"}}>
            <Typography fontFamily={"Vazir"} fontSize={"16px"}>
              <Radio
                // checked={selectedValue === name} // Check if this radio is selected
                // value={name}
                sx={{
                  color: "rgb(12, 174, 202)",
                  "&.Mui-checked": {
                    color: "rgb(12, 174, 202)",
                  },
                }}
              />
              13:00 تا 17:00
            </Typography>
          </Link>
        </Grid>{" "}
        <Grid
          item
          xs={12}
          bgcolor={"white"}
          border={"2px solid #EBF8Fa"}
          position={"relative"}
          top='-2.5rem'
          m={".3rem 0.5rem"}
          p='8px'
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
          }}>
          <Link style={{width: "100%", textDecoration: "none", color: "black"}}>
            <Typography fontFamily={"Vazir"} fontSize={"16px"}>
              <Radio
                // checked={selectedValue === name} // Check if this radio is selected
                // value={name}
                sx={{
                  color: "rgb(12, 174, 202)",
                  "&.Mui-checked": {
                    color: "rgb(12, 174, 202)",
                  },
                }}
              />
              13:00 تا 17:00
            </Typography>
          </Link>
        </Grid>{" "}
        <Grid
          item
          xs={12}
          bgcolor={"white"}
          border={"2px solid #EBF8Fa"}
          position={"relative"}
          top='-2.5rem'
          m={".3rem 0.5rem"}
          p='8px'
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
          }}>
          <Link
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
            }}>
            <Typography fontFamily={"Vazir"} fontSize={"16px"}>
              <Radio
                // checked={selectedValue === name} // Check if this radio is selected
                // value={name}
                sx={{
                  color: "rgb(12, 174, 202)",
                  "&.Mui-checked": {
                    color: "rgb(12, 174, 202)",
                  },
                }}
              />
              13:00 تا 17:00
            </Typography>
            <Typography
              color='rgb(255, 158, 104)'
              fontFamily='Vazir'
              fontSize={"12px"}>
              ظرفیت تکمیل شده
            </Typography>
          </Link>
        </Grid>
        {selectedData?.in_range ? null : (
          <Grid item xs={12} m={"2rem 1rem"} textAlign='center'>
            <Typography
              variant='subtitle1'
              color={"rgb(116, 116, 116)"}
              fontWeight={"bold"}>
              آدرس انتخاب شده تحت پوشش دیجی‌واش نیست.
            </Typography>
          </Grid>
        )}
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
              fullWidth
              // disabled={
              //   (selectedData && !selectedData.in_range && true) ||
              //   !selectedData
              // }
              disabled={!selectedData?.in_range}
              onClick={() => setOpenModalBasketTransfer(false)}>
              {selectedData?.in_range
                ? "تایید"
                : "آدرس انتخاب شده تحت پوشش دیجی‌واش نیست."}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ModalBasketTransfer;
