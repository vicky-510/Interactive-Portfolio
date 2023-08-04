
// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { 
  BsToggleOn

} from "react-icons/bs";


function DashNav({Toggle}) {
    return (
      <Navbar bg="white" expand="sm" className='px-3'>
        <div className="container">
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
          <BsToggleOn size={35} color='#45aaf2' style={{ marginLeft: '17px', marginBottom: '8px',marginTop: '1px', marginRight:'8px' }} className='icons'  onClick={Toggle} />

            <Nav className="ms-auto mt-2 mt-lg-0">
             
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />&nbsp;&nbsp;
              <Button variant="outline-primary">Search</Button>
            </Form> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
              <NavDropdown title="Vigneshwaran M" id="navbarDropdown">
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
  
  export default DashNav;
  
  