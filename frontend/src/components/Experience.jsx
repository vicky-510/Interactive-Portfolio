// import React, { useState } from 'react';
import { useState } from 'react';
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cert from '../assets/img/intern_cert.png';

const Experience = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  const toggleCertificate = () => {
    setShowCertificate(!showCertificate);
  };




  return (
    <>
    <div id="Experience" className="rem-space">
      <br />  <br />
    </div>
    <section className="portfolio-block cv"  style={{backgroundColor:'#182C61',color:'white'}} >
    <br/>
    <br/>
    <br />
 
      <div className="container d-flex exp-size">
        <div className="work-experience group " >
          <div className="heading text-center">
          <h2 style={{fontWeight:'bolder', fontSize: '28px', color:'white', letterSpacing:'1px' }} >EXPERIENCE</h2>

          </div>
         
          <br />
          <br />
          <div className="item" >
            <div className="row">
              <div className="col-md-6 " >
                <h3 style={{fontWeight:'bolder', fontSize: '24px', color:'white' ,letterSpacing:'1px'}}>Android App Development Intern</h3>
                <h4 className="organization " style={{fontWeight:'500', fontSize: '17px', color:'#182C61',backgroundColor:'greenyellow',width:'fit-content', padding:'2px 6px',borderRadius:'4px',letterSpacing:'1px' }}>NilaApps Private Ltd, Chennai</h4>

              </div>
              <div className="col-md-6 text-md-end">
                <span className="period" style={{fontSize:'15px'}}>03/2023 - 05/2023</span>
              </div>
            </div>
            <hr />
          </div>
          <div>
            <p style={{ letterSpacing:'1px' }}><strong style={{ color: 'greenyellow' }}>★</strong>  Led the design and development of an Android app, showcasing proficiency in Java for Android app development and expertise in data gathering and processing from JSON files.</p>
            <p style={{ letterSpacing:'1px' }}><strong style={{ color: 'greenyellow' }}>★</strong>  Performed comprehensive user experience research, utilizing analytical skills to collect feedback, analyze user behavior, and identify areas for significant improvement.</p>
            <p style={{ letterSpacing:'1px' }}><strong style={{ color: 'greenyellow' }}>★</strong>  Provided practical and impactful recommendations based on comprehensive research findings, leading to substantial enhancements in the app’s user interface (UI) and overall user experience (UX).</p>
            <p style={{ letterSpacing:'1px' }}><strong style={{ color: 'greenyellow' }}>★</strong>  Proactively resolved complex issues in the Android app through debugging and troubleshooting, ensuring flawless functionality, seamless user interactions, and exceptional user satisfaction.</p>
            <p style={{ letterSpacing:'1px' }}><strong style={{ color: 'greenyellow' }}>★</strong>  Skills:  <span style={{ padding:'4px 6px', borderRadius:'20px', marginRight:'10px',marginLeft:'5px',backgroundColor:'#93e8ff', color:'#182C61', fontWeight:'500'}}>Core Java </span> <span style={{ padding:'4px 6px', borderRadius:'20px',marginRight:'10px',backgroundColor:'#93e8ff', color:'#182C61', fontWeight:'500'}}>XML </span> <span style={{ padding:'4px 6px', borderRadius:'20px',backgroundColor:'#93e8ff', color:'#182C61', fontWeight:'500'}}>JSON</span></p>

            <p>
             <br/>
            </p>
            <button className="btn btn-warning mx-auto d-block" onClick={toggleCertificate}>
              {showCertificate ? 'Hide Certificate' : 'View Certificate'}
            </button>
          </div>
          <br />
          <br />
          <div className="card-body text-center" id="cert">
            {showCertificate &&
             (<img src={cert} className="img-fluid mx-auto d-block" alt="Your" width="600" style={{ border: '15px solid white' }} />)
            }
          </div>
        </div>
      </div>
      <br />
    <br />
    <br/>
    </section>
    </>
  );
};

export default Experience;


