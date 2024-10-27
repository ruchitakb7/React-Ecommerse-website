import React,{Fragment,useState,useEffect} from "react";

import { Button,ListGroup,Modal} from "react-bootstrap";

const cartElements = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    }
    ]

const CartItem=()=>{
 
    const [cartStatus,setcartStatus] =useState(false)

    const cartStatusHandler=()=>{
        setcartStatus((prevStatus) => !prevStatus);    
    }

    return(
    <Fragment>
          <Button  onClick={()=>cartStatusHandler()}  className="me-3 btn-sm bg-dark"
          style={{border:"2px solid rgb(38, 157, 204)" }} 
          >  Cart  {0}</Button>

          <Modal show={cartStatus} scrollable={true} 
          centered={true} style={{fontFamily:"calibri"}}>
               <Modal.Header>
                <Modal.Title>CartItems</Modal.Title>
                <Button className="btn-close" onClick={()=>cartStatusHandler()}></Button>
               </Modal.Header>
               <Modal.Body>
               <ListGroup>
                    <ListGroup.Item>
                        <div className="d-flex justify-content-between align-items-center">
                            <strong>Items</strong>
                            <strong>Price</strong>
                            <strong>Quantity</strong>
                        </div>
                    </ListGroup.Item>
                    {cartElements.map((item, index) => {
                        return <ListGroup.Item key={index}>
                            <div className="d-flex justify-content-between align-items-center">
                                <span style={{maxWidth:'100px'}}>
                                    <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '90px', marginRight: '10px' }} />
                                    <span>{item.title}</span>
                                </span>
                                <span>Price: ${item.price}</span>
                                <div>
                                    <div>Quantity: {item.quantity}</div>
                                    <Button variant="danger">Remove</Button>
                                </div>
                            </div>
                        </ListGroup.Item>
                    })}
                </ListGroup>
               </Modal.Body>
               <Modal.Footer className="justify-content-between d-flex align-items-center">
                <strong>Total - $0.00</strong>
                <Button style={{background:" rgb(38, 157, 204)" , border:"none"}}>Purchase</Button>
               </Modal.Footer>
          </Modal>
    </Fragment>
    )
}
export default CartItem


