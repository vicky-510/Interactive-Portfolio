import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const SERVICE_ID = "service_xf5ui3q";
const TEMPLATE_ID = "template_gp5rrko";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init("m0LuEuudhJEpY7NHr");
  }, []);

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

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

    try {
      try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        templateParams.ipAddress = data.ip;
      } catch {
        // IP lookup is best-effort only; continue without it.
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      toast.success('Your message has been sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '', company: '' });
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong sending your message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div id="Contact" className="rem-space contact-div-css"></div>
      <section className="contact-section-v2">
        <Container>
          <h2 className="text-center contact-title-v2">Get In Touch</h2>
          <p className="text-center contact-subtitle-v2">
            Have a project or opportunity in mind? Send a message and I&rsquo;ll get back to you.
          </p>

          <Row className="contact-grid-v2">
            <Col lg="7">
              <div className="contact-form-card">
                <Form onSubmit={handleFormSubmit}>
                  <Row>
                    <Col lg="6">
                      <Form.Group className="mb-3">
                        <Form.Control className="contact-input" type="text" placeholder="Name *" name="name" value={formData.name} onChange={handleChange} required />
                      </Form.Group>
                    </Col>

                    <Col lg="6">
                      <Form.Group className="mb-3">
                        <Form.Control className="contact-input" type="email" placeholder="Email *" name="email" value={formData.email} onChange={handleChange} required />
                      </Form.Group>
                    </Col>

                    <Col lg="6">
                      <Form.Group className="mb-3">
                        <Form.Control className="contact-input" type="tel" placeholder="Phone *" pattern="[6-9]\d{9}" minLength="10" maxLength="12" name="phone" value={formData.phone} onChange={handleChange} required />
                      </Form.Group>
                    </Col>

                    <Col lg="6">
                      <Form.Group className="mb-3">
                        <Form.Control className="contact-input" type="text" placeholder="Company name *" name="company" id="company" value={formData.company} onChange={handleChange} required />
                      </Form.Group>
                    </Col>

                    <Col lg="12">
                      <Form.Group className="mb-3">
                        <Form.Control className="contact-input" as="textarea" rows={4} placeholder="Message *" minLength="3" maxLength="100" name="message" value={formData.message} onChange={handleChange} required />
                      </Form.Group>
                    </Col>

                    <Col lg="12">
                      <Button type="submit" className="about-btn-primary contact-submit-btn" disabled={isSending}>
                        {isSending ? 'SENDING...' : 'SEND MESSAGE'}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>

            <Col lg="5">
              <div className="contact-info-card">
                <div className="contact-info-item">
                  <FaMapMarkerAlt size={20} className="contact-info-icon" />
                  <div>
                    <h6 className="contact-info-label">Address</h6>
                    <p className="contact-info-text">Madurai, Tamilnadu</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <FaPhoneAlt size={18} className="contact-info-icon" />
                  <div>
                    <h6 className="contact-info-label">Call</h6>
                    <p className="contact-info-text">+91 8189950272</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <FaEnvelope size={18} className="contact-info-icon" />
                  <div>
                    <h6 className="contact-info-label">Email</h6>
                    <p className="contact-info-text">vignesh510510@gmail.com</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
