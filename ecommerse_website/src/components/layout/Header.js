
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartItem from "../Cartitem/CartItem"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" 
       >
           <Container  className="justify-content-center " style={{flex:'1'}}>
           <Nav style={{ fontFamily: "algerian" }}>
                <Nav.Link href="#home" className="text-white fs-5 mx-5">HOME</Nav.Link>
                <Nav.Link href="#products" className="text-white fs-5 mx-5">STORE</Nav.Link>
                <Nav.Link href="#about" className="text-white fs-5 mx-5">ABOUT</Nav.Link>
            </Nav>
           </Container>
           <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)" }}>
                <CartItem />
            </div>
        </Navbar>
    );
};

export default Header;
//