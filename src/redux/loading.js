import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gallery: true,
  page: false,
  product: true,
  global: true,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoadingGallery: (state, action) => {
      state.gallery = true;
    },
    stopLoadingGallery: (state, action) => {
      state.gallery = false;
    },
    startLoadingProduct: (state, action) => {
      state.product = true;
    },
    stopLoadingProduct: (state, action) => {
      state.product = false;
    },
    startLoadingGlobal: (state, action) => {
      state.global = true;
    },
    stopLoadingGlobal: (state, action) => {
      state.global = false;
    },
    startLoadingPage: (state, action) => {
      state.page = true;
    },
    stopLoadingPage: (state, action) => {
      state.page = false;
    },
  },
});

export const {
  startLoadingGallery,
  stopLoadingGallery,
  startLoadingGlobal,
  stopLoadingGlobal,
  startLoadingProduct,
  stopLoadingProduct,
  startLoadingPage,
  stopLoadingPage,
} = loadingSlice.actions;
export default loadingSlice.reducer;
