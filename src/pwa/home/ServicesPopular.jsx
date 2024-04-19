import { Box, Container, Typography } from "@mui/material";

// usable component
import ServicesPopularComponent from "./ServicesPopularComponent";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SwiperStyle.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// image svg
import manto from "../../../assets/womenMantoo.7c04032e.svg";
import { Link } from "react-router-dom";
// Data
const DataSwiper = [
  {
    title: "مانتو",
    subTitle: "مجلسی، ساده، پاییزه",
    image: manto,
    linkProduct: "/services"
  },
  {
    title: "مانتو",
    subTitle: "مجلسی، ساده، پاییزه",
    image: manto,
    linkProduct: "/services"
  },
  {
    title: "مانتو",
    subTitle: "مجلسی، ساده، پاییزه",
    image: manto,
    linkProduct: "/services"
  },
  {
    title: "مانتو",
    subTitle: "مجلسی، ساده، پاییزه",
    image: manto,
    linkProduct: "/services"
  },
  {
    title: "مانتو",
    subTitle: "مجلسی، ساده، پاییزه",
    image: manto,
    linkProduct: "/services"
  },
  {
    title: "مانتو",
    subTitle: "مجلسی، ساده، پاییزه",
    image: manto,
    linkProduct: "/services"
  },
  {
    title: "مانتو",
    subTitle: "مجلسی، ساده، پاییزه",
    image: manto,
    linkProduct: "/services"
  },
  {
    title: "مانتو",
    subTitle: "مجلسی، ساده، پاییزه",
    image: manto,
    linkProduct: "/services"
  },
  {
    title: "مانتو",
    subTitle: "مجلسی، ساده، پاییزه",
    image: manto,
    linkProduct: "/services"
  }
];
const ServicesPopular = () => {
  return (
    <Container>
      <Box
        Container
        sx={{
          bgcolor: "rgb(242, 247, 247)",
          p: "1rem 0",
          m: "1rem 2rem",
          borderRadius: "8px",
          overflow: "hidden"
        }}>
        <Typography variant='h5' fontWeight='bold ' m='1rem '>
          خدمات محبوب
        </Typography>

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true
          }}
          modules={[FreeMode, Pagination]}
          className='mySwiper'
          style={{ padding: "0 2rem" }}>
          {DataSwiper.map((item, index) => (
            <SwiperSlide style={{ background: "none" }} key={index}>
              <Link style={{ textDecoration: "none", color: "black" }} to={item.linkProduct}>
                <ServicesPopularComponent
                  title={item.title}
                  subTitle={item.subTitle}
                  image={item.image}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default ServicesPopular;
