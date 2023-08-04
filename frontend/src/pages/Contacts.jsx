// import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/styles/Main.css';
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
import LoaderBlue from '../components/LoaderBlue';
import { useContactMutation } from '../slices/adminApiSlice';
import {setContacts} from '../slices/contactSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [contact, { isLoading }] = useContactMutation();


  useEffect(() => {
       
  },[navigate]);


  const submitHandler = async (e) => {
    e.preventDefault();
   
        try{
            const res = await contact({name, email,phone, company, message }).unwrap();
            dispatch(setContacts({...res}))
          
            navigate('/');
            toast.success(`Your response has been sent successfully`);            }
        catch(err){
            toast.error(err?.data?.message || err.error);

        }
    }





  return (
    <>
    <Navbar />
    <div id="Contact" style={{backgroundColor:'#ecf0f1'}} className="rem-space"> <br />
          <br />  <br />
        <br />    
</div>
    <section style={{backgroundColor:'#ecf0f1', borderBottom:'10px solid #182C61'}} >
      <Container style={{backgroundColor:'#ecf0f1'}}>
       
      
        <div className="contact-container">
          <h2 className="text-center" style={{ fontWeight: 700, fontSize: '28px', color: '#182C61' }}>
          <br/>       

            CONTACT ME
          </h2>
          <br />
          <br />  
          <Row>
            <Col lg="8">
              <div className="contact-box p-4" style={{ backgroundColor: '#45aaf2' }}>
                <Form  onSubmit={submitHandler}>
                  <Row>
                    <Col lg="6">
                      <Form.Group className="mt-3">
                        <Form.Control type="text" placeholder="Name" name="name" id="name" minLength="2" maxLength="20" style={{ border: '2px solid #182C61' }} required 
                         value={name}
                         onChange={ (e) => setName(e.target.value) } 
                        
                        />
                      </Form.Group>
                    </Col>

                    <Col lg="6">
                      <Form.Group className="mt-3">
                        <Form.Control type="email" placeholder="Email" name="email" id="email" style={{ border: '2px solid #182C61' }} required 
                         value={email}
                         onChange={ (e) => setEmail(e.target.value.toLowerCase()) }  
                                  
                        />
                      </Form.Group>
                    </Col>
                    {/* <input type="hidden" name="_subject" value="Mail from Portfolio!" />
                        <input type="hidden" name="_next" value="https://vwaran.me/thankyou.html" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_autoresponse" value="Thanks for your Valuable Response ☺️" /> */}

                    <Col lg="6">
                      <Form.Group className="mt-3">
                        <Form.Control type="tel" placeholder="Phone" pattern="[6-9]\d{9}" minLength="10" maxLength="12" name="phone" id="phone" style={{ border: '2px solid #182C61' }} required 
                        value={phone}
                        onChange={ (e) => setPhone(e.target.value) }  
                        
                        />
                      </Form.Group>
                    </Col>

                    <Col lg="6">
                      <Form.Group className="mt-3">
                        <Form.Control type="text" placeholder="Company name" name="company" id="company" style={{ border: '2px solid #182C61' }} required 
                        value={company}
                        onChange={ (e) => setCompany(e.target.value) }  
                        
                        />
                      </Form.Group>
                    </Col>


                    <Col lg="12">
                      <Form.Group className="mt-3">
                        <Form.Control as="textarea" rows={4} placeholder="Message" minLength="3" maxLength="100" name="message" id="message" style={{ border: '2px solid #182C61', padding: '28px' }} required 
                        value={message}
                        onChange={ (e) => setMessage(e.target.value) }  
                        
                        />
                      </Form.Group>
                    </Col>
                    <Col lg="12">
                    {isLoading && <LoaderBlue />}
                      <Button type="submit" className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3">
                        <span>SUBMIT NOW </span>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col lg="4" className="bg-image" style={{ backgroundColor: '#182C61', letterSpacing:'1px' }}>
              <div className="detail-box p-4" style={{ color: 'white' }}>
              <br />
              <br />
                <h5 className="font-weight-light mb-3">ADDRESS</h5>
                <p className="op-7">
                  4/11 Ganapathy Servai street,
                  <br />
                  K.Pudur, Madurai-7.
                </p>
                <h5 className="font-weight-light mb-3 mt-4">CALL US</h5>
                <p className="op-7">
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
