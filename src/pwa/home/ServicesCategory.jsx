import { Box, Container, Grid, Typography } from "@mui/material";
import CategoryContent from "./CategoryContent";

// import image
import womenImage from "../../../assets/women.1f966e74.svg";
import { Link } from "react-router-dom";
const categoryData = [
  {
    imageCategory: womenImage,
    titleCategory: "لباس زنانه",
    id: "1",
    link: "/services"
  },
  {
    imageCategory: womenImage,
    titleCategory: "لباس زنانه",
    id: "2",
    link: "/services"
  },
  {
    imageCategory: womenImage,
    titleCategory: "لباس زنانه",
    id: "3",
    link: "/services"
  },
  {
    imageCategory: womenImage,
    titleCategory: "لباس زنانه",
    id: "4",
    link: "/services"
  },
  {
    imageCategory: womenImage,
    titleCategory: "لباس زنانه",
    id: "5",
    link: "/services"
  },
  {
    imageCategory: womenImage,
    titleCategory: "لباس زنانه",
    id: "6",
    link: "/services"
  },
  {
    imageCategory: womenImage,
    titleCategory: "لباس زنانه",
    id: "7",
    link: "/services"
  },
  {
    imageCategory: womenImage,
    titleCategory: "لباس زنانه",
    id: "8",
    link: "/services"
  },
  {
    imageCategory: womenImage,
    titleCategory: "لباس زنانه",
    id: "9",
    link: "/services"
  },
  {
    imageCategory: womenImage,
    titleCategory: "لباس زنانه",
    id: "10",
    link: "/services"
  }
];
const ServicesCategory = () => {
  return (
    <Container>
      <Box m='2rem'>
        <Typography variant='h5' fontWeight='bold' m='1rem 0'>
          دسته بندی خدمات
        </Typography>

        <Grid
          container
          display='flex'
          flexDirection='row'
          justifyContent='flex-start'
          flexWrap='wrap'
          spacing={10}>
          {categoryData.map((item) => (
            <Grid item key={item.id}>
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "black" }}>
                <CategoryContent
                  imageCategory={item.imageCategory}
                  titleCategory={item.titleCategory}
                  id={item.id}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ServicesCategory;
