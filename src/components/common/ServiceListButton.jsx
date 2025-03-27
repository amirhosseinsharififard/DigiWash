import {Button, Box} from "@mui/material";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const ServiceListButton = ({number}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 100,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        width: "100%",
        maxWidth: "768px", // محدود کردن محدوده نمایش
      }}>
      <Button
        sx={{
          bgcolor: "rgb(12, 174, 202)",
          borderRadius: "24px",
          display:"felx",justifyContent:"center",alignContent:"center",
          p: 1,
          color: "#fff",
          fontSize:14,
          ":hover": {
            color: "white",
            bgcolor: "rgb(12, 174, 202)",
          },
        }}>
        <DryCleaningIcon /> {number || 0} مورد{" "}
        <span style={{fontSize:"1px"}}>
          <ArrowBackIosNewIcon />
        </span>
      </Button>
    </Box>
  );
};

export default ServiceListButton;
