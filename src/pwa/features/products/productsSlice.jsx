import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const fetchProducts = createAsyncThunk("users/fetchProducts", () => {
  return fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => data);
});
const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      (state.products = []), (state.error = action.error.message);
    });
  },
});

export default productSlice.reducer;
export { fetchProducts };
  export const product = (state) => state.product.products