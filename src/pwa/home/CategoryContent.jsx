/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const CategoryContent = ({ imageCategory, titleCategory }) => {

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${imageCategory})`,
          bgcolor:imageCategory,
          backgroundSize: "cover",
          backgroundPosition:"center center",
          height: "142px",
          width: "auto",
          overflow: "hidden",
          display: "block",
          borderRadius:"12px"
        }}>
  
      </Box>
      <Typography variant='h6' fontFamily="Vazir" fontSize="16px">
        {titleCategory}
      </Typography>
    </>
  );
};

export default CategoryContent;
