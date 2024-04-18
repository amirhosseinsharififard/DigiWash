import { Container, Grid } from "@mui/material";

const TestResponsive = () => {
  return (
    <Container>
      <Grid container>
        <Grid item bgcolor={"red"} height={4} md={4} lg={4}></Grid>
        <Grid item bgcolor={"blue"} height={4} md={4} lg={4}></Grid>
        <Grid item bgcolor={"black"} height={4} md={4} lg={4}></Grid>
      </Grid>
    </Container>
  );
};

export default TestResponsive;
