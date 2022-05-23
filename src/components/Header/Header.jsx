import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {

  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Mercedes-benz rent</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/vehicles">Vehicles</Nav.Link>
      <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
      <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Nav>
    <Nav>
      <Button variant="primary" onClick={() => { navigate("/login") }}>Sign in</Button>
      <Button variant="primary" onClick={() => { navigate("/register") }}>Sign up</Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header