import React, { useState } from "react"
import {Form,Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const AddmovieForm=()=>{

    const [concertDate,setConcertDate]=useState('')

    const [city,setCity]=useState('')
    const [venue,setVenue]=useState('')
    const navigate=useNavigate()

    const handleSubmit=(event)=>{
             event.preventDefault()

             const NewMovieObj={
                concertDate: concertDate.toUpperCase(), 
                city: city.toUpperCase(),           
                venue: venue.toUpperCase() 
             }
             console.log(NewMovieObj)
             setCity('')
             setVenue('')
             setConcertDate('')
             navigate('/home')
    }
    return(
       
        <div className="form-container justify-content-center d-flex align-items-center mx-auto mt-5 p-5 fw-bold" 
        style={{ maxWidth: "500px",backgroundColor:"rgb(38, 157, 204)",borderRadius:"20px"}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group " controlId="concertDate">
                    <Form.Label>Concert Date</Form.Label>
                    <Form.Control 
                        className="form-control-lg fs-6 "
                        type="date"
                        value={concertDate}
                        onChange={(e) => setConcertDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="form-group" controlId="city">
                    <Form.Label className="mt-3">City</Form.Label>
                    <Form.Control 
                        type="text"
                         className="form-control-lg fs-6"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="form-group" controlId="venue">
                    <Form.Label className="mt-3">Venue</Form.Label>
                    <Form.Control 
                        type="text"
                         className="form-control-lg fs-6"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
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
export default AddmovieForm