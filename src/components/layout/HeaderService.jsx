/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Container, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useLocation } from "react-router-dom";
import TagConent from "../common/TagConent";

// icon
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles/SwiperStyle.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { fetchCategoryServices } from "../../API/requests";

// eslint-disable-next-line react/prop-types
const HeaderService = () => {
const [categories,setCategories]=useState()
const [error,setError]=useState()
const locationIndex = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async (fetchIndex) => {
      try {
        const data = await fetchCategoryServices(fetchIndex);
        setCategories(data.data.categories);
        // console.log(data)
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    fetchData(locationIndex); // فراخوانی تابع غیرهمزمان
  }, []);
  return (
    <>
      <Grid container m='1rem 0'>
        <Grid item lg={5} md={5} xs={5}>
          <Link to='/'>
            <ArrowForwardIosIcon sx={{ color: "white" }} />
          </Link>
        </Grid>
        <Grid item lg={7} md={7} xs={7}>
          <Typography
            variant='h5'
            color={"white"}
            fontFamily='Vazir'
            fontSize='18px'
            fontWeight='900'>
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
          {categories && categories.map((item, index) => (
            <SwiperSlide style={{ backgroundColor: "transparent" }} key={index}>
              <Link to={`/services/${index+1}`} style={{ textDecoration: "none", color: "black" }}>
             
                <TagConent tagName={item.name} item={item} locationIndex={locationIndex} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default HeaderService;
