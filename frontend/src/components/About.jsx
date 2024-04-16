// import React from 'react';
import { Container, Button } from 'react-bootstrap';
import vignesh from '../assets/img/vigneshwaran_img.webp'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import '../assets/styles/Main.css';



const About = () => {

  return (
    <>
      <div id="About" className="rem-space">
      </div>
      <section style={{
        fontFamily: 'Montserrat, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#182C61'
      }} >
        <br />
        <br />  <br />
        <br />
        <h2 className="text-center text-white" style={{ fontSize: '28px', fontWeight: 700 }}>ABOUT ME</h2>
        <br />
        <br />
        <Container className="card-container" style={{ backgroundColor: 'white' }}  >
          <span className="pro" style={{ letterSpacing: '1px' }}>PROFILE</span>
          <img className="round" src={vignesh} alt="user" width="170px" style={{ border: '3px solid #03BFCB', marginTop: '30px', padding: '7px' }} />
          <h3 style={{ color: '#182C61', letterSpacing: '1px' }}>Vigneshwaran M</h3>
          <h6 style={{ textTransform: 'none', color: '#182C61', letterSpacing: '1px' }}>Madurai, India</h6>
          <p style={{ color: '#182C61', letterSpacing: '1px' }}>Front-end developer</p>
          <div className="buttons">
            <a href="https://api.whatsapp.com/send?phone=8189950272" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} aria-label="About">
              <Button className="primary" style={{ color: 'white', letterSpacing: '1px' }}>
                Message
              </Button>
            </a><span>  </span>
            <a href="https://www.linkedin.com/in/vwaran" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} aria-label="About">
              <Button className="primary ghost" style={{ letterSpacing: '1px' }}>
                Follow
              </Button>
            </a>
          </div>
          <br />

          <div style={{ display: 'inline-flex', columnGap: '10px' }}>
            <a href="https://github.com/vicky-510" target="_blank" rel="noopener noreferrer" style={{ color: '#182C61', marginRight: '5px' }} aria-label="About">
              <FaGithub size={32} color='#182C61' className='icon' />
            </a>
            <a href="https://www.linkedin.com/in/vwaran" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', marginRight: '10px', color: '#182C61' }} aria-label="About">
              <FaLinkedin size={32} color='#182C61' className='icon' />
            </a>
            <a href="https://api.whatsapp.com/send?phone=8189950272" target="_blank" rel="noopener noreferrer" style={{ color: '#182C61', marginLeft: '5px' }} aria-label="About">
              <FaWhatsapp size={32} color='#182C61' className='icon' />
            </a>
            <br />
            <br />
          </div>
          <br />
          <br />
          <div style={{ display: 'inline-flex', columnGap: '10px' }}>
            <a href="https://media.licdn.com/dms/document/media/D562DAQHuOvOJhQIA0w/profile-treasury-document-pdf-analyzed/0/1691158011287?e=1704931200&v=beta&t=tULmnGb94QRLPjo7eJZMF4weRgA5sl2uiHQKnf-Ruwk" target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none' }} aria-label="About" download>
              <Button className="btn btn-warning mx-auto d-block" style={{ letterSpacing: '1px', fontSize: '14px', padding: '10px' }} >Download Resume  </Button>
            </a>

            <a href="https://media.licdn.com/dms/document/media/D562DAQGe0ufUznLTEg/profile-treasury-document-pdf-analyzed/0/1691158041189?e=1704931200&v=beta&t=J8izJfzu5IaZYX45-8olyGV2Pvr7C5pf-0YD27Ly-78" target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none' }} aria-label="About" download>
              <Button className="btn btn-info mx-auto d-block" style={{ letterSpacing: '1px', fontSize: '14px', padding: '10px' }} >Download CV </Button>
            </a>
          </div>
          <br />
          <br />
          <br />
        </Container>
        <br />
        <br />  <br />
        <br />
      </section>
    </>
  );
};

export default About;
