import './HomePage.css';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';

const HomePage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="page-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Discover the Best Products</h1>
              <p className="hero-subtitle">Quality items, amazing prices, delivered straight to your door.</p>
              <button className="btn btn-primary btn-lg hero-btn">Shop Now</button>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="featured-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Featured Products</h2>
              <a href="/catalog" className="view-all-link">View All &rarr;</a>
            </div>
            
            <div className="product-grid">
              <div className="product-card">
                <div className="product-image-container">
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" alt="Premium Wireless Headphones" className="product-image" />
                  <span className="product-category-badge">Electronics</span>
                </div>
                <div className="product-info">
                  <h3 className="product-title">Premium Wireless Headphones</h3>
                  <p className="product-price">$299.99</p>
                  <button className="btn btn-primary btn-md product-add-btn">Add to Cart</button>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image-container">
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Minimalist Smartwatch" className="product-image" />
                  <span className="product-category-badge">Wearables</span>
                </div>
                <div className="product-info">
                  <h3 className="product-title">Minimalist Smartwatch</h3>
                  <p className="product-price">$199.50</p>
                  <button className="btn btn-primary btn-md product-add-btn">Add to Cart</button>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image-container">
                  <img src="https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&q=80" alt="Mechanical Keyboard" className="product-image" />
                  <span className="product-category-badge">Accessories</span>
                </div>
                <div className="product-info">
                  <h3 className="product-title">Mechanical Keyboard</h3>
                  <p className="product-price">$149.00</p>
                  <button className="btn btn-primary btn-md product-add-btn">Add to Cart</button>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image-container">
                  <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80" alt="Ergonomic Mouse" className="product-image" />
                  <span className="product-category-badge">Accessories</span>
                </div>
                <div className="product-info">
                  <h3 className="product-title">Ergonomic Mouse</h3>
                  <p className="product-price">$79.99</p>
                  <button className="btn btn-primary btn-md product-add-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
