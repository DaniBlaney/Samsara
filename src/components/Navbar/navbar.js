import React from 'react';
import { Nav, NavDropdown, NavItem, Navbar, NavbarBrand, NavLink, Container, Button } from 'react-bootstrap';

const NavBarComponent = () => {
  return (<>
    <Container fluid>
      <Navbar className="navbar" id="custom-nav" sticky="top" bg="light" variant="light">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="./images/samsaralogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Samsara Chiropractic'}
        </Navbar.Brand>
        <Nav className="justify-content-right">
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/clinicinfo">Clinic Info</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  </>
  )
}


export default NavBarComponent;
