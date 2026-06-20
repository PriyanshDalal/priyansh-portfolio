import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Let's Connect</h2>

      <p className="contact-subtitle">
        Open to internships, collaborations and AI opportunities.
      </p>

      <div className="contact-container">

        <a
          href="mailto:priyanshjaat2005@gmail.com"
          className="contact-btn"
        >
          <MdEmail className="contact-icon" />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/priyansh-a08749212"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          <FaLinkedin className="contact-icon linkedin" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/PriyanshDala"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          <FaGithub className="contact-icon github" />
          <span>GitHub</span>
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          <HiDocumentText className="contact-icon" />
          <span>Resume</span>
        </a>

      </div>
    </section>
  );
}

export default Contact;