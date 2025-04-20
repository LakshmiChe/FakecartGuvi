const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="card">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;
  