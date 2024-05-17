import { Button, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const TagConent = ({ tagName }) => {
  return (
    <>
      <Button
        variant='contained'
        fontFamily='Vazir-Bold'
        fontSize='16px'
        onClick={() => alert("slam")}
        sx={{
          width: "100px",
          height: "40px",
          borderRadius: "30px",
          bgcolor: "rgb(66, 192, 212)",

          border: "none",
          boxShadow: "none",
          "&:hover": {
            bgcolor: "rgb(66, 192, 212)",

            boxShadow: "none"
          }
        }}>
        <Typography
          variant='h6'
          color='white'
          fontFamily="Vazir-Bold"
          fontSize="16px"
         >
          {tagName}
        </Typography>
      </Button>
    </>
  );
};

export default TagConent;
