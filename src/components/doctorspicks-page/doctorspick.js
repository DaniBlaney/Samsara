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
          <div className="justify-content-md-center">
            <h2 style={{ textAlign: 'center', padding: '15px'}}>The Doctor's Picks</h2>
          </div>
          <div>
            <Row>
              <Col md={12}>
                <h5 style={{ textAlign: 'center', padding: '5px' }}>Dr. Redmond's Top Ten Websites</h5>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md={8} className="justify-content-md-center">
                <div className="orderedList">
                  <ol reversed>
                    <li>Looking for something fun to do with friends, family, or all by yourself out in the great outdoors? Go on a treasure hunt! Check out www.geocaching.com for “treasure” that people have hidden all over the world, sometimes right under your nose!</li>
                    <li>Need some motivation? www.quotationspage.com/mqotd.html has lots of motivational quotes to keep you inspired!</li>
                    <li>If you need something to keep you moving, www.active.com lists all the fun runs and walks in the area, along with a whole bunch of events that will get you moving, often for a great cause! Fitness for any level!</li>
                    <li>You've exercised and eaten well... now you're ready for some fun! Explore your very own neighborhood using this site www.state.nj.us/travel/wheretogo.html ... who says the only social activity is going out to dinner??</li>
                    <li>You've heard that a vegetarian diet is good for you, but you don't even know where to start? www.vegetariantimes.com is a great resource for recipes, and even going veg one day a week can help decrease your risk for cancer and heart disease!</li>
                    <li> Are you finding that eating healthy is eating a hole in your wallet? Check out this free site www.couponmom.com where coupon mom tells you where to go for the best deals at your neighborhood grocery store!</li>
                    <li>So you're saying you want to exercise but you don't want to go it alone? www.exercisefriends.com is a great resource where people of all fitness levels can find someone to do their favorite activity with! Need a dancing partner? A running buddy? Someone to bike with? You can find them at www.exercisefriends.com</li>
                    <li>Say you've just become a new mom, or you're looking for people to get together for lunch with, or you're looking for new friends to support your healthy lifestyle... Head to www.meetup.com, a free site where people plan get-togethers centered around their favorite activities.</li>
                    <li>A cluttered closet is a sign of a cluttered mind. Free yourself with www.freecycle.org. This site will direct you to a message board with other people who live in your area. Instead of throwing out those old appliances, mattresses, furniture, and even small odds and ends, they can go to someone who needs them or even someone who makes a hobby of repairing them!</li>
                    <li>By far the best healthy lifestyle site I have ever come across, www.sparkpeople.com is a free site that will help you create customized diet and exercise plans and even set health goals! There's also loads of recipes and articles. Of all the sites on this page, this is by far the most important for anyone to take a look at. You won't regret it.</li>
                  </ol>
                  <p className="vacc justify-content-md-center">&#9733; &nbsp; And don't forget to check out njaicv.org for all New Jersey vaccine info! A good decision is an informed decision!</p>
                  &nbsp;
                </div>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
      </div>
      &nbsp;
      <div className="fixed-bottom">
        <FooterComponent />
      </div>
    </>
  );
}


export default Doctorspick;
