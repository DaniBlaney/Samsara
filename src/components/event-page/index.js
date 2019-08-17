import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';

const Events = () => {
  return (
    <>
      <NavBarComponent />

      <Container fluid>
        <Row className="justify-content-md-center">
          <Col></Col>
          <Col md={5} style={{textAlign:"center"}}>
            <div className="eventDiv">
            <ul className="eventList">
              <h4 className="upcomingEvents">Upcoming Events:</h4>

              <li style={{ fontWeight: 'bold', listStyleType: "none" }}>Wellness 101, Sept 9th, 7pm</li>

              <p>Join Dr. Redmond to learn about general health and wellness, nutrition, and Neuroemotional Technique, a powerful stress reduction technique. Find out how you can supercharge your treatment and get the most out of your care!</p>

              <li style={{ fontWeight: 'bold', listStyleType: "none" }}> Patient Appreciation Day! Sept 18th</li>

              <p>Contact the office for details.</p>

              <li style={{ fontWeight: 'bold', listStyleType: "none" }}>Spirit Science Sept 21st, 7pm</li>

              <p>A discussion and exploration into the nature of the Universe and our infinite connection to everything around us.</p>

              <li style={{ fontWeight: 'bold', listStyleType: "none" }}>Intro to Essential Oils Sept 24th, 6pm</li>

              <p>Joyce Shotwell will share her first hand experience with using essential oils for health and well-being.</p>

              <li style={{ fontWeight: 'bold', listStyleType: "none" }}>Dinner with the Doc, Sept 29th, 6pm</li>

              <li style={{ fontWeight: 'bold', listStyleType: "none" }}>This month's topic: Vaccines</li>

              <p>Join Dr. Redmond as she dispels some of the myths about vaccines. By the end of this class, you will be better informed about how vaccines actually work, vaccine exemptions, and which children are most at risk.</p>
            </ul>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
}


export default Events;
