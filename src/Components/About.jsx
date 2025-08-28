import React from "react";

function About(){
    return(
        <section className="about-section">

            <h3>Why Choose Us?</h3>

            <div className="about-grid">

                <div className="about-card">
                    <h4>Expert Professionals</h4>
                    <p>Certified health experts to ensure accurate results.</p>
                </div>
                <div className="about-card">
                    <h4>Fast Results</h4>
                    <p>Quick and reliable health check reports</p>
                </div>
                <div className="about-card">
                    <h4>Modern Equipment</h4>
                    <p>We use state-of-the-art technology for testing.</p>
                </div>

                

            </div>

        </section>
    )
}

export default About;