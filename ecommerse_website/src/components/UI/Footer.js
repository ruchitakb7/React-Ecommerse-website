import React from "react";
import { Container } from "react-bootstrap";

const Footer = ({children}) => {
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
            color: "white",
            flexDirection: "column" // Stack elements vertically in the footer
        }}

        // style={{                                                     
        //     height: "100px",
        //     position: "fixed", // Keeps it fixed at the bottom
        //     bottom: "0",
        //     left: "0",
        //     right: "0",
        //     backgroundColor: "rgb(38, 157, 204)",
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center", 
        //     color: "white", 
        //     zIndex: 10 // Ensures it stays above other content if needed
        // }}
            // style={{                                                     
            //     height: "100px",
            //     position: "relative",
            //     bottom: "0",
            //     left: "0",
            //     right: "0",
            //     backgroundColor: "rgb(38, 157, 204)",
            //     display: "flex",
            //     alignItems: "center",
            //     justifyContent: "center", 
            //     color: "white" 
            // }}
        >

           {children}
        </Container>
    );
};

export default Footer;