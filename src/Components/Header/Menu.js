import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './Menu.css'

const Menu = () => {
    return (
        <>
        <Navbar fixed="top">
          <Container>
          <Navbar.Brand></Navbar.Brand>
          </Container>
          <Nav className="me-auto">
            <Nav.Link className="menuItem text-dark" href="#aboutMe">About Me</Nav.Link>
            <Nav.Link className="menuItem text-dark" href="#myResume">My Resume</Nav.Link>
            <Nav.Link className="menuItem text-dark" href="#technicalSkill">Technical Skill</Nav.Link>
            <Nav.Link className="menuItem text-dark" href="#myPortfolio">My Portfolio</Nav.Link>
            <Nav.Link className="menuItem text-dark" href="#contactMe">Contact Me</Nav.Link>
            
          </Nav>
          
        </Navbar>
      </>
    );
};

export default Menu;