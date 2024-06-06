/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";
import styles from "./Category.module.css";
// import { CleaningServices } from "@mui/icons-material";
const CategoryModal = ({
  buttonsActiveHandler,
  buttonActive,
  buttons,
  gridItem,
}) => {
  return (
    <Grid
      container
      bgcolor='rgb(240, 244, 244)'
      color='black'
      borderRadius='30px'>
      {buttons.map((item, id) => (
        <Grid
          item
          xs={gridItem == 2 ? 6 : 4}
          sm={gridItem == 2 ? 6 : 4}
          md={gridItem == 2 ? 6 : 4}
          lg={gridItem == 2 ? 6 : 4}
          display='flex'
          key={id}>
          <Typography
            className={styles.link}
            onClick={() => buttonsActiveHandler(id)}
            style={{
              ...(buttonActive === id && {
                backgroundColor: "rgb(12, 174, 202)",
                color: "#fff",
              }),
            }}
            lineHeight='50%'
            variant='h5'
            fontFamily='Vazir-Bold'
            fontSize='16px'
            fontWeight='bold'>
            {item.categoryName}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryModal;
