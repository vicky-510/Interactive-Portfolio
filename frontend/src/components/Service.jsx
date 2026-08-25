// import React from 'react';
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCode, IoPlanet } from 'react-icons/io5';
import { SiPayloadcms } from 'react-icons/si';

const services = [
  {
    icon: IoCode,
    title: 'Web Development',
    description: 'Offering excellent web development services to create responsive and user-friendly websites. Elevate your online presence with expertly crafted solutions.',
  },
  {
    icon: IoPlanet,
    title: 'Ecommerce Development',
    description: 'I specialize in building secure, scalable eCommerce platforms that enhance online sales and provide a seamless shopping experience.',
  },
  {
    icon: SiPayloadcms,
    title: 'CMS Development',
    description: 'Empower your website with our CMS solutions for smooth, hassle-free content updates and management.',
  },
];

function Service() {
  return (
    <>
      <div id="Service" className="rem-space"></div>
      <section>
        <div className="container top-side1 text-center">
          <div className="heading">
            <h2 className="service-title">SERVICES</h2>
          </div>
          <div className="row">
            {services.map(({ icon: Icon, title, description }, i) => (
              <div className="col-md-4 service-mb-space" key={title}>
                <div
                  className="service-card service-card-reveal"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="service-icon-color">
                    <Icon size={40} color="#182C61" />
                  </div>
                  <h3 className="card-title text-white service-title-fw">{title}</h3>
                  <p className="card-text service-desc-color">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
