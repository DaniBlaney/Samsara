import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';

const About = () => {
  return (
    <>
      <NavBarComponent />

      <Container fluid>
      <h1 className="aboutHeader">About the Doctor</h1>
        <Row className="justify-content-md-center">
          <div className="wordWrapper">
            <Col>
              <Card.Img className="wordWrap" src="./images/jen.png" />
              <p>
                Dr. Jennifer Redmond's interest in the world of Wellness began with a
                fascination with nutrition and natural remedies as a child and she couldn't
                have been happier when she discovered Chiropractic, a profession that
                combined her compassion for people and promoting a healthy lifestyle. She
                started working in a Chiropractic office right away as a receptionist and
                Chiropractic Assistant to gain experience in the world that would become her
                career, while completing two degrees at Raritan Valley Community College. She received her
                Bachelor of Arts from Excelsior College in Albany, New York and
                completed her doctorate at New York Chiropractic College in Seneca Falls, New
                York in 2003, where she was active in Student Government and the Chiroteach
                program.
              </p>
              <p>
                During her internship she pursued and completed a post-doctorate
                certification in Active Release Techniques and began her studies in Applied
                Kinesiology. As a result of completing her graduation requirements early, Dr. Redmond
                was granted the opportunity to have the unique experience of holding two separate
                externships simultaneously, one in Long Island with a focus on Pediatrics, and
                one focusing on Wellness care and Postural Retraining on the Upper East Side of
                Manhattan. After completing her externships and a brief stint working for a Chiropractic
                office in Northern New Jersey, Dr. Redmond opened her private practice in Bridgewater,
                New Jersey. In a relentless pursuit of knowledge and new ways to help her patients, Dr. Redmond
                learned about a revolutionary technique referred to as Neuroemotional Technique (NET).
                This technique allowed her patients to experience breakthroughs in their care and lives like they
                had never seen before.
              </p>
              <p>
                In her spare time, Dr. Redmond continues to attend seminars to improve herself and her skills for
                the benefit of her patients. She also enjoys reading, healthy cooking, finding fun new ways to
                exercise, going on Mission trips, and spending time with the kids of Bound Brook Presbyterian church
                where she volunteers as a Youth Advisor. She's always looking for new ways to serve her community and her patients.
              </p>
            </Col>
          </div>
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
}


export default About;
