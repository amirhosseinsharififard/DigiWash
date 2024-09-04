import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuanitiy } from "../../../helper/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (
        !state.selectedItems.find(
          (item) =>
            item.id === action.payload.id && item.title !== action.payload.title
        )
      ) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuanitiy(state.selectedItems);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) =>
          item.job !== action.payload.job
      );
      state.selectedItems = newSelectedItems;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuanitiy(state.selectedItems);
    },
    increase: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.job == action.payload.job
      );
      state.selectedItems[increaseIndex].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuanitiy(state.selectedItems);
    },
    decrease: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.job == action.payload.job
      );
      state.selectedItems[decreaseIndex].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuanitiy(state.selectedItems);
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.checkout = true;
      state.total = 0;
      state.itemsCounter = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;
export const cart = (state) => state.cart;