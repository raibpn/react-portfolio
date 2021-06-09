import React from 'react';
import Particles from 'react-particles-js';
import script from '../components/script.js';
// import particles from '../components/script.js'; tomorrow working on vanilla js

// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Hero(props) {

  return (
    <body>
      
      <section id="hero">
        
         <div className="hero container">
          <div>
                   <h1>Hello, <span></span></h1>
                    <h1>It&apos;s me <span></span></h1>
                    <h1>Bipin <span></span></h1>
                     <a href="" type="button" className="cta">Portfolio</a>
               </div>
             </div>
      
       
      </section>
      

    </body>
       

       
   

      
    );

}


export default Hero;


//working partilces
//  <Particles id="particles-js"
//             params={{
//               particles: {
//                 number: {
//                   value: 400,
//                   density: {
//                     enable: true,
//                     value_area: 1000
//                   }
//                 },
//                 color: {
//                   value: '#fff'
//                 },
//                 opacity: {
//                   value: 0.2,
//                   anim: {
//                     enable: true
//                   }
//                 },
//                 size: {
//                   value: 5,
//                   random: true,
//                   anim: {
//                     enable: true,
//                     speed: 3
//                   }
//                 },
//                 line_linked: {
//                   enable: false
//                 },
//                 avoidMouse: {
//                   enable: false
//                 },
//                 move: {
//                   speed: 0.2
//                 },
//                 interactivity: {
//                   etect_on: 'window',
//                   events: {
//                     onhover: {
//                       enable: true,
//                       mode: "repulse"
//                     }
//                   },
//                   modes: {
//                     remove: {
//                       quantity: 10
                    
//                     }
//                   }
//                 }
//               }
//         }}
//         />