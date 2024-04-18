import { Box, Typography } from "@mui/material";


const CategoryContent = ({imageCategory,titleCategory,id}) => {
  return (
    <Box>
      <img src={imageCategory} style={{
        height:'200px' , width:'200px',
      }}/>
      <Typography variant="h6" fontWeight={700}>
        {titleCategory}
      </Typography>
    </Box>
  );
};

export default CategoryContent;
