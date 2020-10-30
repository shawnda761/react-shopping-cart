import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const HeaderBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="#home">React Shopping Cart</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <NavDropdown title="Setup" id="basic-nav-dropdown" alignRight>
          <NavDropdown.Item href="#products">Product Management</NavDropdown.Item>
          <NavDropdown.Item href="#orders">Order Management</NavDropdown.Item>
          <NavDropdown.Item href="#users">User Management</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#logout">Exit</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default HeaderBar;