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
            <p>Don't forget that Wednesday is Family Scan day! Bring your children or spouse in for a complimentary scan and make sure they are free of
              nervous system interference!</p>
            <p>If you haven't tried NET yet, what are you waiting for? Call and sign up to be present for our next demo!</p>
          </Col>
          <Col md={4}>
            <SidebarExample />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{"\u2728"} Dr. Redmond is working hard to spread the health and you can help! If your business or group is looking for a speaker, Dr. Redmond is
            available for free health workshops. Please contact the doc for details.</p>
          </Col>
        </Row>
        <hr/>
        <hr/>
      </Container>
      <div className="fixed-bottom">
        <FooterComponent />
      </div>
    </>
  );
}


export default HomePage;
