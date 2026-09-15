import './CatalogPage.css';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';

const CatalogPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="page-content catalog-page">
        <div className="container">
          <div className="catalog-header">
            <h1 className="catalog-title">Shop Our Collection</h1>
            <p className="catalog-subtitle">Find exactly what you're looking for.</p>
          </div>

          <div className="catalog-layout">
            {/* Sidebar Filters */}
            <aside className="catalog-sidebar">
              <div className="filter-group">
                <h3 className="filter-title">Categories</h3>
                <ul className="filter-list">
                  <li>
                    <button className="filter-btn active">
                      All Products
                    </button>
                  </li>
                  <li>
                    <button className="filter-btn">
                      Electronics
                    </button>
                  </li>
                  <li>
                    <button className="filter-btn">
                      Wearables
                    </button>
                  </li>
                  <li>
                    <button className="filter-btn">
                      Accessories
                    </button>
                  </li>
                  <li>
                    <button className="filter-btn">
                      Home
                    </button>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="catalog-main">
              <div className="catalog-controls">
                <span className="results-count">Showing 4 results</span>
                <select className="sort-select" defaultValue="Sort by: Featured">
                  <option value="Sort by: Featured">Sort by: Featured</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                  <option value="Newest Arrivals">Newest Arrivals</option>
                </select>
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogPage;
