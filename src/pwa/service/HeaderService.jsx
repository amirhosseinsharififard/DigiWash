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

const DataTagName = [
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه",
  "لباس زنانه"
];
const HeaderService = () => {
  return (
    <Container>
      <Grid container m='2rem 0'>
        <Grid item lg={5} md={5} xs={5}>
          <Link to='/'>
            <ArrowForwardIosIcon sx={{ color: "white" }} />
          </Link>
        </Grid>
        <Grid item lg={7} md={7} xs={7}>
          <Typography variant='h5' color={"white"}>
            انتخاب لباس ها
          </Typography>
        </Grid>
      </Grid>
      <Container>
      
        <Swiper
          slidesPerView={7.5}
          spaceBetween={0}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          
          breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 3.7,
          },
          480: {
            slidesPerView: 5.5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 6.5,
          },
        }}

          className='mySwiper'
          style={{marginBottom:"2rem"}}>
          {DataTagName.map((item, index) => (
            <SwiperSlide style={{ backgroundColor: "transparent" }} key={index}>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <TagConent tagName={item} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        
      </Container>
    </Container>
  );
};

export default HeaderService;
