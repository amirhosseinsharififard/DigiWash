/* eslint-disable react/prop-types */
import {Grid, Typography} from "@mui/material";
import CategoryContent from "./CategoryContent";


import {Link} from "react-router-dom";
const ServicesCategory = ({indexData}) => {

  return (
    <>
      <Typography
        variant='h5'
        fontWeight='bold'
        fontSize='18px'
        fontFamily='Vazir'
        m='1rem 0'>
        دسته بندی خدمات
      </Typography>

      <Grid container>
        {indexData
          ? indexData.data.categories.map((item) => (
              <Grid
                item
                lx={3}
                lg={3}
                md={4}
                sm={4}
                xs={6}
                key={item.id}
                sx={{
                  width: "calc((100% / 4) - 2rem)",
                  p: "1rem",
                  overflow: "hidden",
                }}>
                <Link
                  to={`/services/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    maxWidth: "163px",
                    height: "143px",
                    borderRadius: "12px",
                  }}>
                  <CategoryContent
                    imageCategory={
                      item.src 
                    }
                    titleCategory={item.name}
                    id={item.id}
                  />
                </Link>
              </Grid>
            ))
          : "didn't work"}
      </Grid>


      
    </>
  );
};

export default ServicesCategory;
