import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';

const ClinicInfo = () => {
  return (
    <>
      <NavBarComponent />
      <div className="gradient">
        <Container fluid className="oilImg">
          <Row className="justify-content-md-center">
            <Col md={4}>
              <div className="imgHours" style={{ textAlign: "center" }}>
                <Card.Img src="./images/businesshrs.png" />
                <p className="other">Other times may be scheduled for special circumstances with Doctor's permission.
                  New patients are seen on Mondays, Wednesdays, and Fridays at 11AM and 4PM but
                  other arrangements can be made if necessary.</p>
              </div>
            </Col>
            <Col md={5}></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}


export default ClinicInfo;
