/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import TagConent from "./TagConent";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../home/SwiperStyle.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// eslint-disable-next-line react/prop-types
const HeaderService = ({ handleFilterButtonClick, buttonFilter }) => {
  return (
    <>
      <Grid container m='2rem 0'>
        <Grid item lg={5} md={5} xs={5}>
          <Link to='/'>
            <ArrowForwardIosIcon sx={{ color: "white" }} />
          </Link>
        </Grid>
        <Grid item lg={7} md={7} xs={7}>
          <Typography
            variant='h5'
            color={"white"}
            fontFamily='Vazir-Bold'
            fontSize='18px'
            fontWeight='bold'>
            انتخاب لباس ها
          </Typography>
        </Grid>
      </Grid>
      <Container>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={5}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className='mySwiper'
          style={{ marginBottom: "2rem" }}>
          {buttonFilter.map((item, index) => (
            <SwiperSlide style={{ backgroundColor: "transparent" }} key={index}>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <TagConent tagName={item} handleFilterButtonClick={handleFilterButtonClick} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default HeaderService;
