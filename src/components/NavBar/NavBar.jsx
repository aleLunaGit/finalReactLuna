import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import StyleNav from "./StyleNav.jsx";

export const NavBar = () => {

  const categorias = [
    { nombre: "Motherboards", id: 0, route: "mboard" },
    { nombre: "Placas de video", id: 1, route: "gpu" },
    { nombre: "Memorias RAM", id: 2, route: "ram" },
    { nombre: "Procesadores", id: 3, route: "cpu" },
  ];

  const Menues = () => {
    return (
      categorias.map((categoria) => {
        return <Link key={categoria.id} style={StyleNav.categorias} to={`/categoria/${categoria.route}`}>{categoria.nombre}</Link>
      })
    )
  }

  return (
    <Navbar collapseOnSelect expand="lg" style={StyleNav.menu}/*bg="dark" variant="dark"*/>
      <Container>
        <Navbar.Brand href="/#" style={{ color: "red" }}>ONE-CREW</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Menues />
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Nav.Link as={Link} to="cart"><CartWidget /> </Nav.Link>
    </Navbar>
  );
};

export default NavBar;

