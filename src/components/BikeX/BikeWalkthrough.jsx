import { useState } from "react";
import bikex2 from "../../assets/projects/bikex2.png";

function BikeWalkthrough() {
  const [active, setActive] = useState(0);

  const points = [
    {
      number: "01",
      title: "Color Selection",
      desc: "Users can instantly switch between available bike colors and preview every change in real time.",
    },
    {
      number: "02",
      title: "360° Preview",
      desc: "The motorcycle can be rotated to inspect the customization from different viewing angles.",
    },
    {
      number: "03",
      title: "Dynamic Pricing",
      desc: "Every selected option automatically updates the total price without reloading the page.",
    },
    {
      number: "04",
      title: "User Experience",
      desc: "A clean interface keeps customization simple, responsive and easy to understand.",
    },
  ];

  return (
    <section className="case-section">
      <div className="section-heading">
        <span>03</span>
        <h2>Product Walkthrough</h2>
      </div>

      <div className="interactive-demo">
        <div className="demo-image">
          <img src={bikex2} alt="Bike-X Project" />

          <button className="hotspot h1" onClick={() => setActive(0)}>
            1
          </button>

          <button className="hotspot h2" onClick={() => setActive(1)}>
            2
          </button>

          <button className="hotspot h3" onClick={() => setActive(2)}>
            3
          </button>

          <button className="hotspot h4" onClick={() => setActive(3)}>
            4
          </button>
        </div>

        <div className="demo-card">
          <div className="demo-badge">{points[active].number}</div>

          <h3>{points[active].title}</h3>

          <p>{points[active].desc}</p>
        </div>
      </div>
    </section>
  );
}

export default BikeWalkthrough;