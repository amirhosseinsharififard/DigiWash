import { Container, Grid } from "@mui/material";
import AddressBodyChildren from "./AddressBodyChildren";
const dataAddress = [
  { namePlace: "خانه", typeAddress: "اتشنانی و..." },
  { namePlace: "محل کار", typeAddress: "اتشنانی و..." },
  { namePlace: "خدمت", typeAddress: "اتشنانی و..." }
];
const ProfileBody = () => {
  return (
    <Container>
      <Grid
        container
        sx={{
          bgcolor: "white",
          display: "flex",
          alignContent: "space-betweens",
          justifyContent: "space-between",
          p: "1.5rem 1.5rem .7rem 1.5rem"
        }}>
        {dataAddress.map((itemAddress, i) => (
          <AddressBodyChildren
            key={i}
            namePlace={itemAddress.namePlace}
            typeAddress={itemAddress.typeAddress}
          />
        ))}
     
      </Grid>
    </Container>
  );
};

export default ProfileBody;
