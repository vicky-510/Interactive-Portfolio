// import React from "react";
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaLinkedin, FaWhatsapp, FaGithub,  } from 'react-icons/fa';
//FaInstagram
// import { BsAlignBottom } from 'react-icons/bs';
import { SiLeetcode } from "react-icons/si";


function Starter() {


  return (
    <div className="container-fluid bg-change1 show-space-effect" id='Home'>
      <div className="row pt-5 pb-5 mt-5 ">
        {/* starter-BSpace */}
        <div className="col-12">
          <div className="container text-left text-large mx-auto " id="cont-slide">
            <h1 id="t-top" className="m-screen starter-1"
            // data-aos="fade-up" data-aos-duration="1000"
            >
              Hey there!
            </h1>

            <div className='css-slider-align'>
              <h2 aria-label="Hi! I'm a Vigneshwaran M">
                <span className='css-inside-align'>I&rsquo;m&nbsp;</span>
                <span className="typewriter"></span>
              </h2>
            </div>
            <div className='css-slider-align'>
              <p className="note starter-note"
              // data-aos="fade-up" data-aos-duration="1000"
              >
                Welcome to my{' '}
                <a href="/VoicePort" className='starter-port'>
                world of code.
                </a>
              </p>
            </div>

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
              {/* <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Go to Homepage">
                <FaInstagram size={32} color="#182C61" />
              </a> */}
              <a href="https://leetcode.com/u/vicky510/" target="_blank" rel="noopener noreferrer" aria-label="footer">
                <SiLeetcode size={32} color="#182C61" />
              </a>

            </div>

            <h4 className="new-scr starter-Lspacing" >
              Transforming ideas into 
              {' '}
              <span className='starter-voice' >
              {'< Code />'}
              </span>{' '}
            </h4>



          </div>
        </div>
      </div>


    </div>
  );
}

export default Starter;
