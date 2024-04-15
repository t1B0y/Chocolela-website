import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';
import { Base64 } from 'crypto-js/enc-base64';
import { serialize } from '../utils/functions';
import {
  startLoadingGallery,
  stopLoadingGallery,
  startLoadingProduct,
  stopLoadingProduct,
  startLoadingPage,
  stopLoadingPage,
} from './loading';

const axiosConfig = {
  baseURL: 'https://41vn2anfp4.execute-api.us-east-1.amazonaws.com/',
  Accept: 'application/json',
};

const WooCommmerce = axios.create(axiosConfig);

const initialState = {
  products: [],
  page: 1,
  per_page: 12,
  lastPage: false,
  orderby: 'date',
  product: null,
  isVariation: false,
  variations: [],
  variationSelected: 0,
};

export const fetchProducts =
  (categories, reset) => async (dispatch, getState) => {
    try {
      dispatch(startLoadingGallery());
      dispatch(ProductsSlice.actions.resetPagination());
      dispatch(ProductsSlice.actions.setLastPage(false));
      const { page, per_page, orderby } = getState().products;
      const params = { page, per_page, orderby, category: categories };

      const res = await WooCommmerce.get(`products?${serialize(params)}`);

      dispatch(ProductsSlice.actions.setProducts(res.data));
      dispatch(stopLoadingGallery());
    } catch (err) {
      console.log(err);
    }
  };

export const fetchProduct = (id) => async (dispatch, getState) => {
  try {
    let product = null,
      variations = [];
    //trigger the loading flag
    dispatch(startLoadingProduct());

    // send request to get the product selected
    const res = await WooCommmerce.get(`product?productId=${id}`);
    product = res.data;
    //check if its a variation product or single
    //if variation
    if (product.type === 'variable') {
      // fetch all variations
      const res = await WooCommmerce.get(`product-variations?productId=${id}`);
      variations = res.data;

      dispatch(ProductsSlice.actions.setVariation(true));
    } else {
      dispatch(ProductsSlice.actions.setVariation(false));
    }
    dispatch(
      ProductsSlice.actions.setProduct({
        product: product,
        variations: variations,
      })
    );
    dispatch(stopLoadingProduct());
  } catch (err) {
    console.log(err);
  }
};

export const fetchNextPage = (categories) => async (dispatch, getState) => {
  if (getState().products.lastPage) {
    return;
  }
  try {
    const { page, per_page, orderby } = getState().products;

    if (page <= 1) {
      dispatch(ProductsSlice.actions.increasePage());
      return;
    }

    dispatch(startLoadingPage());

    const params = { page, per_page, orderby, category: categories };
    const res = await WooCommmerce.get(`products?${serialize(params)}`);

    if (res.data.length === 0) {
      dispatch(ProductsSlice.actions.setLastPage(true));
      dispatch(stopLoadingPage());
      return;
    }

    dispatch(ProductsSlice.actions.nextPage(res.data));
    dispatch(ProductsSlice.actions.increasePage());
    dispatch(stopLoadingPage());
  } catch (err) {}
};

// export const selectVariation = (idx) => async (dispatch, getState) => {
//   try {
//     dispatch(ProductsSlice.actions.startLoading());
//     try {
//       dispatch(ProductsSlice.actions.selectVaration(idx));
//       dispatch(ProductsSlice.actions.stopLoading());
//     } catch (error) {
//       console.log(error);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

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
      const { variations, product } = action.payload;
      state.product = product;
      state.variations = variations;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    nextPage: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    selectVariation: (state, action) => {
      state.products = state.variations[action.payload];
    },
    setVariation: (state, action) => {
      state.isVariation = action.payload;
    },
    setLastPage: (state, action) => {
      state.lastPage = action.payload;
    },
  },
});

export const { toggleFilter, selectVariation, startLoading } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
