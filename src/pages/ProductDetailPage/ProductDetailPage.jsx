import './ProductDetailPage.css';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import Button from '../../components/ui/Button/Button';

const ProductDetailPage = ({ product, onAddToCart, onBack }) => {
  if (!product) return null;

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="page-content pdp-page">
        <div className="container">
          <button className="back-btn" onClick={onBack}>
            &larr; Back to Catalog
          </button>
          
          <div className="product-details-container">
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="main-image-container">
                <img 
                  src={product.image || 'https://via.placeholder.com/600'} 
                  alt={product.title} 
                  className="main-image"
                />
              </div>
              {product.images && product.images.length > 1 && (
                <div className="thumbnail-list">
                  {product.images.map((img, index) => (
                    <div key={index} className="thumbnail-container">
                      <img src={img} alt={`${product.title} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="product-info-panel">
              <div className="pdp-header">
                {product.category && (
                  <span className="pdp-category">{product.category}</span>
                )}
                <h1 className="pdp-title">{product.title}</h1>
                <p className="pdp-price">${Number(product.price).toFixed(2)}</p>
              </div>

              <div className="pdp-description">
                <h3>Description</h3>
                <p>{product.description || 'No description available for this product.'}</p>
              </div>

              <div className="pdp-actions">
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity</label>
                  <select id="quantity" defaultValue={1} className="quantity-select">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                <Button 
                  size="lg" 
                  className="add-to-cart-large-btn"
                  onClick={() => onAddToCart && onAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </div>
              
              <div className="pdp-features">
                <div className="feature-item">
                  <span className="feature-icon">🚚</span>
                  <div>
                    <h4>Free Shipping</h4>
                    <p>On orders over $50</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🛡️</span>
                  <div>
                    <h4>1 Year Warranty</h4>
                    <p>Manufacturer guarantee</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">↩️</span>
                  <div>
                    <h4>30-Day Returns</h4>
                    <p>No questions asked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
