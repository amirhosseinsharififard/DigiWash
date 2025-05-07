/* eslint-disable react/prop-types */
import {Grid, Typography} from "@mui/material";
import CategoryContent from "../common/CategoryContent";

import {Link} from "react-router-dom";
const ServicesCategory = ({indexData}) => {
  return (
    <>
      <Typography
        variant='h5'
        fontWeight='bold'
        fontSize='18px'
        fontFamily='Vazir'
        m='2rem 1rem 0'>
        دسته بندی خدمات
      </Typography>

      {/* <Grid
        container
        sx={{
          maxWidth: "768px",
          display: "grid",
          m: "auto",
          gridTemplateColumns: {xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)"},
          // flexDirection: "row",
          // flexWrap: "wrap",
          // justifyContent: {xs: "center", sm: "flex-start"},
        }}>
        {indexData
          ? indexData.map((item) => (
              <Grid
                item
                key={item.id}
                sx={{
                  width: "162px",

                  p: "1rem",
                  overflow: "hidden",
                  m: "auto",
                }}>
                <Link
                  to={`/services/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    maxWidth: "100%",
                    height: "100%",
                    borderRadius: "12px",
                  }}>
                  <CategoryContent
                    imageCategory={item.src}
                    titleCategory={item.name}
                    id={item.id}
                  />
                </Link>
              </Grid>
            ))
          : "didn't work"}{" "}
        {indexData
          ? indexData.map((item) => (
              <Grid
                item
                key={item.id}
                sx={{
                  width: "162px",
                  p: "1rem",
                  overflow: "hidden",
                  m: "auto",
                }}>
                <Link
                  to={`/services/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    height: "143px",
                    borderRadius: "12px",
                  }}>
                  <CategoryContent
                    imageCategory={item.src}
                    titleCategory={item.name}
                    id={item.id}
                  />
                </Link>
              </Grid>
            ))
          : "didn't work"}
        {indexData
          ? indexData.map((item) => (
              <Grid
                item
                key={item.id}
                sx={{
                  width: "162px",
                  p: "1rem",
                  overflow: "hidden",
                  m: "auto",
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
                    imageCategory={item.src}
                    titleCategory={item.name}
                    id={item.id}
                  />
                </Link>
              </Grid>
            ))
          : "didn't work"}
      </Grid> */}

      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "768px",
          margin: "auto",
          p: "0 1rem",
        }}>
        {indexData && indexData.length > 0 ? (
          indexData.map((item) => (
            <Grid
              item
              key={item.id}
              xs={6} // 2 columns on extra-small screens
              sm={4} // 3 columns on small screens and up
              md={3} // 4 columns on medium screens and up (optional)
              sx={{
                display: "flex",
                justifyContent: "center",
                pb: "4rem",
              }}>
              <Link
                to={`/services/${item.id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  width: "100%",
                  maxWidth: "163px",
                  maxHeight: "143px",
                  borderRadius: "12px",
                  display: "block",
                }}>
                <CategoryContent
                  imageCategory={item.src}
                  titleCategory={item.name}
                  id={item.id}
                />
              </Link>
            </Grid>
          ))
        ) : (
          <p>داده‌ای برای نمایش وجود ندارد</p>
        )}{" "}
        {indexData && indexData.length > 0 ? (
          indexData.map((item) => (
            <Grid
              item
              key={item.id}
              xs={6} // 2 columns on extra-small screens
              sm={4} // 3 columns on small screens and up
              md={3} // 4 columns on medium screens and up (optional)
              sx={{
                display: "flex",
                justifyContent: "center",
              }}>
              <Link
                to={`/services/${item.id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  width: "100%",
                  maxWidth: "163px",
                  height: "143px",
                  borderRadius: "12px",

                  display: "block",
                }}>
                <CategoryContent
                  imageCategory={item.src}
                  titleCategory={item.name}
                  id={item.id}
                />
              </Link>
            </Grid>
          ))
        ) : (
          <p>داده‌ای برای نمایش وجود ندارد</p>
        )}{" "}
        {indexData && indexData.length > 0 ? (
          indexData.map((item) => (
            <Grid
              item
              key={item.id}
              xs={6} // 2 columns on extra-small screens
              sm={4} // 3 columns on small screens and up
              md={3} // 4 columns on medium screens and up (optional)
              sx={{
                display: "flex",
                justifyContent: "center",
              }}>
              <Link
                to={`/services/${item.id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  width: "100%",
                  maxWidth: "163px",
                  height: "143px",
                  borderRadius: "12px",
                  display: "block",
                }}>
                <CategoryContent
                  imageCategory={item.src}
                  titleCategory={item.name}
                  id={item.id}
                />
              </Link>
            </Grid>
          ))
        ) : (
          <p>داده‌ای برای نمایش وجود ندارد</p>
        )}
      </Grid>
    </>
  );
};

export default ServicesCategory;
