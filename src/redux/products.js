import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';
import { Base64 } from 'crypto-js/enc-base64';
import { serialize } from '../utils/functions';

const axiosConfig = {
  baseURL: 'https://41vn2anfp4.execute-api.us-east-1.amazonaws.com/',
  Accept: 'application/json',
};

const WooCommmerce = axios.create(axiosConfig);

const initialState = {
  products: [],
  page: 1,
  per_page: 12,
  orderby: 'date',
  product: {
    name: '',
    images: [],
    price: '',
    id: '',
    description: '',
    categories: [],
    variations: [],
  },
  variations: [],
  variationSelected: [],
  isLoading: false,
  isLoadingPage: false,
};

export const fetchProducts =
  (categories, reset) => async (dispatch, getState) => {
    try {
      dispatch(ProductsSlice.actions.startLoading());
      dispatch(ProductsSlice.actions.resetPagination());
      const { page, per_page, orderby } = getState().products;
      const params = { page, per_page, orderby, category: categories };

      const res = await WooCommmerce.get(`products?${serialize(params)}`);
      console.log(res.data);

      dispatch(ProductsSlice.actions.setProducts(res.data));
      dispatch(ProductsSlice.actions.stopLoading());
    } catch (err) {
      console.log(err);
    }
  };

export const fetchProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch(ProductsSlice.actions.startLoading());
    const res = await WooCommmerce.get(`product?productId=${id}`);
    dispatch(ProductsSlice.actions.stopLoading());
    dispatch(ProductsSlice.actions.setProduct(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const fetchNextPage = (categories) => async (dispatch, getState) => {
  try {
    const { page, per_page, orderby } = getState().products;

    if (page <= 1) {
      dispatch(ProductsSlice.actions.increasePage());
      return;
    }

    dispatch(ProductsSlice.actions.startLoadingPage());
    const params = { page, per_page, orderby, category: categories };

    const res = await WooCommmerce.get(`products?${serialize(params)}`);

    dispatch(ProductsSlice.actions.nextPage(res.data));
    dispatch(ProductsSlice.actions.increasePage());
    dispatch(ProductsSlice.actions.stopLoadingPage());
  } catch (err) {}
};

export const fetchVariations = (productId) => async (dispatch, getState) => {
  try {
    dispatch(ProductsSlice.actions.startLoading());
    try {
      const variations = await WooCommmerce.get(
        `product-variations?productId=${productId}`
      );
      dispatch(ProductsSlice.actions.stopLoading());
      dispatch(ProductsSlice.actions.setVariations(variations.data));
    } catch (error) {
      console.log(error);
    }
  } catch (err) {
    console.log(err);
  }
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetPagination: (state, action) => {
      state.page = 1;
    },
    increasePage: (state, action) => {
      state.page = state.page + 1;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    nextPage: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    setVariations: (state, action) => {
      state.variations = action.payload;
    },
    startLoading: (state, action) => {
      state.isLoading = true;
    },
    stopLoading: (state, action) => {
      state.isLoading = false;
    },
    startLoadingPage: (state, action) => {
      state.isLoadingPage = true;
    },
    stopLoadingPage: (state, action) => {
      state.isLoadingPage = false;
    },
  },
});

export const { toggleFilter } = ProductsSlice.actions;
export default ProductsSlice.reducer;
