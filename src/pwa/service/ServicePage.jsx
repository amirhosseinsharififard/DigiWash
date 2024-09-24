/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {Button, Grid} from "@mui/material";
// 
// import clothesServices from "../../../assets/clothesServices.svg";
import ServicesCoponent from "./ServicesCoponent";
import HeaderPwa from "../home/HeaderPwa";
import {useEffect, useState} from "react";
import {fetchCategory_services} from "../../API/requests";
// import {useLocation} from "react-router-dom";
// import ModalIncrease from "../../share/ModalIncrease";

const ServicePage = () => {
 
  // const [selectedFilters, setSelectedFilters] = useState([]);
  // const [filteredItmes, setFilteredItmes] = useState(DataServiceComponent);
  let buttonFilter = ["کت", "شلوار", "لباس"];

  // const [isShowModal, setIsShowModal] = useState(false);
  // const [checkIndex, setCheckIndex] = useState();

  // const toggleHandler = () => {
  //   setIsShowModal(!isShowModal);
  // };

  // const toggleAndIndexHandler = (index) => {
  //   setCheckIndex(index);
  //   toggleHandler();
  // };

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  // const location = useLocation();
  // const {hash, pathname, search} = location;
  // const splitAndIndexPathname = pathname.split("/")[2];
  // const [categoriesServices, setCategoriesServices] = useState();
  // const {categories, services} = categoriesServices ? categoriesServices : "";

  // useEffect(() => {
  //   filterItems();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedFilters]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .get(
  //         `${BASE_URL}api/category-services/${splitAndIndexPathname}`,
  //         BEARER_TOKEN
  //       )
  //       .then((res) => setCategoriesServices(res.data.data));
  //   };
  //   fetchData();
  // }, []);
  const [categories, setCategories] = useState(null); // مقدار اولیه null به جای undefined
  const [services, setServices] = useState(null); // مقدار اولیه null به جای undefined
  const [error, setError] = useState(null); // برای مدیریت خطا

  useEffect(() => {
    console.log('====================================');
    console.log('use effect');
    console.log('====================================');
    const fetchData = async () => {
      try {
        const data = await fetchCategory_services();
        setCategories(data.data.categories);
        setServices(data.data.services);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    fetchData(); // فراخوانی تابع غیرهمزمان
  }, []);
console.log('====================================');
console.log(categories && categories);
console.log(services && services);
console.log('====================================');

  // console.log(categoriesServices);
  // console.log(categoriesServices ? categories : "");
  // console.log(categoriesServices ? services[0].services["ساده"] : "");
  // const filterItems = () => {
  //   if (selectedFilters.length > 0) {
  //     let tempItems = selectedFilters.map((selectedCategory) => {
  //       let temp = DataServiceComponent.filter(
  //         (item) => item.category === selectedCategory
  //       );
  //       return temp;
  //     });
  //     setFilteredItmes(tempItems.flat());
  //   } else {
  //     setFilteredItmes([...DataServiceComponent]);
  //   }
  // };

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