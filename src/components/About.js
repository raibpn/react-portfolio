import React from 'react';
import bipin from '../assets/images/bpn.jpg';

// import Container from 'react-bootstrap/Container';

function About(props) {

    return (
    <section id="about">
        <div className="about container">
            <div className="col-left">
                <div className="about-img">
                    <img src={bipin} alt="img"></img>
                 </div>
          </div>


                <div className="col-right">
                            <h1 className="section-title">ABout<span>me</span></h1>
                            <h2>Web/Software Developer</h2>
                        <p>
                                I am a Developer and passionate about what I do. I recently graduated as a Bachelors Degree in Software Developer
                                from the institute KEA, Copenhagen, Denmark. I have been living in Copenhagen for 4 years. I have knowledge on few
                                of the modern web-dev tools and libraries i.e. React, Angular, Gatsby and other JS frameworks.
                                I am also familiar with stack tech such as MEAN and MERN stack and has used them in my various College&apos;s and personal projects.

                                In my leisure time I like to get together with my friends and go out have fun or just stay at home and have cozy time playing fifa and
                                grabbing some snacks. Playing football, cards and ping-pong are the sports activities that I&apos;d like to indulge once in a while
                                whenever I get the chance.
                        </p>
                        <a href="#" className="cta">Download Resume</a>

                </div>
            </div>
        
    </section>

    );

}


export default About;