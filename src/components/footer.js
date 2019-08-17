import React from 'react';
import { Container, Col, Row, Navbar, Nav, Link, Item, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css'


const FooterComponent = () => {
  return (<>
    < Container fluid className="bg-light" style={{ padding: 0 }}>
      <footer className="footer">
        <Navbar className="navbar" sticky="bottom">
          <Nav className="mr-auto">
            <Nav.Item>Samsara Chiropractic Wellness Center - {" "}</Nav.Item>
            <Nav.Item>
              <a href="tel:908-300-8800">&nbsp;908-300-8800</a> | <a href="tel: 908-642-7634"> 908-642-7634</a>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              <a>Copyright &copy; 2019 All Rights Reserved </a>
            </Nav.Item>
          </Nav>
          <Nav.Item>
            <a href="https://www.facebook.com/SamsaraChiropracticWellnessCenter" target="_blank" className="btn btn-social-icon btn-facebook">
              <span className="fa fa-facebook"></span>
            </a>
          </Nav.Item>

        </Navbar>
      </footer>
    </ Container>
  </>
  )
}
export default FooterComponent;
