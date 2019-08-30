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
        <Container fluid style={{ background: 'white' }}>
          <Row>
            <Card.Img src="./images/hours2.png" />
          </Row>
          <Row>
            <Card.Img src="./images/faqs.png" />
          </Row>
          <Row>
            <Col />
            <Col md={8}>
              <Card.Img src="./images/faqs2.png" />
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}


export default ClinicInfo;
