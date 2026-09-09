import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="/" className="navbar-brand">
          <span className="brand-icon">🛍️</span>
          StoreFront
        </a>
        
        <div className="navbar-menu">
          <a href="/" className="nav-link">Home</a>
          <a href="/catalog" className="nav-link">Catalog</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
