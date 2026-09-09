import './CatalogPage.css';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';

const CatalogPage = ({ products = [], categories = [], activeCategory, onAddToCart, onCategoryChange }) => {
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
                    <button 
                      className={`filter-btn ${!activeCategory ? 'active' : ''}`}
                      onClick={() => onCategoryChange && onCategoryChange(null)}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category}>
                      <button 
                        className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => onCategoryChange && onCategoryChange(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="catalog-main">
              <div className="catalog-controls">
                <span className="results-count">Showing {products.length} results</span>
                <select className="sort-select">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>

              {products.length > 0 ? (
                <div className="product-grid">
                  {products.map((product) => (
                    <ProductCard 
                      key={product.id}
                      {...product}
                      onAddToCart={() => onAddToCart && onAddToCart(product)}
                    />
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <span className="empty-icon">🔍</span>
                  <h3>No products found</h3>
                  <p>Try adjusting your filters or category selection.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogPage;
