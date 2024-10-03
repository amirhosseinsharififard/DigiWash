/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {Button, Grid} from "@mui/material";
//
// import clothesServices from "../../../assets/clothesServices.svg";
import ServicesCoponent from "./ServicesCoponent";
import HeaderPwa from "../home/HeaderPwa";
import {useEffect, useState} from "react";
import {fetchCategoryServices} from "../../API/requests";
import {useLocation} from "react-router-dom";
import ModalIncrease from "../../share/ModalIncrease";

const ServicePage = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  let buttonFilter = ["کت", "شلوار", "لباس"];

  const locationIndex = useLocation().pathname.split("/")[2];
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const [categories, setCategories] = useState(null); // مقدار اولیه null به جای undefined
  const [services, setServices] = useState(null); // مقدار اولیه null به جای undefined
  const [error, setError] = useState(null); // برای مدیریت خطا

  useEffect(() => {
    const fetchData = async (fetchIndex) => {
      try {
        const data = await fetchCategoryServices(fetchIndex);
        setCategories(data.data.categories);
        setServices(data.data.services);
        console.log(data);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    fetchData(locationIndex); // فراخوانی تابع غیرهمزمان
  }, []);

  const toggleHandler = () => {
    setIsShowModal((prev) => !prev);
  };

  return (
    <>
      <HeaderPwa
        handleFilterButtonClick={handleFilterButtonClick}
        buttonFilter={buttonFilter}
      />

      <Grid
        container
        maxWidth='724px'
        m='0 auto 5rem'
        p='0 1rem'
        spacing='2rem'>
        {services &&
          services.map((item) => (
            <>
              <ServicesCoponent
                item={item}
                toggleHandler={() => toggleHandler(locationIndex)}
                key={item.id}
                // moshkel az injas va bayad data az samt api dorost she yebar araye miad yebar object
                subTitle={item.unique_subs}
                image={item.icon}
                cost={item.cost}
                name={item.name}
                category={item.cat_id}
              />
            </>
          ))}
      </Grid>
      {isShowModal && (
        <ModalIncrease
          // data={data[dataObjectKeys]}
          // isShowModal={isShowModal}
          // toggleHandler={toggleHandler}
          // nameData={nameData}
               data={''}
          isShowModal={''}
          toggleHandler={''}
          nameData={''}
          // toggleHandler={() => toggleAndIndexHandler(checkIndex)}
          // checkIndex={checkIndex}
          // dataModal={products}
        />
      )}
    </>
  );
};

export default ServicePage;