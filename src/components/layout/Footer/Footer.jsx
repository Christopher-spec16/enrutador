import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-title">StoreFront</h3>
          <p className="footer-text">The best place to find amazing products at great prices. Quality guaranteed.</p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Legal</h4>
          <ul className="footer-links">
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/returns">Returns</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} StoreFront. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
