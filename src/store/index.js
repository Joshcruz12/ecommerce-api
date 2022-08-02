import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
import isLoading from "./slices/isLoading.slice";
import cartReducer from "./slices/cart.slice";

export default configureStore({
  reducer: {
    isLoading,
    cart: cartReducer,
    products
  }
});
