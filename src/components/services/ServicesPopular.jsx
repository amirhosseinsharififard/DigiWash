import {Link} from "react-router-dom";
import {useState} from "react";
import ModalIncrease from "../common/ModalIncrease";
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

import "../../styles/SwiperStyle.css";

// import required modules
import {FreeMode, Pagination} from "swiper/modules";
import {checkLocalStorageUserData} from "../../hooks/useLocalStorage";

// // image svg
// import manto from "../../../assets/womenMantoo.7c04032e.svg";
// import whashSvg from "../../../assets/wash.c4124479.svg";

// import {useDispatch, useSelector} from "react-redux";
// import {fetchProducts, product} from "../features/products/productsSlice";
const ServicesPopular = ({indexData, setIsPhoneRegisterModalOpen}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [checkIndex, setCheckIndex] = useState();
  const [data, setData] = useState();
  const [nameData, setNameData] = useState();
  const [itemServices, setItemServices] = useState();

  const [uniqeSubTitle, setUniqeSubTitle] = useState();
  const dataObjectKeys = data && Object.keys(data);
  // const dispatch = useDispatch();
  // const products = useSelector(product);
  const {is_online} = checkLocalStorageUserData() || "";
  // console.log(is_online);

  const toggleHandler = () => {
    setIsShowModal(!isShowModal);
  };

  const toggleAndIndexHandler = (id, itemServices) => {
    setCheckIndex(id);
    setItemServices(itemServices);
    toggleHandler();
  };

  // console.log(uniqeSubTitle)
  return (
    <>
      <Box
        sx={{
          bgcolor: "rgb(242, 247, 247)",
          m: "1rem ",
          pb:"1.5rem",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
        <Typography
          variant='h5'
          fontWeight='bold'
          fontSize='18px'
          fontFamily='Vazir'
          m='1rem'>
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
            ? indexData.map((item) => (
                <SwiperSlide style={{background: "none"}} key={item.id}>
                  {/* {console.log(item)} */}
                  {/* {console.log(uniqeSubTitleButton)} */}
                  <Link
                    style={{textDecoration: "none", color: "black"}}
                    onClick={() => (
                      is_online ?(
                        toggleHandler(),
                      setData(item.services),
                      setNameData(item.name),
                      setUniqeSubTitle(item.unique_subs)
                      ):(
                        setIsPhoneRegisterModalOpen(true)
                      )
                    )}>
                    <ServicesPopularComponent
                      toggleHandler={() => toggleAndIndexHandler(item.id, item)}
                      checkIndex={item.id}
                      title={item.name}
                      subTitle={item.unique_subs}
                      image={item.image}
                      setIsPhoneRegisterModalOpen={setIsPhoneRegisterModalOpen}
                      is_online={is_online}
                    />
                  </Link>
                </SwiperSlide>
              ))
            : "we need data"}
            {indexData
            ? indexData.map((item) => (
                <SwiperSlide style={{background: "none"}} key={item.id}>
                  {/* {console.log(item)} */}
                  {/* {console.log(uniqeSubTitleButton)} */}
                  <Link
                    style={{textDecoration: "none", color: "black"}}
                    onClick={() => (
                      is_online ?(
                        toggleHandler(),
                      setData(item.services),
                      setNameData(item.name),
                      setUniqeSubTitle(item.unique_subs)
                      ):(
                        setIsPhoneRegisterModalOpen(true)
                      )
                    )}>
                    <ServicesPopularComponent
                      toggleHandler={() => toggleAndIndexHandler(item.id, item)}
                      checkIndex={item.id}
                      title={item.name}
                      subTitle={item.unique_subs}
                      image={item.image}
                      setIsPhoneRegisterModalOpen={setIsPhoneRegisterModalOpen}
                      is_online={is_online}
                    />
                  </Link>
                </SwiperSlide>
              ))
            : "we need data"}
        </Swiper>
      </Box>
      {isShowModal && (
        <>
          <ModalIncrease
            data={data[dataObjectKeys]}
            isShowModal={isShowModal}
            toggleHandler={toggleHandler}
            nameData={nameData}
            uniqeSubTitle={uniqeSubTitle}
            itemServices={itemServices}
            setIsPhoneRegisterModalOpen={setIsPhoneRegisterModalOpen}
            // toggleHandler={() => toggleAndIndexHandler(checkIndex)}
            // checkIndex={checkIndex}
            // dataModal={products}
          />
        </>
      )}
    </>
  );
};

export default ServicesPopular;
