import { motion } from "framer-motion";
import aboutImg from "../assets/about.png";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Side */}
      <div className="about-left">
        <div className="about-image">
          <img
            src={aboutImg}
            alt="About Priyansh"
            className="about-img"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="about-right">
        <h2>About Me</h2>

        <p>
          I am a B.Tech student specializing in Artificial Intelligence and
          Data Science at USAR, GGSIPU. My interests lie in Machine Learning,
          AI-powered applications, and modern web development.
        </p>

        <p>
          I enjoy transforming ideas into practical solutions through projects
          that combine technology, creativity, and problem-solving. From
          building interactive web experiences to developing AI-driven
          applications, I continuously explore new technologies and strengthen
          my technical skills.
        </p>

        <p>
          Currently, I am focused on enhancing my expertise in Full-Stack
          Development, Machine Learning, and Data Science while seeking
          opportunities to apply my knowledge in real-world projects and
          internships.
        </p>

        <div className="about-stats">
          <div className="stat-card">
            <h3>2</h3>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h3>5</h3>
            <p>IBM Badges</p>
          </div>

          <div className="stat-card">
            <h3>2024-2028</h3>
            <p>Graduation</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;