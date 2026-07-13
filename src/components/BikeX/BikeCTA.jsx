function BikeCTA() {
  return (
    <section className="case-section">

      <div className="section-heading">
        <span>07</span>
        <h2>Project Summary</h2>
      </div>

      <div className="cta-card">

        <h2>Bike-X</h2>

        <p className="cta-desc">
          Bike-X is an interactive 3D motorcycle customization platform
          developed to provide users with a realistic product visualization
          experience. The project combines modern frontend technologies with
          real-time customization and dynamic pricing to create an engaging UI.
        </p>

        <div className="cta-info">

          <div>
            <h4>Role</h4>
            <p>Solo Developer</p>
          </div>

          <div>
            <h4>Duration</h4>
            <p>2 Weeks</p>
          </div>

          <div>
            <h4>Built With</h4>
            <p>React • Three.js • React Three Fiber</p>
          </div>

        </div>

        <div className="cta-buttons">

          <a
            href="https://bikex-showcase.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="hero-btn"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/PriyanshDalal/Bike-X"
            target="_blank"
            rel="noreferrer"
            className="hero-btn outline-btn"
          >
            GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default BikeCTA;