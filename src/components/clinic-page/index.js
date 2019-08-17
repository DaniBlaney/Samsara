import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';
import { BOLD_WEIGHT } from 'jest-matcher-utils';

const ClinicInfo = () => {
  return (
    <>
      <NavBarComponent />
      <div className="gradient">
        <Container fluid className="oilImg">
          <Row className="justify-content-md-center">
            <Col md={5}>
              <div className="imgHours" style={{ textAlign: "center" }}>
                <Card.Img src="./images/businesshrs.png" />
              </div>
            </Col>
            <Col md={5}>
              <Card className="infoCard">
                <Card.Header style={{fontWeight: 'bold'}}>Samsara Chiropractic Wellness Center</Card.Header>
                <Card.Body>7 E High St, Somerville, NJ 08876
                <li><a href="malito:doctorredmond@gmail.com"> doctorredmond@gmail.com</a></li>
                <li ><a href="tel:908-300-8800"> 908-300-8800</a> | <a href="tel: 908-642-7634"> 908-642-7634</a></li>
                </Card.Body>
                <Card.Body>Payment Methods: Cash, Visa, MasterCard, Discover</Card.Body>
                <Card.Body>Insurance Accepted: Medicare, Most Major Medical plans</Card.Body>
              </Card>
              <div>
              <p className="other">Other times may be scheduled for special circumstances with Doctor's permission.
                  New patients are seen on Mondays, Wednesdays, and Fridays at 11AM and 4PM but
                  other arrangements can be made if necessary.</p>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}


export default ClinicInfo;
