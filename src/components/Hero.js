import React from 'react';
import Particles from 'react-particles-js';
// import particles from '../components/script.js'; tomorrow working on vanilla js

// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
      <section id="hero">
        
        <div className="hero container">
          
      <div>
        <h1>Hello, <span></span></h1>
        <h1>It&apos;s me <span></span></h1>
        <h1>Bipin <span></span></h1>
        <a href="https://www.facebook.com/profile.php?id=100009164750493" type="button" className="cta">Portfolio</a>
          </div>
         {/* <Particles/> */}
         <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
          />
           <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
          />
           <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
          />
           <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
          />
         
         
    </div>
  </section>
    );

}


export default Hero;