import bikex1 from "../assets/projects/bikex1.png";
import bikex2 from "../assets/projects/bikex2.png";

import carrerlens1 from "../assets/projects/carrerlens1.png";
import careerlens2 from "../assets/projects/careerlens2.png";

import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Bike-X",
      image1: bikex1,
      image2: bikex2,
      desc: "Interactive 360° Bike Customization Platform with dynamic pricing and modern user experience.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "",
      demo: "",
    },
    {
      title: "CareerLens",
      image1: carrerlens1,
      image2: careerlens2,
      desc: "AI-powered Placement Predictor that analyzes CGPA, internships, projects and skills to estimate placement chances.",
      tech: ["Python", "Flask", "Pandas", "Scikit-Learn"],
      github: "",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;