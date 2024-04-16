// import React from 'react';
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCode, IoPlanet} from 'react-icons/io5';
import { SiPayloadcms } from 'react-icons/si';



function Service() {
  return (
    
    <>
    <div id="Service" className="rem-space">
        <br/>
        
      </div>
    <section  >

    <div className="container top-side1  blue-cg bg-change text-center "  >
        <div className="heading">
            <h2 style={{fontWeight:'bolder', fontSize: '28px', color:'#182C61', letterSpacing:'1px' }} >SERVICES</h2>
            <br/>
        <br/>
        <br/>
           
        </div>
        <div className="row">
            <div className="col-md-4" style={{marginBottom:'20px'}}>
                <div className="card special-skill-item border-0" style={{backgroundColor: '#182C61'}}>
                    <div className="card-header" style={{backgroundColor: '#182C61'}}>
                    <br/>
                    <IoCode size={50} color="#182C61" style={{fontWeight:'bolder', backgroundColor:'#03A9F4',borderRadius:'30px',padding:'5px'}}/>
    
                    <div className="card-body">
                        <h3 className="card-title text-white"  style={{fontWeight:'600'}}>Web Development</h3>
                        <p className="card-text" style={{color: 'white', letterSpacing:'1px'}} > Offering excellent web development services to create responsive and user-friendly websites. Elevate your online presence with expertly crafted solutions. 
                        </p>
                        <br/>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4" style={{marginBottom:'20px'}}>
                <div className="card special-skill-item border-0" style={{backgroundColor: '#182C61'}}>
                    <div className="card-header " style={{backgroundColor: '#182C61'}}>
                    <br/>
                    <IoPlanet size={50} color="#182C61" style={{fontWeight:'bolder', backgroundColor:'#03A9F4',borderRadius:'30px',padding:'5px'}}/>
    
                    
                    <div className="card-body">
                        <h3 className="card-title text-white" style={{fontWeight:'600'}}>Ecommerce Development</h3>
                        <p className="card-text" style={{color: 'white', letterSpacing:'1px'}}>Specializing in secure and scalable ecommerce platforms, I enable successful online product sales. Trust in my expertise to build your ideal online store.</p>
                        <br/>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-md-4" style={{marginBottom:'20px'}}> 
                <div className="card special-skill-item border-0" style={{backgroundColor: '#182C61'}}>
                    <div className="card-header" style={{backgroundColor: '#182C61'}}>
                    <br/>
                    <SiPayloadcms size={50} color="#182C61" style={{fontWeight:'bolder', backgroundColor:'#03A9F4',borderRadius:'30px',padding:'7px'}}/>
                 
                    <div className="card-body">
                        <h3 className="card-title text-white"  style={{fontWeight:'600'}}>CMS Development</h3>
                        <p className="card-text" style={{color: 'white', letterSpacing:'1px'}}>Empower your website with our CMS development services for seamless content management and updates. Stay in control with effortless website content management.</p>
                        <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Service;
