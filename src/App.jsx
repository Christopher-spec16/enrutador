import React from 'react';
import './index.css';

// Components
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <div>
      <div style={{ padding: '1rem', backgroundColor: '#f1f5f9', borderBottom: '2px solid #cbd5e1', textAlign: 'center' }}>
        <p><strong>Dev Note:</strong> All pages are rendered sequentially below para que puedas ver su maquetación. Están listas para usarse en tus rutas de react-router-dom.</p>
      </div>

      <div style={{ borderBottom: '10px solid #cbd5e1' }}>
        <HomePage />
      </div>

      <div style={{ borderBottom: '10px solid #cbd5e1' }}>
        <CatalogPage />
      </div>

      <div>
        <ProductDetailPage />
      </div>
    </div>
  );
}

export default App;
