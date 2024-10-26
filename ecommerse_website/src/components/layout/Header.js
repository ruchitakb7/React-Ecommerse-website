
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top"> 
            <Container>
                    <Nav className="mx-auto"> 
                        <Nav.Link href="#home" className="text-white fs-5">Home</Nav.Link>
                        <Nav.Link href="#products" className="text-white fs-5">Products</Nav.Link>
                        <Nav.Link href="#about" className="text-white fs-5">About</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                    <Nav.Link href="#cart" className="text-white fs-5" >Cart</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
