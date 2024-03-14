import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from 'react-cookies';
import { useDispatch } from 'react-redux';
import { setCartCookie } from '../utils/functions';

const axiosConfig = {
  baseURL: 'http://ec2-34-239-22-3.compute-1.amazonaws.com/wp-json/cocart/v2/',
  // withCredentials: true,
  Accept: 'application/json',
  headers: {
    'Content-type': 'application/json',
  },
};

const Cart = axios.create(axiosConfig);

const initialState = {
  cartId: undefined,
  items: [],
  item_count: 0,
  totals: '0',
};

export const getCart = () => async (dispatch, getState) => {
  try {
    const cartKey = cookie.load('chocolela_cart');
    if (cartKey) {
      const res = await Cart.get(`cart?cart_key=${cartKey}`);
      const total = await Cart.get(`cart/totals?cart_key=${cartKey}`);

      const cart = {
        items: res.data.items,
        item_count: res.data.item_count,
        totals: total.data,
      };
      dispatch(cartSlice.actions.setCart(cart));
    } else {
      const res = await Cart.get(`cart`);
      const cartKey = res.data.cart_key;
      cookie.save('chocolela_cart', cartKey);
    }
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = (productId, qty) => async (dispatch, getState) => {
  try {
    const cartKey = cookie.load('chocolela_cart');
    const res = await Cart.post(
      cartKey ? `cart/add-item?cart_key=${cartKey}` : `cart/add-item`,
      {
        id: String(productId),
        quantity: String(qty),
      }
    );
    cookie.save('chocolela_cart', cartKey);
    dispatch(getCart());
  } catch (err) {
    console.log(err);
  }
};

export const updateQuantity =
  (productKey, qty) => async (dispatch, getState) => {
    try {
      const cartKey = cookie.load('chocolela_cart');

      const res = await Cart.post(
        `cart/item/${productKey}?cart_key=${cartkey}`,
        {
          quantity: qty,
        }
      );
      setCartCookie(res.data.cart_key);
      dispatch(getCart());
    } catch (err) {
      console.log(err);
    }
  };

export const removeProduct = (productKey) => async (dispatch, getState) => {
  try {
    const cartKey = cookie.load('chocolela_cart');
    const res = await Cart.delete(
      `cart/item/${productKey}?cart_key=${cartKey}`
    );
    setCartCookie(res.data.cart_key);
    cookie.save('chocolela_cart', cartKey);
    dispatch(getCart());
  } catch (err) {
    console.log(err);
  }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartKey: (state, action) => {
      state.cartId = action.payload;
    },
    removeCartKey: (state, action) => {
      state.cartId = undefined;
    },
    setCart: (state, action) => {
      {
        state.items = action.payload.items;
        state.item_count = action.payload.item_count;
        state.totals = action.payload.totals;
      }
    },
  },
});

export const { setCartKey } = cartSlice.actions;
export default cartSlice.reducer;
