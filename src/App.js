import './Styles/Project.css';
import React from 'react';
import img1 from './assets/images/img-1.png';
import img2 from './assets/images/img-2.png';
import img3 from './assets/images/img-1.png';
import img4 from './assets/images/img-1.png';
import img5 from './assets/images/img-1.png';

// import {BrowserRouter as Router, Link} from "react-router-dom";
import {BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';


import Footer from './components/Footer';
import Header from './pages/Header';
import Contact from './pages/ContactPage';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';



class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: 'Portfolio',
//       headerLinks: [
//         { titles: 'Home', path: "/" },
//         { titles: 'About', path: "/about" },
//         { titles: 'Contact', path: "/contact" }
//       ],
//       home: {
//         titles: "My Portfolio",
//         subTitles: "Project on React",
//         text: "Checkout my projects below"
//       },

//       about: {
//         titles: "About Me",
//         // subTitles: "Project on React",
//         // text: "Checkout my projects below"
//       },

//       contact: {
//         titles: "Contact Me",
//         // subTitles: "Project on React",
//         // text: "Checkout my projects below"
//       }

//     }
//   }

    render() {
        return (
      
            <Router>
               
                    <Header/>
                    <Hero/>
                    <Service/>
                    <section id="projects">
                        <div className="projects container">
                            <div className="projects-header">
                                <h1 className="section-title">Recent<span>Projects</span></h1>
                            </div>
                            <div className="all-projects">
                                <div className="project-item">
                                    <div className="project-info">
                                        <h1>Project 1</h1>
                                        <h2>Coding is Love</h2>
                                        <p>
                                             It is a long established fact that a reader will be distracted by the readable content
                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                            more-or-less normal distribution of letters, as opposed to using Content here, content here,
                                            making it look like readable English. Many desktop publishing packages and web page editors
                                            now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in
                                            their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                        </p>
                                    </div>
                                    <div className="project-img">
                                        <img src={img1} alt="img"></img>
                                    </div>
                                </div>
                                <div className="project-item">
                                    <div className="project-info">
                                        <h1>Project 2</h1>
                                        <h2>Coding is Love</h2>
                                        <p>
                                             It is a long established fact that a reader will be distracted by the readable content
                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                            more-or-less normal distribution of letters, as opposed to using Content here, content here,
                                            making it look like readable English. Many desktop publishing packages and web page editors
                                            now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in
                                            their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                        </p>
                                    </div>
                                    <div className="project-img">
                                        <img src={img2} alt="img"></img>
                                    </div>
                                </div>
                                <div className="project-item">
                                    <div className="project-info">
                                        <h1>Project 3</h1>
                                        <h2>Coding is Love</h2>
                                        <p>
                                            It is a long established fact that a reader will be distracted by the readable content
                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                            more-or-less normal distribution of letters, as opposed to using Content here, content here,
                                            making it look like readable English. Many desktop publishing packages and web page editors
                                            now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in
                                            their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                        </p>
                                    </div>
                                    <div className="project-img">
                                        <img src={img3} alt="img"></img>
                                    </div>
                                </div>
                                <div className="project-item">
                                    <div className="project-info">
                                        <h1>Project 4</h1>
                                        <h2>Coding is Love</h2>
                                        <p>
                                             It is a long established fact that a reader will be distracted by the readable content
                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                            more-or-less normal distribution of letters, as opposed to using Content here, content here,
                                            making it look like readable English. Many desktop publishing packages and web page editors
                                            now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in
                                            their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                        </p>
                                    </div>
                                    <div className="project-img">
                                        <img src={img4} alt="img"></img>
                                    </div>
                                </div>
                                <div className="project-item">
                                    <div className="project-info">
                                        <h1>Project 5</h1>
                                        <h2>Coding is Love</h2>
                                        <p>
                                             It is a long established fact that a reader will be distracted by the readable content
                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                            more-or-less normal distribution of letters, as opposed to using Content here, content here,
                                            making it look like readable English. Many desktop publishing packages and web page editors
                                            now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in
                                            their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                        </p>
                                    </div>
                                    <div className="project-img">
                                        <img src={img5} alt="img"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <About/>
                    <Contact/>
                  <Footer/>
            </Router>
                        
        );
    }
  
}



    export default App;
