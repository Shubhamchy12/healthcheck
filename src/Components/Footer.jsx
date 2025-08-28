import React from "react";
import facebook from "../assets/facebook.avif"
import instgram from "../assets/instgram.avif"
import whatsapp from "../assets/Whatsapp.avif"

function Footer(){
    return(
        <footer className="footer">
           <h4 className="footer-brand">HealthCheck</h4>
           <div className="social-icons">
            <a href=""><img src={facebook} alt="" /></a>
            <a href=""><img src={instgram} alt="" /></a>
            <a href=""><img src={whatsapp} alt="" /></a>
           </div>
      <p>&copy; 2025 HealthCheck. All Rights Reserved.</p>
    </footer>
    )
}

export default Footer;