import React, { Fragment } from "react"
import ProductList from "../ProductList/ProductList"
import Footer from "../UI/Footer"
import { Container,Image, Row ,Col} from "react-bootstrap"
import CartItem from "../Cartitem/CartItem"
import Generic from "../UI/Generic"

const Store=()=>{
    return(
        <Fragment>
             <Generic />
            <div style={{ position: "absolute", right: "20px", top: "6%", transform: "translateY(-50%)",zIndex:"1050" }}>
                <CartItem />
            </div>
            <div style={{minHeight:"100vh"}}>
               <ProductList></ProductList>
            </div>
                
                 <Footer>
                 <Container className="d-flex align-items-center ">
                <Row className=" w-100 align-items-center justify-content-center ">
                    <Col className="align-items-center justify-content-center " md={3}>
                  
                    <a href="https://www.youtube.com" target="_blank" className="text-white ms-5 me-3">
                                <Image src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
                                            alt="YouTube Logo"
                                            style={{ width: '30px', height: '30px' }}/>
                            </a>
                    
                            <a href="https://spotify.com" target="_blank" className="text-white ms-4 me-4">
                                <Image src="https://prasadyash2411.github.io/ecom-website/img/Spotify Logo.png" alt=""
                                 style={{ width: '30px', height: '30px' }} />
                            </a>
                       
              
                    
                            <a href="https://facebook.com" target="_blank" className="text-white ms-3">
                                <Image src="https://prasadyash2411.github.io/ecom-website/img/Facebook Logo.png" alt=""
                                 style={{ width: '30px', height: '30px' }} />
                            </a>
                    </Col>
                 
                </Row>

            </Container>
                 </Footer>
        </Fragment>
       
    )
}
export  default Store