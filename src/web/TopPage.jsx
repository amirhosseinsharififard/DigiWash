import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Logo from "../assets/logo-digiwash.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";

const TopPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "row-reverse "
      }}>
      <Grid display="flex" flexDirection='row-reverse' alignItems="center">
        <Box ml="3rem">
          <Box
            component='img'
            sx={{
              height: "auto",
              maxWidth: "100%"
            }}
            src={Logo}
          />
        </Box>

        <Box>
          <Typography component='p' variant='body1'>
            !مراقب لباس های شما هستیم
          </Typography>
        </Box>
      </Grid>
      <Grid sx={{ display: "flex" }}>
        <Typography component='p' variant='body1'>
          هرروز هفته حتی جمعه‌ها 24 ساعته
        </Typography>
        <AccessTimeIcon sx={{ color: "#0caeca", ml: ".5rem" }} />
      </Grid>

      <Grid display='flex' flexDirection='row-reverse' alignItems='center'>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          ml='2rem'>
          <Typography component='p' variant='body1'>
            تماس با دیجی واش
          </Typography>
          <Link
            to='/'
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold"
            }}>
            <Typography component='p' variant='body1' fontSize={23}>
              021-45802000
            </Typography>
          </Link>
        </Box>

        <Box display='flex' flexDirection='column'>
          <Button
            variant='contained'
            sx={{ borderRadius: 50, mt: ".5rem", bgcolor: "#0caeca" }}>
            ثبت سفارش انلاین
          </Button>
          <Button
            variant='contained'
            sx={{ borderRadius: 50, mt: ".5rem", bgcolor: "#0caeca" }}>
            ثبت سفارش تلفنی
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};

export default TopPage;
