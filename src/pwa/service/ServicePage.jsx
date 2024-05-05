import { Box } from "@mui/material";

import clothesServices from "../../../assets/clothesServices.svg";
import ServicesCoponent from "./ServicesCoponent";
import HeaderPwa from "../home/HeaderPwa";
const DataServiceComponent = [
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },

];
const ServicePage = () => {
  return (
    <>
    <HeaderPwa />

  
      <Box   maxWidth= "724px" m="0 auto 5rem" display="flex" justifyContent="space-evenly" flexWrap="wrap" >
        {DataServiceComponent.map((item, index) => (
          <ServicesCoponent image={item.image} cost={item.cost} title={item.title} subTitle={item.subTitle} key={index} />
        ))}
      </Box>
    </>
  );
};

export default ServicePage;
