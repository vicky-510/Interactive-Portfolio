// import React from "react";
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';

function Starter() {


  return (
    <div className="container-fluid bg-change1" id='Home'>
      <div className="row">
        <div className="col-12">
          <div className="container text-left text-large mx-auto" id="cont-slide">
            <h1 id="t-top" style={{ fontWeight: '700', color: '#182C61' }} className="m-screen" data-aos="fade-up" data-aos-duration="1000">
              Hello, I&rsquo;m
            </h1>
            {/* Carousel Start */}
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={3000}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
            >
              <div className="carousel-item-left" data-aos="fade-up" data-aos-duration="1000">
                {/* Add custom CSS class for left alignment */}
                <h2 style={{ color: '#182C61', fontWeight: '700' }}>Vigneshwaran M</h2>
              </div>
              <div className="carousel-item-left">
                {/* Add custom CSS class for left alignment */}
                <h2 style={{ color: '#182C61', fontWeight: '700' }}>a Frontend developer</h2>
              </div>
              <div className="carousel-item-left">
                {/* Add custom CSS class for left alignment */}
                <h2 style={{ color: '#182C61', fontWeight: '700' }}>a UI/UX designer</h2>
              </div>
              <div className="carousel-item-left">
                {/* Add custom CSS class for left alignment */}
                <h2 style={{ color: '#182C61', fontWeight: '700' }}>a Quick learner</h2>
              </div>
            </Carousel>
            {/* Carousel End */}
            <p className="note" style={{ fontWeight: '700', fontSize: 'large' }} data-aos="fade-up" data-aos-duration="1000">
              Welcome to my{' '}
              <a href="/VoicePort" style={{ color: '#fa8231', textDecoration: 'none', fontWeight: '600' }}>
                Portfolio Website.
              </a>
            </p>
            {/* Social Media Icons */}
            <div className="social-icons" data-aos="fade-up" data-aos-duration="1000">
              <a href="https://www.linkedin.com/in/vwaran" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={32} color="#182C61" style={{marginRight:'8px'}}/>
              </a>
              <a href="https://wa.me/8189950272" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={32} color="#182C61" style={{marginRight:'8px'}}/>
              </a>
              <a href="https://github.com/vicky-510" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} color="#182C61" style={{marginRight:'8px'}}/>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={32} color="#182C61" />
              </a>
            </div>
            <br /><br /><br />
            <h4 className="" style={{ letterSpacing: '1px' }} >
              Let&rsquo;s check out my{' '}
              <span style={{ color: 'white', borderRadius: '5px', backgroundColor: '#182C61', padding: '3.5px', fontSize: 'large', fontWeight: '600', letterSpacing: '1px' }} >
                VOICE PORT
              </span>{' '}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Starter;
