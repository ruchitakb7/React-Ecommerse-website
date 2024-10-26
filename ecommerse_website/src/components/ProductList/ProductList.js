import React ,{Fragment}from "react"
import {Card,Row,Col,Container} from "react-bootstrap"

const ProductList=()=>{
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]

        return <Fragment>
        <Container className="justify-content-center">
            <Row  >
                {productsArr.map((item,index) => (
                     <Col key={index} md={6}>
                              <p> {item.title}</p> 
                          
                            <img src={item.imageUrl} alt=""></img>
                           <p>{item.price}</p>   
                    </Col>
                ))}
            </Row>
        </Container>
    </Fragment>
}


export default ProductList