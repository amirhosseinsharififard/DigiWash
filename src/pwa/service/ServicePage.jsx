import { Container, Grid } from "@mui/material";

import clothesServices from "../../../assets/clothesServices.svg";
import ServicesCoponent from "./ServicesCoponent";
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
    <Container>
      <Grid container spacing={2} p={2}>
        {DataServiceComponent.map((item, index) => (
          <ServicesCoponent image={item.image} cost={item.cost} title={item.title} subTitle={item.subTitle} key={index} />
        ))}
      </Grid>
    </Container>
  );
};

export default ServicePage;
