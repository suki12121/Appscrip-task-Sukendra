import {FaEarthAmericas} from 'react-icons/fa6'
import {FaInstagram, FaChevronDown} from 'react-icons/fa'
import {CiLinkedin} from 'react-icons/ci'

import './index.css'

const Footer = () => (
  <div className="footer-bg">
    <div className="contact-sign-bg">
      <div className="signup-main-bg">
        <h3 className="signup-heading">Be the first to know</h3>
        <p className="signup-text">Sign up for updates from mettā muse.</p>
        <div className="signup-bg">
          <input
            type="text"
            className="signup-input"
            placeholder="Enter your email..."
          />
          <button type="button" className="subscribe-button">
            Subscribe
          </button>
        </div>
      </div>
      <div className="contact-us-bg">
        <h3 className="signup-heading">CONNTACT US</h3>
        <p className="signup-text">+44 221 133 5360</p>
        <p className="signup-text">customercare@mettamuse.com</p>
        <h3 className="signup-heading">CURRENCY</h3>
        <div className="country-bg">
          <FaEarthAmericas className="country-icon" />
          <p className="signup-heading">.USD</p>
        </div>
        <p className="transaction-text">
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </p>
      </div>
    </div>
    <div className="about-social-bg">
      <div className="about-navigation-bg">
        <div>
          <h3 className="signup-heading">meta muse</h3>
          <h6 className="signup-text">About us</h6>
          <h6 className="signup-text">Stories</h6>
          <h6 className="signup-text">Artisans</h6>
          <h6 className="signup-text">Boutiques</h6>
          <h6 className="signup-text">Contact us</h6>
          <h6 className="signup-text">EuCompanies Docs</h6>
        </div>
        <div>
          <h3 className="signup-heading">Quick Links</h3>
          <h6 className="signup-text">Orders & Shipping</h6>
          <h6 className="signup-text">Join/Login as a seller</h6>
          <h6 className="signup-text">Payment & Pricing</h6>
          <h6 className="signup-text">Return & Refunds</h6>
          <h6 className="signup-text">FAQs</h6>
          <h6 className="signup-text">Privacy Policy</h6>
          <h6 className="signup-text">Terms & Conditions</h6>
        </div>
      </div>
      <div className="social-payment-bg">
        <div className="footer-options responsive-icon">
          <h3 className="signup-heading">metta muse</h3>
          <FaChevronDown className="country-icon responsive-icon" />
        </div>
        <div className="footer-options responsive-icon">
          <h3 className="signup-heading">Quick Links</h3>
          <FaChevronDown className="country-icon responsive-icon" />
        </div>
        <div className="footer-options">
          <h3 className="signup-heading">FOLLOW US</h3>
          <FaChevronDown className="country-icon responsive-icon" />
        </div>
        <div className="social-media">
          <FaInstagram className="country-icon" />
          <CiLinkedin className="country-icon" />
        </div>
        <div>
          <h3 className="signup-heading">metta muse ACCEPTS</h3>
          <img
            src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1712470720/cnsecttyoycjim6qus1b.jpg"
            alt="banner"
            className="payment-img"
          />
        </div>
      </div>
    </div>
    <p className="signup-text">
      Copyright © 2023 mettamuse. All rights reserved.
    </p>
  </div>
)

export default Footer
