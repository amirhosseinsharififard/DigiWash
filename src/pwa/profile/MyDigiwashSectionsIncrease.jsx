import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// eslint-disable-next-line react/prop-types
const MyDigiwashSectionsIncrease = ({
  title,
  dataIcon,
  address,
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
      m="1rem"
      >
      <Link
        to={address}
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
          textDecoration: "none",
          color: "black",
          width: "100%",
          padding:'1rem'
        }}>
        <Box display='flex'>
          {dataIcon}

          <Typography
            variant='h6'
            mr={2}
            fontWeight='bold'
            >
            {title}
          </Typography>
        </Box>
        <ArrowBackIosIcon style={{ opacity: "50%" }} />
      </Link>
    </Grid>
  );
};

export default MyDigiwashSectionsIncrease;
