import React, { useEffect, useRef, useState } from 'react';
import { ListSliderCart, SliderCart } from '../styledComponents/SliderCart';
import { useDispatch, useSelector } from 'react-redux';
import gsap from 'gsap';
import { removeProduct } from '../redux/cart';

function CartSlider({ show, close }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const slider = useRef();

  useEffect(() => {
    if (show) {
      gsap.to(slider.current, { x: '0' });
    } else {
      gsap.to(slider.current, { x: '100%' });
    }
  }, [show]);

  const listItems = cart.items.map((item, idx) => {
    return (
      <div className="cart-item-container">
        <div className="image-item">
          <img src={item.featured_image} />
        </div>
        <div className="cart-item-right">
          <div className="name-and-price">
            <span className="name">{item.title}</span>
            <span className="price">{item.totals.total}</span>
          </div>
          <div className="remove-and-quantity">
            <span className="quantity">{item.quantity.value}</span>
            <span
              onClick={() => dispatch(removeProduct(item.item_key))}
              className="remove"
            >
              Supprimer
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <SliderCart ref={slider}>
      <button onClick={close}>Close</button>
      <h3>Mon Panier</h3>
      <h4>{`Il y a ${cart.item_count} gourmandise ${
        cart.item_count > 0 ? 's' : ''
      } dans votre panier`}</h4>
      <ListSliderCart>{listItems}</ListSliderCart>
      <span className="line-cart" />
      <div className="price-total">
        <span>Total</span>
        <span>{cart.price_total}</span>
      </div>

      <button className="cart-btn checkout-btn">Passer Ma commande</button>
      <button className="cart-btn shopping-btn">Continuer mon shopping</button>
    </SliderCart>
  );
}

export default CartSlider;
