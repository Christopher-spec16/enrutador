import './ProductDetailPage.css';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';

const ProductDetailPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="page-content pdp-page">
        <div className="container">
          <a href="/catalog" className="back-btn" style={{textDecoration: 'none', display: 'inline-block'}}>
            &larr; Back to Catalog
          </a>
          
          <div className="product-details-container">
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="main-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" 
                  alt="Premium Wireless Headphones" 
                  className="main-image"
                />
              </div>
              <div className="thumbnail-list">
                <div className="thumbnail-container">
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" alt="Premium Wireless Headphones 1" />
                </div>
                <div className="thumbnail-container">
                  <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80" alt="Premium Wireless Headphones 2" />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info-panel">
              <div className="pdp-header">
                <span className="pdp-category">Electronics</span>
                <h1 className="pdp-title">Premium Wireless Headphones</h1>
                <p className="pdp-price">$299.99</p>
              </div>

              <div className="pdp-description">
                <h3>Description</h3>
                <p>Experience crystal clear sound with our premium wireless headphones. Features active noise cancellation and a 30-hour battery life.</p>
              </div>

              <div className="pdp-actions">
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity</label>
                  <select id="quantity" defaultValue={1} className="quantity-select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                
                <button className="btn btn-primary btn-lg add-to-cart-large-btn">
                  Add to Cart
                </button>
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
