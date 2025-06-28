// import React from 'react';
import { Container, Button } from 'react-bootstrap';
import vignesh from '../assets/img/vigneshwaran_img.webp'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import '../assets/styles/Main.css';
import { FaDownload } from "react-icons/fa";



const About = () => {
const resumeLink = 'https://drive.google.com/file/d/12QBfYCkkbNPl4JGVmqc5RAbS9d5r1DwO/view';

  return (
    <>
      <div id="About" className="rem-space">
      </div>
      <section className='about-section' >
       
        <h2 className="text-center text-white about-title" >ABOUT ME</h2>
      
        <Container className="card-container about-container-top"   >
          <span className="pro" >PROFILE</span>
          <img className="round"  rel="preload" src={vignesh} alt="user" width="160px"  /> 
          {/* as="image"  */}
          <h3 className='about-name'>Vigneshwaran M</h3>
          {/* <h6 className='about-place'>Madurai, India</h6> */}
          <p className='about-role'>Jr. Software Engineer <br/>(MERN/MEAN)</p>
          <div className="buttons">
            <a href="https://api.whatsapp.com/send?phone=8189950272" target="_blank" rel="noopener noreferrer" className='about-decor-none' aria-label="About">
              <Button className="primary about-btn-1" >
                Message
              </Button>
            </a><span>  </span>
            <a href="https://www.linkedin.com/in/vwaran" target="_blank" rel="noopener noreferrer" className='about-decor-none' aria-label="About">
              <Button className="primary ghost about-btn-2" >
                Follow
              </Button>
            </a>
          </div>
          <br />

          <div className='about-div-social'>
            <a href="https://github.com/vicky-510" target="_blank" rel="noopener noreferrer" className='about-git-css' aria-label="About">
              <FaGithub size={32} color='#182C61' className='icon footer-socio' />
            </a>
            <a href="https://www.linkedin.com/in/vwaran" target="_blank" rel="noopener noreferrer" className='about-linkedin-css' aria-label="About">
              <FaLinkedin size={32} color='#182C61' className='icon footer-socio' />
            </a>
            <a href="https://api.whatsapp.com/send?phone=8189950272" target="_blank" rel="noopener noreferrer" className='about-linkedin-whatsapp' aria-label="About">
              <FaWhatsapp size={32} color='#182C61' className='icon footer-socio' />
            </a>
           
          </div>
         <br/>
          <div className='about-div-download'>
            {/* <a href="https://drive.google.com/file/d/10eSQnPs8AwvCMsdszC3_-ieRzUHw9UuH/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
             className='about-decor-none' aria-label="About" download>
              <Button className="btn btn-warning mx-auto d-block about-btn-resume"  >Download Resume  </Button>
            </a> */}

            <a href={resumeLink} target="_blank" rel="noopener noreferrer"
             className='about-decor-none' aria-label="About" download>
              <Button className="btn btn-warning mx-auto d-block about-btn-resume"  >Download CV <FaDownload size={17} className='about-btn-css-icon'/>
              </Button>
            </a>
          </div>
         
        </Container>
       
      </section>
    </>
  );
};

export default About;
