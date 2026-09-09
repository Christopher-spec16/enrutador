import './ProductCard.css';
import Button from '../ui/Button/Button';

const ProductCard = ({ image, title, price, category, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image || 'https://via.placeholder.com/300'} alt={title} className="product-image" />
        {category && <span className="product-category-badge">{category}</span>}
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${Number(price).toFixed(2)}</p>
        <Button variant="primary" className="product-add-btn" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
