import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';

const NewPatient = () => {
  return (
    <>
      <NavBarComponent />

      <Container fluid>
        <div>
        <h3 className="newPatient">New Patient Forms</h3>
        <Row className="justify-content-md-center">
          <Col>
            <p>
              Please print this form and fill it out at home. Bring it in on your first visit. See you in the clinic!</p>
            <a href="http://www.doctorredmond.com/images/common/patient_signup.pdf" target="_blank">Download PDF Sign-up form</a>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
          <p>Click below to fill out our wellness check questionnaire</p>
          <a href="https://www.wellnesscheckonline.com/check1.php" target="_blank">Wellness Check Questionaire</a>
          </Col>
        </Row>
        </div>
      </Container>
      <div className="fixed-bottom">
        <FooterComponent />
      </div>
    </>
  );
}


export default NewPatient;
