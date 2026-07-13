import {
  FaSearch,
  FaDraftingCompass,
  FaCode,
  FaFlask,
  FaRocket,
} from "react-icons/fa";

function BikeJourney() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Research",
      goal:
        "Explored existing bike customization platforms to understand what users actually expect.",
      outcome:
        "Identified the core customization features and planned a simple interaction flow.",
    },

    {
      icon: <FaDraftingCompass />,
      title: "Planning",
      goal:
        "Designed the project structure before writing code.",
      outcome:
        "Separated the application into reusable React components for easier development.",
    },

    {
      icon: <FaCode />,
      title: "Development",
      goal:
        "Build an interactive customization experience with real-time updates.",
      outcome:
        "Implemented 3D rendering, color switching and dynamic pricing.",
    },

    {
      icon: <FaFlask />,
      title: "Testing",
      goal:
        "Ensure every interaction behaves correctly.",
      outcome:
        "Verified responsiveness, customization flow and pricing updates.",
    },

    {
      icon: <FaRocket />,
      title: "Deployment",
      goal:
        "Make the project publicly accessible.",
      outcome:
        "Optimized assets and deployed the application on Netlify.",
    },
  ];

  return (
    <section className="journey-section">

      <div className="section-heading">
        <span>05</span>
        <h2>Development Journey</h2>
      </div>

      <div className="journey-container">

        {steps.map((step, index) => (

          <div
            className={`journey-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={index}
          >

            <div className="journey-dot">

              {step.icon}

            </div>

            <div className="journey-card">

              <h3>{step.title}</h3>

              <h4>Goal</h4>

              <p>{step.goal}</p>

              <h4>Outcome</h4>

              <p>{step.outcome}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default BikeJourney;