import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert('Item already added to the cart');
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return { cart, addToCart, removeFromCart };
};

export default useCart;
