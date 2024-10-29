import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid
            style={{
                height: "100px",
                position: "relative",
                bottom: "0",
                left: "0",
                right: "0",
                backgroundColor: "rgb(38, 157, 204)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", 
                color: "white" 
            }}
        >
        </Container>
    );
};

export default Footer;
