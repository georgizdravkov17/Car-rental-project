import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { get_logged_customer, logout_customer } from '../../helpers/functions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {

  const navigate = useNavigate();

  const [loggedCustomer, setLoggedCustomer] = useState(get_logged_customer());

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"><FontAwesomeIcon className="icon" icon={faCar}/>Rental CC</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/vehicles">Vehicles</Nav.Link>
      { loggedCustomer && loggedCustomer.isAdmin && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> }
      { loggedCustomer && <Nav.Link as={Link} to="/profile">Profile</Nav.Link> }
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav>
    <Nav>
      {
        loggedCustomer ?  <Button variant="primary" onClick={() => { logout_customer(); setLoggedCustomer(null) }}>Logout</Button> : <Button variant="primary" onClick={() => { navigate("/login") }}>Sign in</Button>
      }
      { !loggedCustomer && <Button variant="primary" onClick={() => { navigate("/register") }}>Sign up</Button>  }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header