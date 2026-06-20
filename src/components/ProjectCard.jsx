import { useEffect, useState } from "react";

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [project.image1, project.image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="project-card">
      <div className="project-image">
        <img
          src={images[currentImage]}
          alt={project.title}
          className="project-img"
        />
      </div>

      <h3>{project.title}</h3>

      <p>{project.desc}</p>

      <div className="tech-stack">
        {project.tech.map((tech, i) => (
          <span key={i} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-buttons">
  <button disabled className="disabled-btn">
    Demo Coming Soon
  </button>

  <button disabled className="disabled-btn outline">
    GitHub Coming Soon
  </button>
</div>
    </div>
  );
}

export default ProjectCard;

<a href="github-link" target="_blank">
  GitHub
</a>