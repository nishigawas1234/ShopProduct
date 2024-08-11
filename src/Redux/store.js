import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart/cartSlice"
import productSlice from "./Product/productSlice"

const store = configureStore({
  reducer: {
    cart: cartSlice ,
    product: productSlice
  },
});

export default store;
