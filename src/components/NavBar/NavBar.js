import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    localStorage.getItem("logged") ? setIsLogged(true) : setIsLogged(false);
  }, [isLogged]);

  const Logout = () => {
    localStorage.removeItem("logged");
    window.location.reload();
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      id="navbar"
      className="header"
      variant="dark"
    >
      <Container className="mobile-header">
        <Navbar.Brand className="header-item" as={Link} to={"/"}>
          DREAM BAKERY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/recipes"}>
              Recipes
            </Nav.Link>
            <Nav.Link as={Link} to={"/addnewrecipe"}>
              Add Recipe
            </Nav.Link>
            <Nav.Link as={Link} to={"/products"}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to={"/addnewproduct"}>
              Add Product
            </Nav.Link>
          </Nav>
          {isLogged && (
            <Nav>
              <button className="logout-button" onClick={Logout}>
                Logout
              </button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
