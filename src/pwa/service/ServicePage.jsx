import { Grid } from "@mui/material";

import clothesServices from "../../../assets/clothesServices.svg";
import ServicesCoponent from "./ServicesCoponent";
import HeaderPwa from "../home/HeaderPwa";
import { useEffect, useState } from "react";
const DataServiceComponent = [
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "لباس"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "لباس"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "لباس"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "لباس"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "لباس"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "شلوار"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "شلوار"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "شلوار"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "شلوار"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "شلوار"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "کت"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده",
    category: "کت"
  }
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

  

  useEffect(() => {
    filterItems();
<<<<<<< HEAD
  // eslint-disable-next-line react-hooks/exhaustive-deps
=======
>>>>>>> 4a43fe6157a45098f74b9de462339918f559595f
  }, [selectedFilters]);


  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = DataServiceComponent.filter(
          (item) => item.category === selectedCategory
        );
        return temp;
      });
      setFilteredItmes(tempItems.flat());
    }else{
      setFilteredItmes([...DataServiceComponent])
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
        {filteredItmes.map((item, index) => (
          <ServicesCoponent
            key={index}
            image={item.image}
            cost={item.cost}
            title={item.title}
            subTitle={item.subTitle}
            category={item.category}
          />
        ))}
      </Grid>
    </>
  );
};

export default ServicePage;
