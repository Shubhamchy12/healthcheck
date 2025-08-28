import React from "react";

function Contact() {
  return (
    <section className="contact-section">
      <h3>Book Your Health Test</h3>
      <form className="contact-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Phone Number" />
        <textarea rows="5" placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
