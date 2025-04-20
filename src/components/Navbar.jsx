const Navbar = ({ cartCount, openCart }) => {
    return (
      <nav>
        <h1>Fake Store</h1>
        <button onClick={openCart}>Cart ({cartCount})</button>
      </nav>
    );
  };
  
  export default Navbar;
  