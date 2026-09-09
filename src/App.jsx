import React from 'react';
import './index.css';

// Components
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

// Dummy Data
const dummyProducts = [
  {
    id: 1,
    title: 'Premium Wireless Headphones',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    description: 'Experience crystal clear sound with our premium wireless headphones. Features active noise cancellation and a 30-hour battery life.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80',
    ]
  },
  {
    id: 2,
    title: 'Minimalist Smartwatch',
    price: 199.50,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    description: 'Track your fitness, receive notifications, and look stylish with this minimalist smartwatch.'
  },
  {
    id: 3,
    title: 'Mechanical Keyboard',
    price: 149.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&q=80',
    description: 'Type comfortably for hours on this tactile mechanical keyboard with customizable RGB backlighting.'
  },
  {
    id: 4,
    title: 'Ergonomic Mouse',
    price: 79.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80',
    description: 'Reduce wrist strain with this state-of-the-art ergonomic wireless mouse.'
  }
];

const categories = ['Electronics', 'Wearables', 'Accessories', 'Home'];

function App() {
  return (
    <div>
      <div style={{ padding: '1rem', backgroundColor: '#f1f5f9', borderBottom: '2px solid #cbd5e1', textAlign: 'center' }}>
        <p><strong>Dev Note:</strong> All pages are rendered sequentially below para que puedas ver su maquetación. Están listas para usarse en tus rutas.</p>
      </div>

      <div style={{ borderBottom: '10px solid #cbd5e1' }}>
        <HomePage featuredProducts={dummyProducts.slice(0, 4)} />
      </div>

      <div style={{ borderBottom: '10px solid #cbd5e1' }}>
        <CatalogPage 
          products={dummyProducts} 
          categories={categories} 
          activeCategory="Electronics" 
        />
      </div>

      <div>
        <ProductDetailPage product={dummyProducts[0]} />
      </div>
    </div>
  );
}

export default App;
