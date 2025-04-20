const CartModal = ({ cart, removeFromCart, closeModal }) => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <span>{item.title}</span>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          <button className="close-btn" onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };
  
  export default CartModal;
  