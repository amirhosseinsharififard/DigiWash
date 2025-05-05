/* eslint-disable react/prop-types */
import {Box, Typography} from "@mui/material";

const CategoryContent = ({imageCategory, titleCategory}) => {
  const image = imageCategory;

  return (
    <>
  <Box
      sx={{
        maxHeight: 142,
        width: '100%',
        overflow: 'hidden',
        display: 'block',
        borderRadius: 2,
      }}
    >
      <img
        src={image}
        alt="تصویر"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />
    </Box>
      {/* <img src={image} style={{maxWidth:"162px",maxHeight:'142px'}}/> */}
      <Typography variant='h6' fontFamily='Vazir' fontSize='16px' mt={2}>
        {titleCategory}
      </Typography>
    </>
  );
};

export default CategoryContent;
