import React from 'react';
import { Container, Col, Row, Navbar, Nav, Link, Item, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css'


const FooterComponent = () => {
  return (<>
    <footer className="footer">
      <Navbar sticky="bottom">
        < Container fluid className="bg-light">
          <Nav.Item>Samsara Chiropractic Wellness Center | 908-300-8800</Nav.Item>
          <Nav.Item>
            <a>Copyright &copy; 2019 All Rights Reserved </a>
          </Nav.Item>
            {/* <a className="insta" href="https://www.instagram.com/beautyy_by_shay/?hl=en" target="_blank" className="btn btn-social-icon btn-instagram">
               <FontAwesomeIcon icon="instagram" />
              <span className="fa fa-instagram"></span>
            </a> */}
            <Nav.Item>
            <a href="https://www.facebook.com/SamsaraChiropracticWellnessCenter" target="_blank" className="btn btn-social-icon btn-facebook">
              <span className="fa fa-facebook"></span>
            </a>
            </Nav.Item>
        </ Container>
      </Navbar>
    </footer>

  </>
  )
}
export default FooterComponent;
