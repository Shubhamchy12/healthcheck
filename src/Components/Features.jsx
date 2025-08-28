import React from "react";

function Features() {
  return (
    <section className="features-section">
      <h3>Our Features</h3>

      <div className="features-grid">
        <div className="feature-card">
          <h4>Accurate Reports</h4>
          <p>Reliable results you can trust.</p>
        </div>
        <div className="feature-card">
          <h4>Affordable Tests</h4>
          <p>Quality checks at reasonable prices.</p>
        </div>
        <div className="feature-card">
          <h4>24/7 Support</h4>
          <p>Assistance whenever you need it.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
