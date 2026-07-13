import {
  FaMotorcycle,
  FaPalette,
  FaUserShield,
  FaCloudUploadAlt,
} from "react-icons/fa";

function BikeFuture() {
  const improvements = [
    {
      icon: <FaMotorcycle />,
      title: "Multiple Bike Models",
      desc: "Support different motorcycle models so users can customize and compare multiple bikes.",
    },
    {
      icon: <FaPalette />,
      title: "Advanced Customization",
      desc: "Add customization for headlights, exhausts, fuel tanks, wheels and other individual components.",
    },
    {
      icon: <FaUserShield />,
      title: "User Accounts",
      desc: "Allow users to save, revisit and manage their customized bike configurations.",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Cloud Storage",
      desc: "Store configurations online and enable sharing through unique links.",
    },
  ];

  return (
    <section className="case-section">

      <div className="section-heading">
        <span>06</span>
        <h2>Future Improvements</h2>
      </div>

      <div className="future-grid">

        {improvements.map((item, index) => (

          <div className="future-card" key={index}>

            <div className="future-icon">

              {item.icon}

            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default BikeFuture;