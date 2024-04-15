import { configureStore } from '@reduxjs/toolkit';
import filter from './filter';
import products from './products';
import cart from './cart';
import loading from './loading';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    products,
    loading,
  },
});
