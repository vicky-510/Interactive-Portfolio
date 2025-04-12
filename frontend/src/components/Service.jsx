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
            <h2 className='service-title' >SERVICES</h2>
        
        </div>
        <div className="row">
            <div className="col-md-4 service-mb-space" >
                <div className="card special-skill-item border-0 service-bg-color" >
                    <div className="card-header service-bg-color" >
                    <br/>
                    <IoCode size={50} color="#182C61" className='service-icon-color' />
    
                    <div className="card-body">
                        <h3 className="card-title text-white service-title-fw"  >Web Development</h3>
                        <p className="card-text service-desc-color"  > Offering excellent web development services to create responsive and user-friendly websites. Elevate your online presence with expertly crafted solutions. 
                        </p>
                        <br/>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4 service-mb-space" >
                <div className="card special-skill-item border-0 service-bg-color" >
                    <div className="card-header  service-bg-color" >
                    <br/>
                    <IoPlanet size={50} color="#182C61" className='service-icon-color' />
    
                    
                    <div className="card-body">
                        <h3 className="card-title text-white service-title-fw" >Ecommerce Development</h3>
                        <p className="card-text service-desc-color" > I specialize in building secure, scalable eCommerce platforms that enhance online sales and provide a seamless shopping experience.</p>
                        <br/>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-md-4 service-mb-space" > 
                <div className="card special-skill-item border-0 service-bg-color" >
                    <div className="card-header service-bg-color" >
                    <br/>
                    <SiPayloadcms size={50} color="#182C61" style={{fontWeight:'bolder', backgroundColor:'#03A9F4',borderRadius:'30px',padding:'7px'}}/>
                 
                    <div className="card-body">
                        <h3 className="card-title text-white service-title-fw"  >CMS Development</h3>
                        <p className="card-text service-desc-color mb-2 pb-4" >Empower your website with our CMS solutions for smooth, hassle-free content updates and management.</p>
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
