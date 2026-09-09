import './HomePage.css';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import Button from '../../components/ui/Button/Button';

const HomePage = ({ featuredProducts = [], onAddToCart }) => {
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
              <Button size="lg" className="hero-btn">Shop Now</Button>
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
              {featuredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  {...product}
                  onAddToCart={() => onAddToCart && onAddToCart(product)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
