/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Container, Grid } from "@mui/material";
import AddressBodyChildren from "./AddressBodyChildren";
import MapComponent from "../../../components/MapComponent";

const dataAddress = [{ namePlace: "خانه", typeAddress: "اتشنانی و..." }];

const ProfileBody = ({ result, addressDriver, nameAddress, setGetPostiton }) => {
  return (
    <>
      {!result && (
        <Container>
          <Grid
            container
            sx={{
              bgcolor: "white",
              display: "flex",
              alignContent: "space-between",
              justifyContent: "space-between",
              p: "0rem 1.5rem .7rem 1.5rem",
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
          </Grid>
        </Container>
      )}
      {result && <MapComponent setGetPostiton={setGetPostiton} />}
    </>
  );
};

export default ProfileBody;