import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";
const CategoryModal = () => {
  return (
    <Grid container bgcolor='rgb(240, 244, 244)' color='black' width="98%" m="auto" borderRadius="30px">
      <Grid item xs={4} sm={4} md={4} lg={4} display='flex' >
        <Link className={styles.link} >
        <Typography variant="h5"  fontFamily="Vazir-Bold" fontSize="16px" fontWeight="bold"> مجلسی</Typography>
        </Link>
      </Grid>
           <Grid item xs={4} sm={4} md={4} lg={4} display='flex' >

        <Link to='/' className={styles.link} >
          
          <Typography variant="h5"  fontFamily="Vazir-Bold" fontSize="16px" fontWeight="bold"> مجلسی</Typography>

        </Link>
      </Grid>
           <Grid item xs={4} sm={4} md={4} lg={4} display='flex'>

        <Link className={styles.link} >
        <Typography variant="h5"  fontFamily="Vazir-Bold" fontSize="16px" fontWeight="bold"> مجلسی</Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default CategoryModal;
