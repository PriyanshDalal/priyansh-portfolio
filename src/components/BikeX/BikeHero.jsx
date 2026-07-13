import { Link } from "react-router-dom";
import bikex1 from "../../assets/projects/bikex1.png";

function BikeHero() {
  return (
    <section className="case-hero">

      <div className="back-home">
        <Link to="/" className="back-btn">
          ← Back to Portfolio
        </Link>
      </div>

      <div className="case-left">

        <p className="case-tag">Featured Project</p>

        <h1>Bike-X</h1>

        <h2>
          Interactive 360° Bike
          <br />
          Customization Platform
        </h2>

        <p className="case-desc">
          Bike-X is a modern web application that allows users to customize a
          motorcycle in real-time with different colors, accessories and dynamic
          pricing while providing an immersive user experience.
        </p>

        <div className="case-tech">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>

        <div className="case-meta">

          <div>
            <h4>Role</h4>
            <p>Frontend Developer</p>
          </div>

          <div>
            <h4>Duration</h4>
            <p>2 Weeks</p>
          </div>

          <div>
            <h4>Status</h4>
            <p>Completed</p>
          </div>

        </div>

      </div>

      <div className="case-right">
        <img
          src={bikex1}
          alt="Bike-X Preview"
        />
      </div>

    </section>
  );
}

export default BikeHero;