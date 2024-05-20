/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";
// import { CleaningServices } from "@mui/icons-material";
const CategoryModal = ({ buttonsActiveHandler, buttonActive, buttons }) => {
  return (
    <Grid
      container
      bgcolor='rgb(240, 244, 244)'
      color='black'
      width='98%'
      m='auto'
      borderRadius='30px'>
      {buttons.map((item, id) => (
        <Grid item xs={4} sm={4} md={4} lg={4} display='flex' key={id}>
          <Link
            className={styles.link}
            onClick={() => buttonsActiveHandler(id)}
            style={{
              ...(buttonActive === id && {
                backgroundColor: "rgb(12, 174, 202)",
                color: "#fff"
              })
            }}>
            <Typography
              variant='h5'
              fontFamily='Vazir-Bold'
              fontSize='16px'
              fontWeight='bold'>
              {item.categoryName}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryModal;
