import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [project.image1, project.image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="project-card">

      <div className="project-image">
        <img
          src={images[currentImage]}
          alt={project.title}
          className="project-img"
        />
      </div>

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.desc}</p>

        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={project.caseStudy}
          className="view-project-btn"
        >
          View Project →
        </Link>

      </div>

    </div>
  );
}

export default ProjectCard;