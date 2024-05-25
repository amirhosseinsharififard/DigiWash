const sumQuanitiy = (products) => {
  return products.reduce((counter, product) => counter + product.quantity, 0);
};

const sumPrice = (products) => {
  return products.reduce((total, product) => total + product.price, 0).toFix(2);
};
export { sumQuanitiy, sumPrice };
