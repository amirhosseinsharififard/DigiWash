import { Button, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const TagConent = ({ tagName }) => {
  return (
    <>
      <Button
        variant='contained'
        sx={{
          width: "100px",
          height: "40px",
          borderRadius: "30px",
          bgcolor: "rgb(66, 192, 212)",

          border: "none",
          boxShadow: "none"
        }}>
        <Typography
          variant='h6'
          color='white'
          fontFamily="Vazir-Bold"
          fontSize="16px"
          sx={{
            // "@media only screen and (max-width: 1200px)": { fontSize: 14 },
            // "@media only screen and (max-width: 992px)": { fontSize: 12 },
            // "@media only screen and (max-width: 768px)": { fontSize: 8 },
            // "@media only screen and (max-width: 576px)": { fontSize: 7 }
          }}>
          {tagName}
        </Typography>
      </Button>
    </>
  );
};

export default TagConent;
