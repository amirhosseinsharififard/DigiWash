/* eslint-disable react/prop-types */
import {Grid, Radio, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const ModalAddressContent = ({
  name,
  address,
  id,
  in_range,
  price,
  handleRadioChange,
  selectedValue,
  setSelectedData,
}) => {
  const [choseData, setChoseData] = useState();

  const HandleChoseData = ({name, address, in_range, id}) => {
    handleRadioChange(name);
    setChoseData({name, address, in_range, id, price});
  };

  useEffect(() => {
    setSelectedData(choseData);
  }, [choseData]);
  return (
    <Grid
      item
      xs={12}
      bgcolor={"white"}
      m={".3rem 0.5rem"}
      sx={{borderRadius: "16px", overflow: "hidden"}}>
      <Link
        style={{textDecoration: "none"}}
        onClick={() => {
          HandleChoseData({name, address, in_range, id});
        }} // Handle radio change
      >
        {/* <Link style={{ textDecoration: "none" }} onClick={() => onChange(name)}> */}
        <Stack bgcolor={"white"}>
          <Typography color={"rgb(12, 174, 202)"} fontSize={"16px"}>
            <Radio
              checked={selectedValue === name} // Check if this radio is selected
              value={name}
              sx={{
                color: "rgb(12, 174, 202)",
                "&.Mui-checked": {
                  color: "rgb(12, 174, 202)",
                },
              }}
            />
            {name}
          </Typography>

          <Typography
            m={"auto"}
            color={"rgba(0, 0, 0, 0.5)"}
            fontSize={"12px"}
            mb={"1rem"}>
            {address}
          </Typography>
        </Stack>
      </Link>
    </Grid>
  );
};

export default ModalAddressContent;
