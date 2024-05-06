import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../API/axiosClient";

const initialState = {
  productList: [],
  status: "idle",
  page: 0,
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducer: {
    fetchProduct: (state, action) => {
      state.productList = [...state.productList.action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.status = "success";
      })
      .addCase(fetchProduct.pending, (state) => {
        state.status = "pending";
      });
  },
});

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (page) => {
    if (!page) {
      page = 1;
    }
    try {
      const response = await axiosClient.get(`/products?limit=16&page=${page}`);
      const { data } = response;

      return data.listProduct;
    } catch (error) {
      throw error;
    }
  }
);
