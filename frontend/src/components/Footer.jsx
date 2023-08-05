// import React from 'react';
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram, FaMailBulk, FaMap, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Footer(){

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
                <h3 style={{fontWeight: 600, fontSize: '28px'}}>Have Any Project in Mind ?</h3>
                {/* <p>Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo sed ut nibh feugiat, auctor enim quis.</p> */}
              </div>
              <div className="button_box">
                <Link to="/Contact" className="btn btn-warning">Hire Me</Link>
              </div>
            </div>
            <div className="col-lg-5">
            
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="deneb_footer" >
      <div className="widget_wrapper" style={{ backgroundImage: "url(http://demo.tortoizthemes.com/deneb-html/deneb-ltr/assets/images/footer_bg.png)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="widget widegt_about">
                <div className="widget_title"  >
                <p style={{fontWeight: 900, fontSize: '26px',letterSpacing:'1px', marginBottom:'20px', marginTop:'40px'}}>FOLIO</p>
                  {/* <img src={logo} className="img-fluid" alt="" style={{minHeight:'250px'}} /> */}
                </div>
                <p style={{color: '#182C61', fontWeight:'500', letterSpacing:'1px', marginBottom:'20px'}} id="foot-content">Expert in crafting responsive and user-friendly websites. Offering professional web development services to elevate your online presence. Let&lsquo;s collaborate and bring your vision to life. Contact me to get started.</p>
                <ul className="social" style={{display:'inline-flex', listStyleType:'none'}}>
                  <li> 
                    <a href="https://www.linkedin.com/in/vwaran" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={26} color="#182C61" style={{marginRight:'8px',float:'left'}}/>
                   </a>
                  </li>
                  <li>
                  <a href="https://api.whatsapp.com/send?phone=8189950272" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={26} color="#182C61" style={{marginRight:'8px'}}/>
                  </a>
                  </li>
                  <li>
                  <a href="https://github.com/vicky-510" target="_blank" rel="noopener noreferrer">
                   <FaGithub size={26} color="#182C61" style={{marginRight:'8px'}}/>
                  </a>
                  </li>
                  <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                   <FaInstagram size={26} color="#182C61"  />
                  </a>
                  </li>
                </ul>
                <br/><br/><br/>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget widget_link">
                <div className="widget_title">

                  <h4 style={{fontWeight: 600}}>Links</h4>
                </div>
                <ul style={{ padding: 0, margin: 0 }}>
                  <li style={{ listStyleType: 'none' }}>
                    <Link to="/#About" style={{ display: 'inline-flex', textDecoration: 'none', color: '#182C61' }}>
                      About
                    </Link>
               </li>
                  
                  <li style={{ listStyleType: 'none' }}>
                    <Link to="/Contact" style={{ display: 'inline-flex', textDecoration: 'none', color: '#182C61' }}>
                      Contact
                    </Link>                    <li style={{ listStyleType: 'none' }}>
                    <Link to="/#Service" style={{ display: 'inline-flex', textDecoration: 'none', color: '#182C61' }}>
                      Services
                   </ Link>
                    </li>

                  </li>
                  <li style={{ listStyleType: 'none' }}>
                    <Link to="/VoicePort" style={{ display: 'inline-flex', textDecoration: 'none', color: '#182C61',marginBottom:'10px' }}>
                      VoicePort
                  </Link>
                  </li>

                
                </ul>

              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget widget_contact">
                <div className="widget_title">
                  <h4 style={{fontWeight: 600}}>Contact Us</h4>
                </div>
                <div className="contact_info">
                  <div className="single_info">
                 
                    <div className="info">
                    <div className="icon">
                    <FaPhoneAlt size={17} color="#182C61" style={{marginRight:'8px',float:'left'}}/>
                    </div>
                      <p><a href="tel:+919246147999" style={{ listStyleType: 'none', textDecoration: 'none', color: 'inherit' }}>
                        +91 8189950272
                      </a>
                      </p>
                    </div>
                  </div>
                  <div className="single_info">
                    <div className="icon">
                    <FaMailBulk size={20} color="#182C61" style={{marginRight:'8px',float:'left'}}/>
                    </div>
                    
                    <div className="info">
                    <p><a href="mailto:vignesh510510@gmail.com" style={{ listStyleType: 'none', textDecoration: 'none', color: 'inherit' }}>vignesh510510@gmail.com</a></p>
                    <div className="icon">
                    <FaMap size={20} color="#182C61" style={{marginRight:'8px',float:'left'}}/>
                    </div>

                     
                    </div>
                  </div>
                  <div className="single_info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info">
                      <p> K.pudur,<span> Madurai.</span></p>
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
                <p style={{fontWeight: 500, letterSpacing:'1px'}} id="foot-copy">Copyright &copy; 2023 All rights reserved.</p>
              </div>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
    
// <footer class="footer py-4" style={{color: '#182C61'}}>
//   <div class="container">
//     <div class="row">
//       <div class="col-md-6">
//         <h4 style={{fontWeight: 900, fontSize: '28px'}}>PORTFOLIO</h4>
//         <div className="social-icons">
//               <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin size={24} color="#182C61" style={{marginRight:'8px'}}/>
//               </a>
//               <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
//                 <FaWhatsapp size={24} color="#182C61" style={{marginRight:'8px'}}/>
//               </a>
//               <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
//                 <FaGithub size={24} color="#182C61" style={{marginRight:'8px'}}/>
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
//     <p style={{fontWeight: 600}}>&copy; 2023 Vigneshwaran M. All rights reserved.</p>
//   </div>
// </footer>
   );


}

export default Footer;