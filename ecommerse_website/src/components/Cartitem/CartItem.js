import React,{Fragment,useState,useContext} from "react";

import { Button,ListGroup,Modal,Form} from "react-bootstrap";
import ContextApi from "../../store/ConetxtApi";


const CartItem=()=>{

    const ctx=useContext(ContextApi)
 
    const [cartStatus,setcartStatus] =useState(false)
   
    const cartStatusHandler=()=>{
        setcartStatus((prevStatus) => !prevStatus);    
    }

    const adjustQuanity=(item,event)=>{
        const newq=event.target.value.trim()
        ctx.adjustQuantity({
            id:item.id,
            price:+item.price,
            quantity:+newq
        })

    }
    const removeItem=(id)=>{
        ctx.removeItem(id)
    }

    return(
    <Fragment>
          <Button  onClick={()=>cartStatusHandler()}  className="me-3 btn-sm bg-dark"
          style={{border:"2px solid rgb(38, 157, 204)" }} 
          >  Cart <span className="fs-6 fw-bold">{ctx.totalQuantity}</span> </Button>

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
                    {ctx.items && ctx.items.map((item, index) => {
                        return <ListGroup.Item key={index}>
                            <div className="d-flex justify-content-between align-items-center">
                                <span style={{maxWidth:'100px'}}>
                                    <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '90px', marginRight: '10px' }} />
                                    <span>{item.title}</span>
                                </span>
                                <span>Price: ${item.price}</span>
                                <div>
                                    <input value={item.quantity} type="number" min={1}
                                    onChange={(e)=>adjustQuanity(item,e)}
                                    style={{maxWidth: "50px", marginRight:"5px" }}/>
                                    <Button variant="danger" onClick={()=>removeItem(item.id)}>Remove</Button>
                                </div>
                            </div>
                        </ListGroup.Item>
                    })}
                </ListGroup>
               </Modal.Body>
               <Modal.Footer className="justify-content-between d-flex align-items-center">
                <strong>Total - ${ctx.totalPrice.toFixed(2)||0.00}</strong>
                <Button style={{background:" rgb(38, 157, 204)" , border:"none"}}>Purchase</Button>
               </Modal.Footer>
          </Modal>
    </Fragment>
    )
}
export default CartItem


