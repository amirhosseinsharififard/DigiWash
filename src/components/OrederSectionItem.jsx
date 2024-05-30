import { Box, Grid, Typography } from "@mui/material";
import { persianPrice } from "../share/functions";
import OrederSectionItemContent from "./OrederSectionItemContent";

const OrederSectionItem = () => {
  return (
    <>
      <Grid
        bgcolor='white'
        style={{
          width: "100%",
          borderRadius: "30px",
        }}>
        <Box
          sx={{
            p: "1.5rem",
          }}>
          <Grid
            container
            sx={{
              border: "1px solid rgb(235, 241, 242)",
              borderRadius: "12px",
              bgcolor: "rgb(237, 252, 255)",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Grid
              item
              m='1rem .7rem '
              display='flex'
              justifyContent='space-between'
              xs={12}
              sm={12}
              md={12}
              lg={12}>
              <Typography fontSize='16px' fontFamily='Vazir'>
                کت و شلوار
              </Typography>
              <Typography fontSize='12px' fontFamily='Vazir'>
                درمجموع
                <span
                  style={{
                    fontFamily: "Vazir",
                    fontWeight: "bold",
                  }}>
                  {persianPrice(340000)} تومان
                </span>
              </Typography>
            </Grid>
            <Grid item m='1rem .7rem ' xs={12} sm={12} md={12} lg={12}>
              <OrederSectionItemContent />
            </Grid>
            <Grid item m='1rem .7rem ' xs={12} sm={12} md={12} lg={12}>
              <OrederSectionItemContent />
            </Grid>
            <Grid item m='1rem .7rem ' xs={12} sm={12} md={12} lg={12}>
              <OrederSectionItemContent />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default OrederSectionItem;
