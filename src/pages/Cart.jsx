import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h2>Mon Panier</h2>

      <button>Passer ma commande</button>
    </div>
  );
}

export default Cart;
