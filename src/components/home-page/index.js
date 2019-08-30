import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container, Jumbotron } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';
import SidebarExample from '../sidebar';
import Component1 from '../component1';
import Demo from '../share-component/share';

const HomePage = () => {
  return (
    <>
      <NavBarComponent />
      <div className="gradient">
        <Row>
          <Col md={12}>
            <Component1 />
          </Col>
        </Row>
        <Row>
          <Col>
          <Container fluid>
            <Card.Img src="./images/the-lavender-flower3.png" />
          </Container>
          </Col>
        </Row>
        <Container fluid>
          <Row className="justify-content-md-center mainCont">
            <Col md={3}>
              <div className="slide-up">
                <div className="inner">
                <Card.Img className="imgStyle" src="./images/doctor.png" />
                </div>
              </div>
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
          <Card.Img src="./images/health.png"></Card.Img>
          </Col>
          </Row>
          <Row>
            <Col>
            <Card.Img src="./images/techniques.png"></Card.Img>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card.Img src="./images/testimonials.png"></Card.Img>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card.Img src="./images/testimonial1.png"></Card.Img>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card.Img src="./images/testimonial2.png"></Card.Img>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card.Img src="./images/testimonial3.png"></Card.Img>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <a href="https://www.google.com/maps/dir//7+E+High+St,+Somerville,+NJ+08876/@40.5699591,-74.613052,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c39549552d991f:0xd3fa01cc1f69dcf8!2m2!1d-74.610858!2d40.569955" target="_blank"><Card.Img src="./images/map.png"></Card.Img></a>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{"\u2728"} Dr. Redmond is working hard to spread the health and you can help! If your business or group is looking for a speaker, Dr. Redmond is
            available for free health workshops. Please contact the doc for details.</p>
            </Col>
          </Row>
          &nbsp;
          <hr />
          <Row></Row>
        </Container>
      </div>
      <div className="fixed-bottom">
        <FooterComponent />
      </div>
    </>
  );
}


export default HomePage;
