import { Container, Grid, Typography } from "@mui/material";
import IncreaseItem from "./IncreaseItem";

const ModalIncrease = () => {
  return (
    <Container
      sx={{ zIndex: "1", position: "fixed", bottom: "0", bgcolor: "silver" }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant='h5'>کت و شلوار</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <IncreaseItem
            image='-'
            title={"خشکشویی + اتو"}
            cost={"۱۵۴,۸۰۰ تومان"}
          />
        </Grid>{" "}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <IncreaseItem
            image='-'
            title={"خشکشویی + اتو"}
            cost={"۱۵۴,۸۰۰ تومان"}
          />
        </Grid>{" "}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <IncreaseItem
            image='-'
            title={"خشکشویی + اتو"}
            cost={"۱۵۴,۸۰۰ تومان"}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ModalIncrease;
