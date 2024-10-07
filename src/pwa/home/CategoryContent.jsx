/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const CategoryContent = ({ imageCategory, titleCategory }) => {
const image=imageCategory

  return (
    <>
      <Box
        // sx={{
        //   backgroundImage: `url(${imageCategory})`,
        //   bgcolor:imageCategory,
        //   backgroundSize: "cover",
        //   backgroundPosition:"center center",
        //   height: "142px",
        //   width: "auto",
        //   overflow: "hidden",
        //   display: "block",
        //   borderRadius:"12px"
        // }}
        >
  
      </Box>
      <img src={image} />
      <Typography variant='h6' fontFamily="Vazir" fontSize="16px">
        {titleCategory}
      </Typography>
    </>
  );
};

export default CategoryContent;
