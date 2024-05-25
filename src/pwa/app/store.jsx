import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import productsSlice from "../features/products/productsSlice";
import logger from "redux-logger";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productsSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
