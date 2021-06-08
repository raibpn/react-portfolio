import React from "react";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import LinkedIn from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import connect from "../assets/images/connect.png";

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

  
function Footer (){
  return (
     
  <section id="footer">
    <div className="footer container">
      <div className="brand">
        <h1><span>B</span>IPIN <span>R</span>AI</h1>
        </div>
        <div className="">
          <h1>Let&apos;s Connect </h1><img className="social-icon" src={connect} alt="img"></img>
        </div>
      <div className="social-icon">
        <div className="social-item">
          <a href="https://www.facebook.com/profile.php?id=100009164750493"><img src={facebook} alt="img"></img></a>
        </div>
        <div className="social-item">
          <a href="https://www.instagram.com/raebpn/"><img src={instagram} alt="img"></img></a>
        </div>
        <div className="social-item">
          <a href="https://www.linkedin.com/in/bipin-rai-b7011296/"><img src={LinkedIn} alt="img"></img></a>
        </div>
        <div className="social-item">
          <a href="https://github.com/raibpn"><img src={github} alt="img"></img></a>
        </div>
      </div>
    </div>
  </section>
    
  );
}

export default Footer;