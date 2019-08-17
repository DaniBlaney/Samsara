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
        <Row className="justify-content-md-center">
          <div className="wordWrapper">
            <Col>
            <h1 className="aboutHeader"style={{textAlign:"left"}}>About the Doctor</h1><hr/>
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
                program.</p>
              <p>
                During her internship she pursued and completed a post-doctorate
                certification in Active Release Techniques and began her studies in Applied
                Kinesiology. As a result of completing her graduation requirements early, Dr. Redmond
                was granted the opportunity to have the unique experience of holding two separate
                externships simultaneously, one in Long Island with a focus on Pediatrics, and
                one focusing on Wellness care and Postural Retraining on the Upper East Side of
                Manhattan. </p>
                <p>
                After completing her externships and a brief stint working for a Chiropractic
                office in Northern New Jersey, Dr. Redmond opened her private practice in Bridgewater,
                New Jersey. In a relentless pursuit of knowledge and new ways to help her patients, Dr. Redmond
                learned about a revolutionary technique referred to as Neuroemotional Technique (NET).
                This technique allowed her patients to experience breakthroughs in their care and lives like they
                had never seen before.</p>
              <p>
                In her spare time, Dr. Redmond continues to attend seminars to improve herself and her skills for
                the benefit of her patients. She also enjoys reading, healthy cooking, finding fun new ways to
                exercise, going on Mission trips, and spending time with the kids of Bound Brook Presbyterian church
                where she volunteers as a Youth Advisor. She's always looking for new ways to serve her community and her patients.
              </p>
            </Col>
          </div>
        </Row>
        <Row>
          <div className="wordWrapper">
          <Col>
          <h1>About Chiropractic</h1><hr/>
            <p>
              Chiropractic is the Science, Art and Philosophy that concerns itself with the restoration of good
              health by restoring and maintaining a properly functioning nervous system, without the use of drugs
              or surgery. Chiropractic is based on the scientific fact that your body is a self-regulating, self-healing
              organism. These important functions are controlled by the brain, spinal cord, and all the nerves of the body.
              The skull protects the delicate tissues of the brain. The moving bones of the spine protect the vulnerable communication
              pathways of the spinal cord and nerve roots. If the nervous system is impaired, it can cause malfunction of the tissues
              and organs throughout the body. Doctors of Chiropractic call this the Vertebral Subluxation Complex. The Chiropractic
              adjustment has been proven to increase motion, increase circulation, reduce swelling and pain, and remove nervous irritation.
              Once this nervous irritation is removed, your body is able to do what it is designed to do - heal itself.
            </p>
            <p>
            Chiropractors help in restoring nervous system function. Many chiropractors also focus on the biomechanics of the body such
            as joint motion. Helping to restore proper spinal biomechanics and improved nervous system function begins with a case history.
            Your case history is vital, as it reveals the background about your health such as surgeries, accidents, the onset of your condition,
            and other details, which brought you into the office. After reviewing your history and discussing your specific problem, a thorough
            orthopedic, neurological, and chiropractic examination is performed. X-rays may be taken which will help uncover structural and
            functional problems. Then, once the examination is complete, your chiropractor will explain the findings and outline a treatment plan.
            Progress is then monitored with periodic examination and follow-up reports.
            </p>
          </Col>
          </div>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
}


export default About;
