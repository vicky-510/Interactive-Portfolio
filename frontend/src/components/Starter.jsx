// import React from "react";
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';
import { BsAlignBottom } from 'react-icons/bs';

function Starter() {


  return (
    <div className="container-fluid bg-change1" id='Home'>
      <div className="row starter-BSpace">
        <div className="col-12">
          <div className="container text-left text-large mx-auto" id="cont-slide">
            <h1 id="t-top"  className="m-screen starter-1" 
            // data-aos="fade-up" data-aos-duration="1000"
            >
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
              <div className="carousel-item-left" 
              // data-aos="fade-up" data-aos-duration="1000"
              >
                <h2 className="starter-1">Vigneshwaran M</h2>
              </div>
              <div className="carousel-item-left">
                <h2 className="starter-1">a MERN stack developer</h2>
              </div>
              <div className="carousel-item-left">
                <h2 className="starter-1">a Full developer</h2>
              </div>
              {/* <div className="carousel-item-left">
                <h2 className="starter-1">a UI/UX designer</h2>
              </div> */}

              <div className="carousel-item-left">
                <h2 className="starter-1">a Quick learner</h2>
              </div>
            </Carousel>
            {/* Carousel End */}
            <p className="note starter-note" 
            // data-aos="fade-up" data-aos-duration="1000"
            >
              Welcome to my{' '}
              <a href="/VoicePort" className='starter-port'>
                Portfolio Website.
              </a>
            </p>
            {/* Social Media Icons */}
            <div className="social-icons starter-social-icons" 
            // data-aos="fade-up" data-aos-duration="1000"
            >
              <a href="https://www.linkedin.com/in/vwaran" target="_blank" rel="noopener noreferrer" aria-label="Go to Homepage">
                <FaLinkedin size={32} color="#182C61" className='starter-right' />
              </a>
              <a href="https://wa.me/8189950272" target="_blank" rel="noopener noreferrer" aria-label="Go to Homepage">
                <FaWhatsapp size={32} color="#182C61" className='starter-right' />
              </a>
              <a href="https://github.com/vicky-510" target="_blank" rel="noopener noreferrer" aria-label="Go to Homepage">
                <FaGithub size={32} color="#182C61" className='starter-right' />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Go to Homepage">
                <FaInstagram size={32} color="#182C61" />
              </a>
            </div>
         
            <h4 className="new-scr starter-Lspacing" >
              Let&rsquo;s check out my{' '}
              <span className='starter-voice' >
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
