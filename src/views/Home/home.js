import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';



const HomePage = () => {
  return (
    <>
      <NavBarComponent />

      <Container fluid>
        <Row className="justify-content-md-center">
          <Col>
            <Card.Img className="cardStyle imgStyle" src="./images/fade.png" />
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
}


export default HomePage;
