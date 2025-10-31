import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct, IProductState } from "../types/types";

const initialState: IProductState = {
  isLoading: false,
  likedIds: [],
  createdProducts: [],
  deletedIds: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const index = state.likedIds.indexOf(productId);
      if (index === -1) {
        state.likedIds.push(productId);
      } else {
        state.likedIds.splice(index, 1);
      }
    },
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.createdProducts.push(action.payload);
    },
    deleteProductById: (state, action: PayloadAction<number>) => {
      state.deletedIds.push(action.payload);
    },
  },
});

export const { toggleLike, addProduct, deleteProductById } =
  productsSlice.actions;
export default productsSlice.reducer;
