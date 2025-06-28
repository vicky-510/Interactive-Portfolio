import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contacts = () => {

  const Navigate = useNavigate();

  useEffect(() => {
    emailjs.init("m0LuEuudhJEpY7NHr");
  }, []);

  const SERVICE_ID = "service_xf5ui3q";
  const TEMPLATE_ID = "template_gp5rrko";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Use formData to do whatever you want with the form data
    // For example, you can save it to a database

    // Send user details to email
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      ipAddress: '',
      referrerURL: document.referrer,
      operatingSystem: navigator.platform,
      browserName: navigator.userAgent,
      language: navigator.language,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
    };

    // Fetch the user's IP address from a third-party service
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        templateParams.ipAddress = data.ip;
        sendEmail(SERVICE_ID, TEMPLATE_ID, templateParams);
      })
      .catch(error => {
        console.log(' ', error);
        sendEmail(SERVICE_ID, TEMPLATE_ID, templateParams);
      });


  const sendEmail = (serviceID, templateID, templateParams) => {
    emailjs.send(serviceID, templateID, templateParams)


  };
  toast.success(`Your message has been sent successfully!`);

    // Clear form data after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      company: '', // Add any other form fields if needed
    });

    Navigate('/');



  };


  return (
    <>
      <Navbar />
      <div id="Contact"  className="rem-space contact-div-css"> <br />
     
      </div>
      <section className='contact-section-css' >
        <Container className='contact-div-css1'>


          <div className="contact-container">
            <h2 className="text-center contact-title-css" ><br/>

              CONTACT ME
            </h2>
            <br /><br />
            <Row>
              <Col lg="8">
                <div className="contact-box p-4 contact-div-body" ><br />
                  <h5>Fields marked with &#39;*&#39; are required.</h5>
                  <Form onSubmit={handleFormSubmit} >
                    <Row>



                      <Col lg="6">
                        <Form.Group className="mt-3">
                          <Form.Control type="text" placeholder="Name *" name="name" value={formData.name} onChange={handleChange} required />
                        </Form.Group>
                      </Col>

                      <Col lg="6">
                        <Form.Group className="mt-3">
                          <Form.Control type="email" placeholder="Email *" name="email" value={formData.email} onChange={handleChange} required />
                        </Form.Group>
                      </Col>



                      <Col lg="6">
                        <Form.Group className="mt-3">
                          <Form.Control type="tel" placeholder="Phone *" pattern="[6-9]\d{9}" minLength="10" maxLength="12" name="phone" value={formData.phone} onChange={handleChange} required />
                        </Form.Group>
                      </Col>

                      <Col lg="6">
                        <Form.Group className="mt-3">
                          <Form.Control type="text" placeholder="Company name *" name="company" id="company" value={formData.company} onChange={handleChange} required />
                        </Form.Group>
                      </Col>


                      <Col lg="12">
                        <Form.Group className="mt-3">
                          <Form.Control as="textarea" rows={4} placeholder="Message *" minLength="3" maxLength="100" name="message" value={formData.message} onChange={handleChange} required />
                        </Form.Group>
                      </Col>

                      <Col lg="12">
                        <Button type="submit" className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"
                        //  onClick={sendUserDetails}
                         >
                          <span>SUBMIT</span>
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
              <Col lg="4" className="bg-image contact-col-css" >
                <div className="detail-box p-4 text-white" >
                  <br /><br />
                  <h5 className="font-weight-light mb-3 contact-address-css">ADDRESS</h5>
                  <p className="op-7 contact-text-css">
                    4/11 Ganapathy Servai street,
                    <br />
                    K.Pudur, Madurai-7.
                  </p>
                  <h5 className="font-weight-light mb-3 mt-4 contact-address-css">CALL US</h5>
                  <p className="op-7 contact-text-css">
                    +91-8189950272
                    <br />
                    Vignesh510510@gmail.com
                  </p>

                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <br />
        <br />
        <br />
        <br />
      </section>
      <Footer />

    </>







  );
};

export default Contacts;

  // const sendUserDetails = () => {
  //   // Prepare the template parameters
  //   const templateParams = {
  //     name: formData.name,
  //     email: formData.email,
  //     phone: formData.phone,
  //     company: formData.company,
  //     message: formData.message,
  //     ipAddress: '',
  //     referrerURL: document.referrer,
  //     operatingSystem: navigator.platform,
  //     browserName: navigator.userAgent,
  //     language: navigator.language,
  //     screenWidth: window.screen.width,
  //     screenHeight: window.screen.height,
  //   };

  //   // Fetch the user's IP address from a third-party service
  //   fetch('https://api.ipify.org?format=json')
  //     .then(response => response.json())
  //     .then(data => {
  //       templateParams.ipAddress = data.ip;
  //       sendEmail(SERVICE_ID, TEMPLATE_ID, templateParams);
  //     })
  //     .catch(error => {
  //       console.log(' ', error);
  //       sendEmail(SERVICE_ID, TEMPLATE_ID, templateParams);
  //     });
  // };

  // const sendEmail = (serviceID, templateID, templateParams) => {
  //   emailjs.send(serviceID, templateID, templateParams)


  // };