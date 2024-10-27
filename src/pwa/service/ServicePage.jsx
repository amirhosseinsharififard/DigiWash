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
import {Link, useLocation} from "react-router-dom";
import ModalIncrease from "../../share/ModalIncrease";

const ServicePage = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const [categories, setCategories] = useState(null); // مقدار اولیه null به جای undefined
  const [services, setServices] = useState(null); // مقدار اولیه null به جای undefined
  const [data, setData] = useState(); // id برای مودال
  const [dataId, setDataID] = useState(); // id برای مودال
  const [key, setKey] = useState(null); // key modal
  const [value, setValue] = useState(null); // key modal
  const [error, setError] = useState(null); // برای مدیریت خطا
  const [uniqeSubTitle, setUniqeSubTitle] = useState();
  const [itemServices, setItemServices] = useState();

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

  useEffect(() => {
    const fetchData = async (fetchIndex) => {
      try {
        const data = await fetchCategoryServices(fetchIndex);
        setCategories(data.data.categories);
        setServices(data.data.services);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    fetchData(locationIndex); // فراخوانی تابع غیرهمزمان
  }, []);

  const toggleHandler = (id, services) => {
    setIsShowModal((prev) => !prev);
    setItemServices(itemServices)
    setDataID(id);
    Object.entries(services).forEach(([key, val]) => {
      setKey(key); // تنظیم کلید
      setValue(val); // تنظیم مقدار
      console.log(val)
    });
  };

  // console.log(key && key)
  // console.log(value && value)


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
          services.map((item, id) => (
            <>
              {/* {console.log(item)} */}
              {() => (setData(item.services), setNameData(item.name))}
              <ServicesCoponent
                // onClick={() => (setData(item.services),setNameData(item.name))}
                item={item}
                toggleHandler={() => (toggleHandler(id, item.services),setUniqeSubTitle(item.unique_subs))}
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
        <>
          <ModalIncrease
            data={value}
            isShowModal={isShowModal}
            toggleHandler={() => toggleHandler()}
            nameData={services[dataId].name}
            uniqeSubTitle={uniqeSubTitle}
            itemServices={itemServices}
          />
        </>
      )}
    </>
  );
};

export default ServicePage;
