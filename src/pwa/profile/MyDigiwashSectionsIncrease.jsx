/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// eslint-disable-next-line react/prop-types
const MyDigiwashSectionsIncrease = ({
  title,
  dataIcon,
  address,
  clickData
}) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      display='flex'
      justifyContent='space-between'
      alignContent='center'
      alignItems='center'
      m='1rem'>
      <Link
        to={address}
        onClick={
          clickData &&
          (() =>
            navigator.clipboard.writeText(
              "AmirHosseinSHarifiFard 0917-238-4087"
            ))
        }
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
          textDecoration: "none",
          color: "black",
          width: "100%",
          padding: ".5rem"
        }}>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          }}>
          <span style={{ maxWidth: "24px", maxHeight: "24px" }}>{dataIcon}</span>

          <Typography
            variant='h6'
            fontFamily='Vazir'
            fontSize='14px'
            m='auto 1rem'>
            {title}
          </Typography>
        </Box>
        <ArrowBackIosIcon style={{ opacity: "50%" }} />
      </Link>
    </Grid>
  );
};

export default MyDigiwashSectionsIncrease;
