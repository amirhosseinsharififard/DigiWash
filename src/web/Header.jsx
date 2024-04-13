import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TopPage from "./TopPage";

const Header = () => {
  return (
    <>
    <Container sx={{ bgcolor: "#0caeca" }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection:"row-reverse",
          width: "100%",
          bgcolor: "#0caeca"
        }}>
         <Grid item>
          <Link
            to='/'
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold"
            }}>
            ثبت نام/ورود
          </Link>
        </Grid>
        <Grid item sx={{ padding: ".5rem 0", display: "flex" }}>
          <button type='submit' style={{ border: "none", padding: "0 4px" }}>
            <SearchOutlinedIcon fontSize='small' />
          </button>
          <input
            color='white'
            placeholder='Search'
            style={{ border: "none" }}
          />
        </Grid>
       
      </Grid>

   </Container>
      <TopPage/>
   </>
  );
};

export default Header;
