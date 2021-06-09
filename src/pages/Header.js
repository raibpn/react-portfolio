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
      <Particles id="particle"
        params={{
       
          particles: {
            number: {
              value: 120,
              density: {
                enable: false
              }
            },
            size: {
              value: 5,
              random: true
            },
            move: {
              direction: "random",
              outMode: "out"
            },
            links: {
              enable: false
            }
          },
          interactivity: {
            etect_on: 'window',
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              remove: {
                quantity: 10
              }
            }
          }
        }}
        height="100vh"
        />
       
        
      </section>
    
      
    );

}

export default Content;