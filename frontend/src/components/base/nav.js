import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function BaseNav() {
  return (
    <div className="App">
      <Navbar variant="dark" className="color-nav">
        <Navbar.Brand href="/">
        <img
        src="/static/images/logo.gif"
        width="180"
        height="30"
        className="d-inline-block align-top"
        />
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/mnist">Mnsit</NavDropdown.Item>
              <NavDropdown.Item >Another action</NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/mnist">Mnsit</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default BaseNav;
