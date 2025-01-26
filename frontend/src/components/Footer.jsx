// import React from 'react';
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram, FaMailBulk, FaMap, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SiLeetcode } from "react-icons/si";


function Footer(){
   const getFullYear = () => {
   return new Date().getFullYear();

   }


   return ( 
    <>
    <section className="deneb_cta" id="foot-copy">
    <br/>
    <br/>
      <div className="container" >
        <div className="cta_wrapper">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta_content">
                <h3 className='footer-title'>Have Any Project in Mind ?</h3>
              </div>
              <div className="button_box">
                <Link to="/Contact" className="btn btn-warning contact-font-size-css">Hire Me</Link>
              </div>
            </div>
            <div className="col-lg-5">
            
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="deneb_footer" >
      <div className="widget_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="widget widegt_about">
                <div className="widget_title"  >
                <p className='footer-head-title'>Vwaran</p>
                  {/* <img src={logo} className="img-fluid" alt="" style={{minHeight:'250px'}} /> */}
                </div>
                <p className='footer-content-css' id="foot-content">Expert in crafting responsive and user-friendly websites. Offering professional web development services to elevate your online presence. Let&lsquo;s collaborate and bring your vision to life. Contact me to get started.</p>
                <ul className="social footer-common-ul" >
                  <li> 
                    <a href="https://www.linkedin.com/in/vwaran" target="_blank" rel="noopener noreferrer" aria-label="footer">
                    <FaLinkedin size={26} color="#182C61" className="footer-icon-css"/>
                   </a>
                  </li>
                  <li>
                  <a href="https://api.whatsapp.com/send?phone=8189950272" target="_blank" rel="noopener noreferrer" aria-label="footer">
                  <FaWhatsapp size={26} color="#182C61" className='footer-icon-social'/>
                  </a>
                  </li>
                  <li>
                  <a href="https://github.com/vicky-510" target="_blank" rel="noopener noreferrer" aria-label="footer">
                   <FaGithub size={26} color="#182C61" className='footer-icon-social'/>
                  </a>
                  </li>
                  <li>
                  <a href="https://leetcode.com/u/vicky510/" target="_blank" rel="noopener noreferrer" aria-label="footer">
                   <SiLeetcode size={26} color="#182C61"  />
                  </a>
                  </li>
                   {/* <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="footer">
                   <FaInstagram size={26} color="#182C61"  />
                  </a>
                  </li> */}
                </ul>
                <br/><br/><br/>
              </div>
            </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="widget widget_link">
              <div className="widget_title">
                <h4 className="footer-side-title">Links</h4>
              </div>
              <ul className='footer-link-ul-css'>
                <li className='footer-list-none'>
                  <Link to="/#About" className='footer-link'>
                    About
                  </Link>
                </li>
                <li className='footer-list-none'>
                  <Link to="/Contact" className='footer-link'>
                    Contact
                  </Link>
                </li>
                <li className='footer-list-none'>
                  <Link to="/#Service" className='footer-link'>
                    Services
                  </Link>
                </li>
                <li className='footer-list-none'>
                  <Link to="/VoicePort" className='footer-voice'>
                    VoicePort
                  </Link>
                </li>
              </ul>
            </div>
           </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget widget_contact">
                <div className="widget_title">
                  <h4 className="footer-side-title">Contact Us</h4>
                </div>
                <div className="contact_info">
                  <div className="single_info">
                 
                    <div className="info">
                    <div className="icon">
                    <FaPhoneAlt size={17} color="#182C61" className="footer-icon-css"/>
                    </div>
                      <p><a href="tel:+918189950272" className='footer-side-text' aria-label="footer">
                        +91 8189950272
                      </a>
                      </p>
                    </div>
                  </div>
                  <div className="single_info">
                    <div className="icon">
                    <FaMailBulk size={20} color="#182C61" className="footer-icon-css"/>
                    </div>
                    
                    <div className="info">
                    <p><a href="mailto:vignesh510510@gmail.com" className='footer-side-text' aria-label="footer">vignesh510510@gmail.com</a></p>
                    <div className="icon">
                    <FaMap size={20} color="#182C61" className="footer-icon-css"/>
                    </div>

                     
                    </div>
                  </div>
                  <div className="single_info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info footer-info-address">
                      <p> K.Pudur,<span> Madurai.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright_text">
                <br/>
                <p className='foot-copy-right' id="foot-copy">Copyright &copy; {getFullYear()} All rights reserved.</p>
              </div>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
     );


    }
    
    export default Footer;






















    
// <footer class="footer py-4" style={{color: '#182C61'}}>
//   <div class="container">
//     <div class="row">
//       <div class="col-md-6">
//         <h4 style={{fontWeight: 900, fontSize: '28px'}}>PORTFOLIO</h4>
//         <div className="social-icons">
//               <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin size={24} color="#182C61" className='footer-icon-social'/>
//               </a>
//               <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
//                 <FaWhatsapp size={24} color="#182C61" className='footer-icon-social'/>
//               </a>
//               <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
//                 <FaGithub size={24} color="#182C61" className='footer-icon-social'/>
//               </a>
//               <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram size={24} color="#182C61" />
//               </a>
//             </div>
//             <br/>
//             <br/>
  
//       </div>
//       <div class="col-md-3" style={{letterSpacing:'1px', textDecoration:'none',color:'#182C61'}}>
//         <h4 style={{fontWeight: 600,fontSize: '22px', letterSpacing:'1px',textDecoration:'none',color:'#182C61'}}>Links</h4>
//         <ul class="list-unstyled" >
//           <li><a href="#2" style={{letterSpacing:'1px', textDecoration:'none',color:'#182C61'}}>Home</a></li>
//           <li><a href="#8" style={{letterSpacing:'1px', textDecoration:'none',color:'#182C61'}}>About</a></li>
//           <li><a href="#6" style={{letterSpacing:'1px', textDecoration:'none',color:'#182C61'}}>Service</a></li>
//           <li><a href="#7" style={{letterSpacing:'1px', textDecoration:'none',color:'#182C61'}}>Contact</a></li>
//         </ul>
//       </div>
//       <div class="col-md-3" style={{letterSpacing:'1px'}}>
//         <h4 style={{fontWeight: 600, fontSize: '22px', letterSpacing:'1px'}}>Contact</h4>
//         <ul class="list-unstyled" >
//           <li>Email: vignesh510510@gmail.com</li>
//           <li>Phone: 8189950272</li>
//           <li>Address: 4/11 Ganapathy Servai Street, K.Pudur, Madurai-7</li>
//         </ul>
//       </div>
//     </div>
//   </div>
//   <br/>
//   <br/>
//   <div class="text-center py-3" style={{letterSpacing:'1px'}}>
//     <p className="footer-side-title">&copy; 2023 Vigneshwaran M. All rights reserved.</p>
//   </div>
// </footer>
  