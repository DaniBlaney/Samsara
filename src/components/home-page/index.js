import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';
import SidebarExample from '../sidebar';


const HomePage = () => {
  return (
    <>
      <NavBarComponent />

      <Container fluid>
        <Row className="justify-content-md-center mainCont">
          <Col md={3}>
            <Card.Img className="imgStyle" src="./images/redmond.png" />
          </Col>
          <Col md={5}>
            <h3>Jennifer E. Redmond, D.C.</h3>
            <p>Dr. Redmond's office is a family practice serving mainly mothers and children. We pride ourselves on our warm atmosphere and variety of techniques,
              allowing us to cater to your specific needs and attain the best results possible.</p>
            <p>Samsara is the Buddhist term for life, death, and rebirth. Like the caterpillar that must let go of its previous way of life before emerging as
              the butterfly, we, too, can transform into a more beautiful version of ourselves if we let go...</p>
          </Col>
          <Col>
            <SidebarExample/>
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
}


export default HomePage;
