import '../styles/components/_footer.scss';

export default function Footer() {
  return (
    <footer className="footer-section">
        
      <div className="footer-container">
        <div className="footer-left">
          <div className="brand">
            <img src="your-logo.png" alt="LYNC Logo" className="logo" />
            <p className="tagline">A GameFi Infrastructure</p>
          </div>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Discord">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#">SDK's</a>
              </li>
              <li>
                <a href="#">Transfer API's</a>
              </li>
              <li>
                <a href="#">Token API's</a>
              </li>
              <li>
                <a href="#">NFT API's</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Press Kit</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Discord</a>
              </li>
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-right">
          <h4>Supercharge your inbox</h4>
          <p>Sign up for our newsletter</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2024 LYNC World &bull; <a href="#">Terms of service</a>
        </p>
      </div>
    </footer>
  );
}
