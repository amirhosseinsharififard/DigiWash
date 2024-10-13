/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const CategoryContent = ({ imageCategory, titleCategory }) => {
const image=imageCategory

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          // bgcolor:imageCategory,
          backgroundSize: "cover",
          backgroundPosition:"center center",
          height: "142px",
          width: "auto",
          overflow: "hidden",
          display: "block",
          borderRadius:"12px"
        }}
        >
  
      </Box>
      {/* <img src={image} style={{maxWidth:"162px",maxHeight:'142px'}}/> */}
      <Typography variant='h6' fontFamily="Vazir" fontSize="16px">
        {titleCategory}
      </Typography>
    </>
  );
};

export default CategoryContent;
