import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartsItems: [],
};
export const cartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id } = action.payload;
      const existingItemIndex = state.cartsItems.findIndex(
        (item) => item._id === _id
      );

      if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng quantum
        state.cartsItems[existingItemIndex].quantum++;
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào và thiết lập quantum là 1
        state.cartsItems.push({ ...action.payload, quantum: 1 });
      }
    },
    deleteProductCart: (state, action) => {
      state.cartsItems = state.cartsItems.filter(
        (item) => item._id !== action.payload._id
      );
      console.log(state.cartsItems);
    },
    incrementProductCart: (state, action) => {
      state.cartsItems = state.cartsItems.map((item) => {
        if (item._id === action.payload._id) {
          item.quantum++;
        }
        return item;
      });
    },
    decrementProductCart: (state, action) => {
      state.cartsItems = state.cartsItems.map((item) => {
        if (item._id === action.payload._id && item.quantum > 1) {
          item.quantum--;
        }
        return item;
      });
    },
    deleteAll: (state) => {
      state.cartsItems = [];
    },
  },
});
