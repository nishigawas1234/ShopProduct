import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productData: [],
  },
  reducers: {
    setProductData(state, action) {
      state.productData = action.payload;
    },
  },
});

export const { setProductData } = productSlice.actions;
export default productSlice.reducer;