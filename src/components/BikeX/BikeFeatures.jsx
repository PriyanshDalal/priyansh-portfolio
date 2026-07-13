import {
  FaPalette,
  FaShoppingCart,
  FaRupeeSign,
} from "react-icons/fa";
import { TbView360Number } from "react-icons/tb";

function BikeFeatures() {
  return (
    <section className="case-section">

      <div className="section-heading">
        <span>04</span>
        <h2>Key Features</h2>
      </div>

      <div className="features-grid">

        <div className="feature-card">
          <div className="feature-icon">
  <FaPalette />
</div>
          <h3>Real-Time Color Customization</h3>
          <p>
            Users can instantly switch between available bike colors while
            previewing the selected design without refreshing the page.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
  <TbView360Number />
</div>
          <h3>360° Interactive View</h3>
          <p>
            The motorcycle can be explored from different angles, providing a
            better understanding of the customized design.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
  <FaRupeeSign />
</div>
          <h3>Dynamic Price Updates</h3>
          <p>
            Every customization instantly recalculates the total price,
            helping users understand the cost of each modification.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
  <FaShoppingCart />
</div>
          <h3>Smart Cart Integration</h3>
          <p>
            Customized selections are automatically reflected in the shopping
            cart, creating a smooth purchasing workflow.
          </p>
        </div>

      </div>

    </section>
  );
}

export default BikeFeatures;