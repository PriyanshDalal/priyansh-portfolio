function Timeline() {
  const journey = [
    {
      year: "2024",
      title: "Started B.Tech AI & Data Science",
      desc: "Joined USAR, GGSIPU and began learning programming, AI and Data Science fundamentals."
    },
    {
      year: "2025",
      title: "Built Real Projects",
      desc: "Developed Bike-X and CareerLens while exploring React, Machine Learning and Web Development."
    },
    {
      year: "2026",
      title: "AI Certifications & Internship Preparation",
      desc: "Completed IBM AI certifications and focused on building industry-ready skills."
    }
  ];

  return (
    <section id="timeline" className="timeline">
      <h2>My Journey</h2>

      <div className="timeline-container">
        {journey.map((item, index) => (
          <div className="timeline-card" key={index}>
            <span className="year">{item.year}</span>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;