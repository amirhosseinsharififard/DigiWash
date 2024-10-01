/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Box, Typography} from "@mui/material";

// usable component
import ServicesPopularComponent from "./ServicesPopularComponent";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SwiperStyle.css";

// import required modules
import {FreeMode, Pagination} from "swiper/modules";

// // image svg
// import manto from "../../../assets/womenMantoo.7c04032e.svg";
// import whashSvg from "../../../assets/wash.c4124479.svg";

import {Link} from "react-router-dom";
import { useState} from "react";
import ModalIncrease from "../../share/ModalIncrease";
// import {useDispatch, useSelector} from "react-redux";
// import {fetchProducts, product} from "../features/products/productsSlice";
const ServicesPopular = ({indexData}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [checkIndex, setCheckIndex] = useState();
  const [data, setData] = useState();
  const [nameData,setNameData]=useState()
  const dataObjectKeys = data && Object.keys(data);
  // const dispatch = useDispatch();
  // const products = useSelector(product);

  const toggleHandler = () => {
    setIsShowModal(!isShowModal);
  };

  const toggleAndIndexHandler = (id) => {
    setCheckIndex(id);

    toggleHandler();
  };

  console.log("service favorite");
  console.log(indexData.data.favorite_services);
  console.log(data);
  if (data) {
    console.log(Object.keys(data));
  }
  return (
    <>
      <Box
        sx={{
          bgcolor: "rgb(242, 247, 247)",
          p: "1rem 0",
          m: "1rem 0",
          borderRadius: "8px",
          overflow: "hidden",
        }}
        >
        <Typography
          variant='h5'
          fontWeight='bold'
          fontSize='18px'
          fontFamily='Vazir'
          m='1rem '>
          خدمات محبوب
        </Typography>

        <Swiper
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className='mySwiper'
          style={{marginRight: ".5rem"}}>
          {indexData
            ? indexData.data.favorite_services.map((item) => (
                <SwiperSlide style={{background: "none"}} key={item.id}>
                  <Link
                    style={{textDecoration: "none", color: "black"}}
                    onClick={() => (setData(item.services),setNameData(item.name))}>
                    {console.log(item)}
                    {console.log("item")}
                    <ServicesPopularComponent
                      toggleHandler={() => toggleAndIndexHandler(item.id)}
                      checkIndex={item.id}
                      title={item.name}
                      subTitle={item.unique_subs}
                      image={item.image}
                    />
                  </Link>
                </SwiperSlide>
              ))
            : "we need data"}
        </Swiper>
      </Box>

      {isShowModal && (
        <ModalIncrease
          data={data[dataObjectKeys]}
          isShowModal={isShowModal}
          toggleHandler={toggleHandler}
          nameData={nameData}
          // toggleHandler={() => toggleAndIndexHandler(checkIndex)}
          // checkIndex={checkIndex}
          // dataModal={products}
        />
      )}
    </>
  );
};

export default ServicesPopular;
