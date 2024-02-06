import { configureStore } from '@reduxjs/toolkit';
import filter from './filter';
import products from './products';

export const store = configureStore({
  reducer: {
    filter,
    products,
  },
});
