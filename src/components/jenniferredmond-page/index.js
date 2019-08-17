import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';

const JenniferRedmond = () => {
  return (
    <>
      <NavBarComponent />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col>
            <h4>Education</h4>
            <p>Graduated from New York Chiropractic College in 2003. Other degrees:
              Excelsior College; Raritan Valley Community College. Memberships:
              Association for New Jersey Chiropractors (ANJC), International Chiropractic
              Association (ICA), ICA Pediatrics Council, Chiropractic Leadership Alliance
              (CLA) Honors: Phi Theta Kappa Member, Certificate of Excellence for Pre-Chiropractic
              Degree, RVCC Distinguished Alumni 2008</p>
          </Col>
          <Col>
            <h4>Techniques</h4>
            <ul>
              <li>Diversified</li>
              <li>Flexion-Distraction</li>
              <li>Neuro Emotional Tech.</li>
              <li>Active Release</li>
              <li>Appl. Kinesiology</li>
              <li>Activator Methods</li>
              <li>Various Soft Tissue(muscle) te</li>
              <li>Life Coaching</li>
            </ul>
          </Col>
          <Col>
            <h4>Specialties</h4>
            <ul>
              <li>Family Practice</li>
              <li>Shoe Orthotics</li>
              <li>Holistic Care</li>
              <li>Posture Training</li>
              <li>Thermography</li>
              <li>Exercise & Fitness</li>
              <li>Life and Health Coaching</li>
            </ul>
          </Col>
          <Col>
            <h4>Therapies</h4>
            <ul>
              <li>Nurtritional</li>
              <li>Homeopathy</li>
              <li>Ear Candling</li>
              <li>Aromatherapy</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="fixed-bottom">
        <FooterComponent />
      </div>
    </>
  );
}


export default JenniferRedmond;
