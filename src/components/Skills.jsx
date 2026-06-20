import {
  SiPython,
  SiReact,
  SiJavascript,
  SiFlask,
  SiPandas,
  SiNumpy,
  SiGithub,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Python", icon: <SiPython color="#3776AB" /> },
{ name: "React", icon: <SiReact color="#61DAFB" /> },
{ name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
{ name: "Flask", icon: <SiFlask color="#FFFFFF" /> },
{ name: "Pandas", icon: <SiPandas /> },
{ name: "NumPy", icon: <SiNumpy color="#4DABCF" /> },
{ name: "GitHub", icon: <SiGithub color="#FFFFFF" /> },
{ name: "Machine Learning", icon: "🤖" },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;