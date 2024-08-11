import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
  },
  reducers: {
    setCardData(state, action) {
      state.cartData = action.payload;
    },
    removedCardData(state) {
        state.cartData = undefined;
      },
  },
});

export const { setCardData , removedCardData} = cartSlice.actions;
export default cartSlice.reducer;