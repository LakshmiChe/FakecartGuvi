import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import useCart from './hooks/useCart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <Navbar cartCount={cart.length} openCart={() => setCartOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      {isCartOpen && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          closeModal={() => setCartOpen(false)}
        />
      )}
    </>
  );
};

export default App;
