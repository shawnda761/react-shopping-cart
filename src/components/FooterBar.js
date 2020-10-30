import React from 'react';
import { Navbar } from 'react-bootstrap'

const FooterBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="bottom">
    <Navbar.Collapse className="justify-content-center">
      <Navbar.Brand>All right is reserved.</Navbar.Brand>
    </Navbar.Collapse>
  </Navbar>
)

export default FooterBar;