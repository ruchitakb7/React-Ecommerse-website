import React, {useState} from "react";
import {Form,Button} from "react-bootstrap"

const Contact=()=>{

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phoneno,setPhoneNo]=useState('')

    async function postData(user) {
        try{

            const response = await fetch('https://ecommerse-website-a73c2-default-rtdb.firebaseio.com/contact.json', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(user) 
            });
            if(!response.ok)
            {
                throw new Error('SOMETHING WENT WRONG')
            }
             alert('REVIEWS ADDES SUCCESSFULLY')   


        }
        catch(error)
        {
                  alert(error)
        }
        setEmail('')
        setName('')
        setPhoneNo('')
       
    }

    const adddatahandler=(event)=>{
        event.preventDefault()

        const newobj={
            name:name,
            email:email,
            phoneno:phoneno
        }
        postData(newobj)
        
      
    }

    return(
        <div className="form-container justify-content-center d-flex align-items-center mx-auto mt-5 p-5 fw-bold" 
        style={{ maxWidth: "500px",backgroundColor:"rgb(38, 157, 204)",borderRadius:"20px"}}>
            <Form onSubmit={adddatahandler}>
                <Form.Group className="form-group " controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        className="form-control-lg fs-6 "
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="form-group" controlId="email">
                    <Form.Label className="mt-3">EmailId</Form.Label>
                    <Form.Control 
                        type="email"
                         className="form-control-lg fs-6"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="form-group" controlId="phoneno">
                    <Form.Label className="mt-3">Phone No.</Form.Label>
                    <Form.Control 
                        type="number"
                         className="form-control-lg fs-6"
                        value={phoneno}
                        onChange={(e) => setPhoneNo(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit"
                className="btn-submit mt-4 mx-auto lg justify-content-center d-flex text-black"
                style={{backgroundColor:"white"}}
                >Add</Button>
               
            </Form>
           
        </div>
    )
}
export default Contact