import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useAuth0 } from "@auth0/auth0-react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  const expand = true; // or "sm" - "xxl"
  return (
    <Navbar /* key={expand} */ expand={expand} className="bg-secondary mb-3">
      <Container fluid>
        <Navbar.Brand className="text-light" href="/">
          Application
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          className="bg-secondary"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              className="text-light"
              id={`offcanvasNavbarLabel-expand-${expand}`}
            >
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {isAuthenticated ? (
                <Nav.Link className="text-light" href="/sign-out">
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link className="text-light" href="/sign-in">
                  Sign In
                </Nav.Link>
              )}
              {/* <Nav.Link className="text-light" href="#action2"> */}
              {/*   Link */}
              {/* </Nav.Link> */}
            </Nav>
            {/* <Form className="d-flex"> */}
            {/*   <Form.Control */}
            {/*     type="search" */}
            {/*     placeholder="Search" */}
            {/*     className="me-2" */}
            {/*     aria-label="Search" */}
            {/*   /> */}
            {/*   <Button variant="outline-success">Search</Button> */}
            {/* </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
