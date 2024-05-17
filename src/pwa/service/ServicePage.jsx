import {  Grid } from "@mui/material";

import clothesServices from "../../../assets/clothesServices.svg";
import ServicesCoponent from "./ServicesCoponent";
import HeaderPwa from "../home/HeaderPwa";
const DataServiceComponent = [
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  },
  {
    image: clothesServices,
    cost: 4000,
    title: "     کت و شلواز زنانه",
    subTitle: " ساده, کار شده"
  }
];
const ServicePage = () => {
  return (
    <>
      <HeaderPwa />

      <Grid
        container
        maxWidth='724px'
        m='0 auto 5rem'
        p='0 1rem'
        spacing="2rem"
        >
        {DataServiceComponent.map((item, index) => (
        
            <ServicesCoponent
             key={index}
              image={item.image}
              cost={item.cost}
              title={item.title}
              subTitle={item.subTitle}
            />
          
        ))}
      </Grid>
    </>
  );
};

export default ServicePage;
