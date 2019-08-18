import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';

const Doctorspick = () => {
  return (
    <>
      <NavBarComponent />
      <div className="gradient">
        <Container fluid>
          <h3 className="">Doctor's Picks</h3>
          <Row className="justify-content-md-center">
            <h1>hello</h1>
          </Row>
        </Container>
      </div>
      <div className="fixed-bottom">
        <FooterComponent />
      </div>
    </>
  );
}


export default Doctorspick;
