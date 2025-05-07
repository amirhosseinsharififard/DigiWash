import {Button, Typography} from "@mui/material";

// eslint-disable-next-line react/prop-types
const TagConent = ({tagName, item, locationIndex}) => {
  console.log(item);
  const id = item?.id ??0
  console.log(id);

  console.log(locationIndex);
  // console.log(item.id)
  return (
    <>
      <Button
        variant='contained'
        fontFamily='Vazir-Bold'
        fontSize='16px'
        sx={{
          width: "100px",
          height: "40px",
          borderRadius: "30px",
          bgcolor: id == locationIndex ? "#fff" : "rgb(66, 192, 212)",
          border: "none",
          boxShadow: "none",
          "&:hover": {
            bgcolor: id == locationIndex ? "#fff" : "rgb(66, 192, 212)",
            color: id == locationIndex ? "rgb(66, 192, 212)" : "#fff",

            boxShadow: "none",
          },
        }}>
        <Typography
          variant='h6'
          fontFamily='Vazir-Bold'
          fontWeight={"bold"}
          color={ id == locationIndex ? "rgb(66, 192, 212)" : "#fff"}

          fontSize='16px'>
          {tagName}
        </Typography>
      </Button>
    </>
  );
};

export default TagConent;
