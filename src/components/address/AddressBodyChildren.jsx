import {Box, Grid, Stack, Typography} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { fetchRemoveAddress} from "../../API/requests";
import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
const AddressBodyChildren = ({id, name, addressDriver}) => {
  const handleRemoveAddress = () => {
    fetchRemoveAddress(id);
  };
  return (
    <Grid
      item
      display='flex'
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{display: "flex", flexDirection: "column", m: "1rem 0"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textDecoration: "none",
          color: "black",
          bgcolor: "rgb(235, 248, 250)",
          borderRadius: "16px 16px 0 0",
          p: ".3rem",
        }}>
        <Stack display='flex' flexDirection='row' alignItems='center'>
          <LocationOnOutlinedIcon sx={{color: "#0caeca"}} />
          <Typography variant='h6' mr={1} fontWeight={600}>
            {name}
          </Typography>
        </Stack>
        <button
          style={{
            background: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            border: "none",
            cursor: "pointer",
            "&:hover": {background: "none"},
            "&:target": {background: "none"},
          }}
          onClick={handleRemoveAddress}>
          <DeleteForeverOutlinedIcon sx={{color: "rgba(0,0,0,0.5)"}} />
        </button>
      </Box>
      <Box
        sx={{
          color: "black",
          bgcolor: "rgb(235, 248, 250)",
          borderRadius: "0 0 16px 16px ",
          p: ".5rem 1rem",
          mt: ".3rem",
        }}>
        <Typography>{addressDriver}</Typography>
      </Box>
    </Grid>
  );
};

AddressBodyChildren.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  addressDriver: PropTypes.string.isRequired,
};
export default AddressBodyChildren;
