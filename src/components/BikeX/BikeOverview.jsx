function BikeOverview() {
  return (
    <section className="case-section">

      <div className="section-heading">
        <span>01</span>
        <h2>Project Overview</h2>
      </div>

      <div className="overview-grid">

        <div className="overview-main">

          <p>
            Bike-X was developed to make motorcycle customization simple,
            interactive and visually engaging. Instead of selecting options from
            long text menus, users can instantly preview different combinations
            of colors, accessories and parts while viewing the estimated price
            update in real time.
          </p>

          <p>
            The main objective was to create a smooth user experience where
            customization feels natural, responsive and enjoyable without making
            the interface confusing.
          </p>

        </div>

        <div className="overview-side">

          <div className="info-card">
            <h4>Project Type</h4>
            <p>Frontend Web Application</p>
          </div>

          <div className="info-card">
            <h4>Category</h4>
            <p>Interactive Product Showcase</p>
          </div>

          <div className="info-card">
            <h4>Tech Stack</h4>
            <p>React, JavaScript, HTML, CSS</p>
          </div>

          <div className="info-card">
            <h4>Focus</h4>
            <p>User Experience & Dynamic Customization</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default BikeOverview;