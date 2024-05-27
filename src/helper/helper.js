const sumQuanitiy = (products) => {
  return products.reduce((counter, product) => counter + product.quantity, 0);
};

const sumPrice = (products) => {
  return products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
};
  // bayad data khas behesh ersal beshe
const productQuantity = (state, id, data) => {
  const index = state.selectedItems.findIndex(
    (item) =>
      item.id === id && item.category === data.category 
  );
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};
export { sumQuanitiy, sumPrice, productQuantity };
