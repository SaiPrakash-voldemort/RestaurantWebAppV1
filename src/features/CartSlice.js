import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    del(state, action) {
      state.splice(action.payload, 1);
    },
  },
});
export const { add, del } = CartSlice.actions;
export default CartSlice.reducer;
