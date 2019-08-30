import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';

const JenniferRedmond = () => {
  return (
    <>
      <NavBarComponent />
      <div>
        <Container fluid>
          <div className="jenRed">
            <Row className="justify-content-md-center"style={{background:'#a3cfd7'}}>
              <Col md={4}>
                <Card.Img style={{width:'450px', paddingTop:'50px'}} src="./images/faded.png" />
              </Col>
              <Col md={8}>
                <Card.Img src="./images/aboutjen.png" />
              </Col>
              </Row>
              <Row>
              <Card.Img src="./images/aboutme.png" />
              </Row>
              <Row>
              <Card.Img src="./images/back.png" />
              </Row>
              <Row>
                <Card.Img src="./images/profess.png" />
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
