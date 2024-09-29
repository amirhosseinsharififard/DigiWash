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


const ServicePage = () => {

  let buttonFilter = ["کت", "شلوار", "لباس"];


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
    const fetchData = async () => {
      try {
        const data = await fetchCategoryServices();
        setCategories(data.data.categories);
        setServices(data.data.services);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    fetchData(); // فراخوانی تابع غیرهمزمان
  }, []);


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
                // toggleHandler={() => toggleAndIndexHandler(checkIndex)}
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
    </>
  );
};

export default ServicePage;

// return (
//   <>
// //

// <Grid
//        container
//        maxWidth='724px'
//        m='0 auto 5rem'
//        p='0 1rem'
//        spacing='2rem'>
//          {services &&
//           services.map((item) => (
//             <>
//               <ServicesCoponent
//                 // toggleHandler={() => toggleAndIndexHandler(checkIndex)}
//                 key={item.id}
//                 subTitle={item.unique_subs}
//                 image={item.icon}
//                 cost={item.cost}
//                 name={item.name}
//                 category={item.cat_id}
//               />
//             </>
//           ))}
//    </Grid>
// //      {/* {console.log(isShowModal)}
// //      {isShowModal && (
// //        <ModalIncrease
// //        data={services[0]}
// //          isShowModal={isShowModal}
// //          toggleHandler={() => toggleAndIndexHandler(checkIndex)}
// //          checkIndex={checkIndex}
// //           dataModal={products}
// //        />
// //      )} */}
//   </>
// );
