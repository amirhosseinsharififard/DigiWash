/* eslint-disable react/prop-types */
import {Grid} from "@mui/material";

// // icons
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { Link } from "react-router-dom";
import MyDigiwashSectionsIncrease from "./MyDigiwashSectionsIncrease";

// eslint-disable-next-line react/prop-types
const MyDigiWashSection = ({data}) => {
  return (
    <Grid
      container
      border='1px solid rgba(0,0,0,.1)'
      borderRadius='30px'
      bgcolor='rgb(252, 255, 255)'
      m='1rem 0'>
      {data.map((data, i) => (
        <MyDigiwashSectionsIncrease
          key={i}
          title={data.title}
          dataIcon={data.dataIcon}
          address={data.address}
          speciaStyle={data.specialStyle}
          clickData={data.clickData}
          leaveAccount={data.leaveAccount}
        />
      ))}
    </Grid>
  );
};

export default MyDigiWashSection;
