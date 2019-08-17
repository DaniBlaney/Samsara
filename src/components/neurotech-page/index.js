import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';

const Neuro = () => {
  return (
    <>
      <NavBarComponent />

      <Container fluid>
        <Row className="justify-content-md-center">
          <Col>
          <h3 className="neuroT">Neuro Emotional Technique</h3>
              <p>Emotions are part of the natural, healthy response
                process we have to virtually every situation we encounter.
                However, sometimes challenging emotional experiences and
                physical vulnerabilities create lingering stress in our
                mind-body architecture. Such stress can contribute to physical
                complaints, emotional difficulties, and problems with goal
                achievement. The Neuro Emotional Technique (NET) is a powerful
                intervention that can assess and alleviate the internal stressors
                that are creating barriers to health and success...</p>
              <p>Learn more at <a href="www.netmindbody.com">www.netmindbody.com</a></p>
          </Col>
        </Row>
      </Container>
      <div className="fixed-bottom">
        <FooterComponent />
      </div>
    </>
  );
}


export default Neuro;
