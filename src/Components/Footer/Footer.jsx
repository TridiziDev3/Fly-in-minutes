import React from "react";
import "./Footer.css";
import {
  FaFacebookMessenger,
  FaInfinity,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import footerImg from "../../assets/Footer/FooterImg.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footer_top_link_div">
          <div className="footer_top_link_text">
            <p>Travel helps companies manage payments easily.</p>
          </div>
          <div className="footer_top_links">
            <p>
              <FaLinkedinIn />
            </p>
            <p>
              <FaFacebookMessenger />
            </p>
            <p>
              <FaTwitter />
            </p>
            <p>
              <FaInfinity />
            </p>
          </div>
        </div>
        <div className="footer_top_navigations">
          <div className="footer_top_company">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footer_top_destination">
            <h3>Destinations</h3>
            <ul>
              <li>Kerala</li>
              <li>Karnataka</li>
              <li>Tamil Nadu</li>
              <li>Sri Lanka</li>
            </ul>
          </div>
        </div>
        <div className="footer_top_contact">
          <div className="footer_top_contact_top">
            <h3>Join Our Newsletter</h3>
          </div>
          <div className="footer_top_contact_mail">
            <input type="email" placeholder="Your email address" />
          <motion.button
            whileTap={{ scale: 0.85 }}
            style={{
              background: "#553214",
              outline: "none",
            }}
          >
            Subscribe
          </motion.button>
            {/* <button>Subscribe</button> */}
          </div>
          <div className="footer_top_contact_txt">
            <p>* Will send you weekly updates for your better tour packages.</p>
          </div>
        </div>
        <div className="footer_side_img">
          <img src={footerImg} alt="footerImg" />
        </div>
      </div>
      <div className="footer_btm_line"></div>
      <div className="footer_btm">
        <p>Copyright @ Spice Circuit 2022. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
