import React from "react";
import "./Navbar.css";
import logo from "../../assets/Navbar/FlyInMinute.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar_buttons">
        <motion.button
          whileTap={{ scale: 0.85 }}
          style={{ border: "none", background: "none" }}
        >
          <button className="navbar_btn1">Support</button>
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.85 }}
          style={{ border: "none", background: "none" }}
        >
          <button className="navbar_btn2">SIGN IN</button>
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
