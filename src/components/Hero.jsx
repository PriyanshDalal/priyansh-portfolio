import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <p className="intro">👋 Hello, I'm</p>

        <h1 className="name">
          PRIYANSH <br />
        </h1>

        <h2 className="role">
          AI & Data Science Student
        </h2>

        <p className="desc">
          Building intelligent digital experiences with AI,
          Machine Learning and Modern Web Technologies.
        </p>

        <div className="buttons">
  <a href="#projects" className="hero-btn">
    View Projects
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="hero-btn outline-btn"
  >
    Resume
  </a>
</div>
      </motion.div>

      {/* RIGHT SIDE */}
      <div className="hero-image">
        <div className="image-card">
          <img
            src={heroImg}
            alt="Priyansh"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;