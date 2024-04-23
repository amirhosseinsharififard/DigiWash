import { Button, Grid } from "@mui/material";

const CategoryModal = () => {
  return (
    <Grid container p={2}>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        {" "}
        <Button
          variant='contained'
          fullWidth
          sx={{ bgcolor: "rgba(0, 0, 0, .3)"  }} size="large">
          slam
        </Button>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        {" "}
        <Button
          variant='contained'
          fullWidth
          sx={{ bgcolor: "rgba(0, 0, 0, .3)"  }} size="large">
          slam
        </Button>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        {" "}
        <Button variant='contained' fullWidth sx={{ bgcolor: "rgba(0, 122, 255, .7)",  }} size="large">
          slam
        </Button>
      </Grid>
    </Grid>
  );
};

export default CategoryModal;
