import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function BaseNav() {
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className="justify-content-center navbar"
        sticky="top"
      >
        <Navbar.Brand href="/" className="nav-brand">
          <img
            src="/static/images/2d-2.png"
            // width="180"
            // height="30"
            // className="d-inline-block align-center"
          />{" "}
          CHIEN-CHOU WU
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="nav-toggle"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="nav-link">
            <NavDropdown title="AI Projects" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/mnist">
                Mnsit
              </NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="./basictutorial">
                Basic Tutorial
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./hooktutorial">
                Hook Tutorial
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Web Games" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/tetris">
                Tetris
              </NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/stock">
              Stock
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default BaseNav;
