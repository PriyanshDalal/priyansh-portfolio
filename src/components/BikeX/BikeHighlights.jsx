function BikeHighlights() {
  return (
    <section className="case-section">

      <div className="section-heading">
        <span>02</span>
        <h2>Technical Highlights</h2>
      </div>

      <div className="highlight-grid">

        <div className="highlight-card">

          <h3>Interactive Customization</h3>

          <p>
            The application allows users to personalize the motorcycle through
            an intuitive interface where visual updates happen instantly,
            creating a smooth and engaging customization experience.
          </p>

        </div>

        <div className="highlight-card">

          <h3>Real-Time Price Calculation</h3>

          <p>
            Every customization option immediately updates the displayed price,
            giving users instant feedback while keeping the shopping cart
            synchronized with their selections.
          </p>

        </div>

        <div className="highlight-card">

          <h3>Component-Based Architecture</h3>

          <p>
            The interface was developed using reusable React components,
            making the application easier to maintain and extend with
            additional features in the future.
          </p>

        </div>

        <div className="highlight-card">

          <h3>Responsive User Experience</h3>

          <p>
            Layouts were designed to adapt across desktops, tablets and mobile
            devices while maintaining usability and visual consistency.
          </p>

        </div>

      </div>

    </section>
  );
}

export default BikeHighlights;