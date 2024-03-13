import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';
import { Base64 } from 'crypto-js/enc-base64';

const axiosConfig = {
  baseURL: 'https://41vn2anfp4.execute-api.us-east-1.amazonaws.com/',
  withCredentials: true,
  Accept: 'application/json',
};

const WooCommmerce = axios.create(axiosConfig);

const initialState = {
  products: [],
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
};

export const fetchProducts =
  (...args) =>
  async (dispatch, getState) => {
    try {
      dispatch(ProductsSlice.actions.startLoading());
      const res = await WooCommmerce.get(`products?category=${args.join(',')}`);
      const parsed = res.data.map((product) => {
        const obj = {};
        obj.name = product.name;
        obj.images = product.images.map((img) => img.src);
        obj.price = product.price;
        obj.id = product.id;
        return obj;
      });
      dispatch(ProductsSlice.actions.stopLoading());
      dispatch(ProductsSlice.actions.setProducts(parsed));
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
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
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
  },
});

export const { toggleFilter } = ProductsSlice.actions;
export default ProductsSlice.reducer;
