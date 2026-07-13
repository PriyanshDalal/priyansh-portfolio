import "./Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="nav-left">
        <h2 className="logo">Priyansh</h2>

        <div className="status">
          <span className="status-dot"></span>
          <span>Available for Internship</span>
        </div>
      </div>

      <ul className="nav-center">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-right">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Resume ↗
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;