import cookie from 'react-cookies';

export const setCartCookie = (cartId) => {
  const week = new Date(new Date().setDate(new Date().getDate() + 7));
  cookie.save('chocolela_cart', cartId, { expires: week });
};
