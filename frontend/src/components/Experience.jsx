// import React, { useState } from 'react';
import { useState } from 'react';
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cert from '../assets/img/intern_cert.webp';
import { PiCertificate, PiCertificateDuotone } from "react-icons/pi";



const Experience = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  const toggleCertificate = () => {
    setShowCertificate(!showCertificate);
  };

  // const cert_icon = (<PiCertificate size={25}  className='icon cert_css1' />);
  const cert_hide_icon = (<PiCertificateDuotone size={25}  className='icon cert_css1' />);





  return (
    <>
      <div id="Experience" className="rem-space">

      <br />
         
      </div>
      <section className="portfolio-block cv portfolio_css1"  >

        <div className="container d-flex exp-size ">
          <div className="work-experience group " >
            <div className="heading text-center exp-css1">
              <h2 className='exp-head-css1' >EXPERIENCE</h2>

            </div>


            <div className="item" >
              <div className="row">
                <div className="col-md-6 " >
                  <h3 className='exp-title'>Junior Developer</h3>
                  <h4 className="organization organiz-exp-1" >MBF Digital Production Services Private Ltd, Chennai</h4>

                </div>
                <div className="col-md-6 text-md-end">
                  <span className="period exp-period-1" >07/2024 - Present</span>
                </div>
              </div>
              <hr className='common-hr' />
            </div>
            <div>
              <p className='common-letterSpace'><strong className='star-design-1'>★</strong>Developing dynamic user interfaces with Angular and build server-side applications using Node.js.</p>
              <p className='common-letterSpace'><strong className='star-design-1'>★</strong> Design and manage MySQL databases, writing optimized SQL queries for efficient data handling.</p>
              <p className='common-letterSpace'><strong className='star-design-1'>★</strong> Collaborate with cross-functional teams and senior developers, to deliver high-quality applications.</p>
              <p className='common-letterSpace2'><strong className='star-design-1'>★</strong> Skills:  
                <span className='skill-2_1'>Angular </span>
                <span className='skill-2_2'>Node.js </span>
                <span className='skill-2_3'>React.js</span>
                <span className='skill-2_3'>MySQL</span>


              </p>

              <p>
                <br />
                <br />
              </p>

            </div>


            <div className="item" >
              <div className="row">
                <div className="col-md-6 " >
                  <h3 className='exp-title'>Trainee Programmer</h3>
                  <h4 className="organization organiz-exp-2" >Webstix Design Private Ltd, Chennai</h4>

                </div>
                <div className="col-md-6 text-md-end">
                  <span className="period exp-period-2" >09/2023 - 04/2024</span>
                </div>
              </div>
              <hr className='common-hr' />
            </div>
            <div>
              <p className='common-letterSpace'><strong className='star-design-2'>★</strong> Developed responsive web applications using React and Strapi, ensuring optimal usability across various devices and screen sizes.</p>
              <p className='common-letterSpace'><strong className='star-design-2'>★</strong> Collaborated with cross-functional teams to address complex programming challenges
                and implement innovative solutions.</p>
              <p className='common-letterSpace'><strong className='star-design-2'>★</strong> Contributed to the optimization of web application performance through thorough code
                review and debugging processes.</p>
              <p className='common-letterSpace2'><strong className='star-design-2'>★</strong> Skills:  
                <span className='skill-2_1'>React.js </span>
                <span className='skill-2_2'>Node.js </span>
                <span className='skill-2_3'>Strapi</span>
                <span className='skill-2_3'>MySQL</span>


              </p>

              <p>
                <br />
                <br />
              </p>

            </div>








            <div className="item" >
              <div className="row">
                <div className="col-md-6 " >
                  <h3 className='exp-title'>Android App Development Intern</h3>
                  <h4 className="organization organiz-exp-3" >NilaApps Private Ltd, Chennai</h4>

                </div>
                <div className="col-md-6 text-md-end">
                  <span className="period exp-period-3" >03/2023 - 05/2023</span>
                </div>
              </div>
              <hr className='common-hr' />
            </div>
            <div>
              <p className='common-letterSpace'><strong className='star-design-3'>★</strong>  Led the design and development of an Android app, showcasing proficiency in Java for Android app development and expertise in data gathering and processing from JSON files.</p>
              <p className='common-letterSpace'><strong className='star-design-3'>★</strong>  Performed comprehensive user experience research, utilizing analytical skills to collect feedback, analyze user behavior, and identify areas for significant improvement.</p>
              <p className='common-letterSpace'><strong className='star-design-3'>★</strong>  Proactively resolved complex issues in the Android app through debugging and troubleshooting, ensuring flawless functionality, seamless user interactions, and exceptional user satisfaction.</p>
              <p className='common-letterSpace2'><strong className='star-design-3'>★</strong>  Skills:
                <span className='skill-2_1'>Core Java </span>
                <span className='skill-2_2'>XML </span>
                <span className='skill-2_3'>JSON</span></p>

              <p>
                <br />
              </p>
              {/* <button className="btn btn-warning mx-auto d-block" onClick={toggleCertificate}>
                {showCertificate ? 'Hide Certificate ' : 'View Certificate '}
              </button> */}

              <button className="btn btn-green mx-auto d-block" onClick={toggleCertificate}>
                {showCertificate ? (
                  <><p className='common-letterSpace1 '>
                    Hide Certificate
                    {cert_hide_icon}</p>
                  </>
                ) : (
                  <><p className='common-letterSpace1'>
                    View Certificate
                    {cert_hide_icon}</p>
                  </>
                )}
              </button>

            </div>
            <br />
            <br />
            <div className="card-body text-center" id="cert">
              {showCertificate &&
                (<img src={cert} className="img-fluid mx-auto d-block exp-img-border" alt="Your" width="600"  />)
              }
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default Experience;


