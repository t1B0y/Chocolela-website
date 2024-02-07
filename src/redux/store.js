import { configureStore } from '@reduxjs/toolkit';
import filter from './filter';
import products from './products';
import cart from './cart';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    products,
  },
});
