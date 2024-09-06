/* eslint-disable react-hooks/exhaustive-deps */
import {Grid} from "@mui/material";

import clothesServices from "../../../assets/clothesServices.svg";
import ServicesCoponent from "./ServicesCoponent";
import HeaderPwa from "../home/HeaderPwa";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL, BEARER_TOKEN} from "../../API/requests";
import {useLocation} from "react-router-dom";
const DataServiceComponent = [
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "لباس",
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "لباس",
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "لباس",
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "لباس",
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "لباس",
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "شلوار",
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "شلوار",
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "شلوار",
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "شلوار",
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "شلوار",
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "کت",
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "کت",
  },
];
const ServicePage = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItmes, setFilteredItmes] = useState(DataServiceComponent);
  let buttonFilter = ["کت", "شلوار", "لباس"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const location = useLocation();
  const {hash, pathname, search} = location;
  const splitAndIndexPathname = pathname.split("/")[2];
const [categoriesServices,setCategoriesServices]=useState()
const {categories,services}= categoriesServices? categoriesServices:''


  // useEffect(() => {
  //   filterItems();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedFilters]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
      .get(`${BASE_URL}api/category-services/${splitAndIndexPathname}`, BEARER_TOKEN)
      .then((res) =>  setCategoriesServices(res.data.data)     
      );
    };
    fetchData();
  }, []);

  console.log(categoriesServices)
  console.log(categoriesServices ? categories:'')
  console.log(categoriesServices ? services:'')
  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = DataServiceComponent.filter(
          (item) => item.category === selectedCategory
        );
        return temp;
      });
      setFilteredItmes(tempItems.flat());
    } else {
      setFilteredItmes([...DataServiceComponent]);
    }
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
        {services&& services.map((item) => (
          <ServicesCoponent
            key={item.id}
            subTitle={item.unique_subs }
            image={item.icon}
            cost={item.cost}
            name={item.name}
            category={item.cat_id}
          />
        ))}
      </Grid>
    </>
  );
};

export default ServicePage;
