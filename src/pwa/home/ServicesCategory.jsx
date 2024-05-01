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
    <Box m='rem'>
      <Typography
        variant='h5'
        fontWeight='bold'
        fontSize='18px'
        fontFamily='Vazir'
        m='1rem 0'>
        دسته بندی خدمات
      </Typography>

      <Box
        display='flex'
        flexWrap='wrap'
        justifyContent='flex-start'>
        {categoryData.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: "calc((100% / 4) - 1rem)",
              p: ".5rem",
              overflow: "hidden"
            }}>
            <Link
              to={item.link}
              style={{
                textDecoration: "none",
                color: "black",
                maxWidth: "163px",
                height: "143px",
                borderRadius:"12px"
              }}>
              <CategoryContent
                imageCategory={item.imageCategory}
                titleCategory={item.titleCategory}
                id={item.id}
              />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesCategory;
