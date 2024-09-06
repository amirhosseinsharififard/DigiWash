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
import {useEffect, useState} from "react";
import ModalIncrease from "../../share/ModalIncrease";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, product} from "../features/products/productsSlice";
// Data
// const DataSwiper = [
//   {
//     title: "مانتو",
//     subTitle: "مجلسی، ساده، پاییزه",
//     image: manto,
//     useThis: [
//       {
//         categoryName: "1مجلسی",
//         categoryDo: [
//           { job: "پاییزه 1خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "پاییزه 1اتو", price: 131040, subImage: whashSvg },
//           { job: "پاییزه 1خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       },

//     ]
//   },
//   {
//     title: "مانتو",
//     subTitle: "مجلسی، ساده، پاییزه",
//     image: manto,
//     useThis: [
//       {
//         categoryName: "2مجلسی",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       },
//       {
//         categoryName: "ساده",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       },
//       {
//         categoryName: "پاییزه",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       }
//     ]
//   },
//   {
//     title: "مانتو",
//     subTitle: "مجلسی، ساده، پاییزه",
//     image: manto,
//     useThis: [
//       {
//         categoryName: "3مجلسی",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       },
//       {
//         categoryName: "ساده",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       },
//       {
//         categoryName: "4پاییزه",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       }
//     ]
//   },
//   {
//     title: "مانتو",
//     subTitle: "مجلسی، ساده، پاییزه",
//     image: manto,
//     useThis: [
//       {
//         categoryName: "5مجلسی",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       },
//       {
//         categoryName: "ساده",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       },
//       {
//         categoryName: "پاییزه",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       }
//     ]
//   },
//   {
//     title: "مانتو",
//     subTitle: "مجلسی، ساده، پاییزه",
//     image: manto,
//     useThis: [
//       {
//         categoryName: "6مجلسی",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       },
//       {
//         categoryName: "ساده",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       },
//       {
//         categoryName: "پاییزه",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       }
//     ]
//   },
//   {
//     title: "مانتو",
//     subTitle: "مجلسی، ساده، پاییزه",
//     image: manto,
//     useThis: [
//       {
//         categoryName: "7مجلسی",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       },
//       {
//         categoryName: "ساده",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       },
//       {
//         categoryName: "پاییزه",
//         categoryDo: [
//           { job: "خشکشویی + اتو", price: 131040, subImage: whashSvg },
//           { job: "اتو", price: 131040, subImage: whashSvg },
//           { job: "خیاطی و تعمیارت", price: 131040, subImage: whashSvg }
//         ]
//       }
//     ]
//   }
// ];
const ServicesPopular = ({indexData}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [checkIndex, setCheckIndex] = useState();
  const dispatch = useDispatch();
  const products = useSelector(product);

  const toggleHandler = () => {
    setIsShowModal(!isShowModal);
  };

  const toggleAndIndexHandler = (index) => {
    setCheckIndex(index);

    toggleHandler();
  };
  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(products.products);
  // console.log(indexData? indexData.success :"")
  return (
    <>
      <Box
        sx={{
          bgcolor: "rgb(242, 247, 247)",
          p: "1rem 0",
          m: "1rem 0",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
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
            ? indexData.data.favorite_services.map((item, index) => (
                <SwiperSlide style={{background: "none"}} key={index}>
                  <Link style={{textDecoration: "none", color: "black"}}>
                    <ServicesPopularComponent
                      toggleHandler={() => toggleAndIndexHandler(index)}
                      checkIndex={checkIndex}
                      title={item.title}
                      subTitle={item.subTitle}
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
          isShowModal={isShowModal}
          toggleHandler={() => toggleAndIndexHandler(checkIndex)}
          checkIndex={checkIndex}
          dataModal={products}
        />
      )}
    </>
  );
};

export default ServicesPopular;
