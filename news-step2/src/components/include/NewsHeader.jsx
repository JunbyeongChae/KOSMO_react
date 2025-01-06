import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsHeader = ({onLogout}) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">💻Hacker News😎</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/news" className="nav-link">News</Link>
            <Link to="/youtube" className="nav-link">Youtube</Link>
            <Link to="/notice" className="nav-link">Notice</Link>
          </Nav>
          {onLogout && <Button variant="primary" onClick={onLogout}>Logout</Button>}
        </Container>
      </Navbar>
    </>
  );
};

export default NewsHeader;
