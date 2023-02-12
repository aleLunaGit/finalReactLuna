import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={style.menu}/*bg="dark" variant="dark"*/>
      <Container>
        <Navbar.Brand href="/#" style={{color: "red"}}>ONE-CREW</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link style={style.categorias} to="/categoria/CPU">Microprocesador</Link>
            <Link style={style.categorias} to="/categoria/MBOARD">Motherboard</Link>
            <Link style={style.categorias} to='/categoria/GPU'>Placa de video</Link>
            <Link style={style.categorias} to="/categoria/RAM">Memoria RAM</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
};

export default NavBar;

const style = {
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    width: "100%",
    backgroundColor: "#042743",
    color: "#f0ffff",
    textDecoration: "none",
  },

  categorias: {
    margin: 20,
    textDecoration: "none"
  },
};
