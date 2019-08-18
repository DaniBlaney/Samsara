import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';

const JenniferRedmond = () => {
  return (
    <>
      <NavBarComponent />
      <div className="gradient">
        <Container fluid>
          <div className="jenRed">
            <Row className="justify-content-md-center">
              <Col md={3}>
                <Card.Img className="imgStyle" src="./images/doctor.png" />
              </Col>
              <Col md={4} style={{padding:50}}>
                <h4>Education</h4>
                <p>Graduated from New York Chiropractic College in 2003. Other degrees:
                  Excelsior College; Raritan Valley Community College. Memberships:
                  Association for New Jersey Chiropractors (ANJC), International Chiropractic
                  Association (ICA), ICA Pediatrics Council, Chiropractic Leadership Alliance
                  (CLA) Honors: Phi Theta Kappa Member, Certificate of Excellence for Pre-Chiropractic
                  Degree, RVCC Distinguished Alumni 2008</p>
              </Col>
              <Col md={5} style={{padding:50}}>
              <h4>Our Practice</h4>
              <p>Dr. Redmond's office is a wellness center aimed at helping your whole family acheive and maintain optimum health. We pride ourselves on our warm atmosphere and variety of techniques, allowing us to cater to your specific needs and attain the best results possible.</p>
              </Col>
              </Row>
              <Row>
              <Col md={3}>
              </Col>
              <Col md={3} style={{padding:30}}>
                <h6>Techniques</h6>
                <ul className="techList">
                  <li>Diversified</li>
                  <li>Flexion-Distraction</li>
                  <li>Neuro Emotional Technique</li>
                  <li>Active Release</li>
                  <li>Appl. Kinesiology</li>
                  <li>Activator Methods</li>
                  <li>Various Soft Tissue(muscle)</li>
                  <li>Life Coaching</li>
                </ul>
              </Col>
              <Col md={3} style={{padding:30}}>
                <h6>Specialties</h6>
                <ul className="specList">
                  <li>Family Practice</li>
                  <li>Shoe Orthotics</li>
                  <li>Holistic Care</li>
                  <li>Posture Training</li>
                  <li>Thermography</li>
                  <li>Exercise & Fitness</li>
                  <li>Life and Health Coaching</li>
                </ul>
              </Col>
              <Col md={3} style={{padding:30}}>
                <h6>Therapies</h6>
                <ul className="therList">
                  <li>Nurtritional</li>
                  <li>Homeopathy</li>
                  <li>Ear Candling</li>
                  <li>Aromatherapy</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="fixed-bottom">
        <FooterComponent />
      </div>
    </>
  );
}


export default JenniferRedmond;
