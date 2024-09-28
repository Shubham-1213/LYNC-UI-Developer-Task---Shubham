import "../styles/components/_footer.scss";
import lync from "../assets/lync.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="top-container-footer">
        <div className="footer-left">
          <div className="brand">
            <img src={lync} alt="LYNC Logo" className="logo" />
            <p className="tagline">A GameFi Infrastructure</p>
          </div>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn" className="icon-social">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" aria-label="Discord" className="icon-social">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="#" aria-label="Twitter" className="icon-social">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        <div className="footer-middle">
          <div className="one-container">
            <div className="footer-links ">
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
          </div>
          <div className="footer-links two-container ">
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
        </div>
        <div className="bottom-container-footer">
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
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2024 LYNC World &bull; <a href="#">Terms of service</a>
        </p>
        {/* <div className="footer-blur">
           <img src={}
        </div> */}
      </div>
    </footer>
  );
}
