import {Button, Container, Grid} from "@mui/material";
import AddressBodyChildren from "./AddressBodyChildren";
import MapComponent from "../../../components/MapComponent";
const dataAddress = [
  {namePlace: "خانه", typeAddress: "اتشنانی و..."},
  {namePlace: "محل کار", typeAddress: "اتشنانی و..."},
  {namePlace: "خدمت", typeAddress: "اتشنانی و..."},
];
const ProfileBody = () => {
  return (
    <>

    <Container>
      <Grid
        container
        sx={{
          bgcolor: "white",
          display: "flex",
          alignContent: "space-betweens",
          justifyContent: "space-between",
          p: "1.5rem 1.5rem .7rem 1.5rem",
          m: "0 auto 5rem",
          maxWidth: "768px",
        }}>
        {dataAddress.map((itemAddress, i) => (
          <AddressBodyChildren
            key={i}
            namePlace={itemAddress.namePlace}
            typeAddress={itemAddress.typeAddress}
          />
        ))}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Button variant='outlined' fullWidth sx={{borderRadius:"16px",height:"59px",color:'rgb(12, 174, 202)',borderColor:"rgb(12, 174, 202)"}}>
            + اضافه کردن ادرس جدید
          </Button>
        </Grid>
      </Grid>
    </Container> 
      <MapComponent />
    </>
  );
};

export default ProfileBody;
