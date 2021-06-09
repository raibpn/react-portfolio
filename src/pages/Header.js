import React from 'react';
import Container from 'react-bootstrap/Container';
// import '../Styles/Project.css'
import Particles from 'react-particles-js';


function Content(props) {

  return (
    
    <section id="header">
      
      <div className="header container">
      <div className="nav-bar">
        <div className="brand">
          <a href="">
            <h1><span>B</span>IPIN <span>R</span>AI</h1>
          </a>
        </div>
        <div className="nav-list">
          <div className="hamburger">
            <div className="bar"></div>
          </div>
          <ul>
            <li><a href="#hero" data-after="Home">Home</a></li>
            <li><a href="#services" data-after="Service">Skills</a></li>
            <li><a href="#projects" data-after="Projects">Projects</a></li>
            <li><a href="#about" data-after="About">About</a></li>
            <li><a href="#contact" data-after="Contact">Contact</a></li>
            </ul>
            
          </div>
          
        </div>
        
      </div>
       <Particles 
            params={{
              particles: {
                number: {
                  value: 400,
                  density: {
                    enable: true,
                    value_area: 1000
                  }
                },
                color: {
                  value: '#fff'
                },
                opacity: {
                  value: 0.3,
                  anim: {
                    enable: true
                  }
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2
                  }
                },
                line_linked: {
                  enable: false
                },
                avoidMouse: {
                  enable: false
                },
                move: {
                  speed: 0.2
                },
                interactivity: {
                  detect_on: 'window',
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse"
                    }
                  },
                }
              }
        }}
        />
       
        
      </section>
    
      
    );

}

export default Content;