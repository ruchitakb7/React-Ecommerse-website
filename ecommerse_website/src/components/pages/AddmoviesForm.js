import React, { useState } from "react"
import {Form,Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const AddmovieForm=()=>{

    const [date,setConcertDate]=useState('')

    const [place,setCity]=useState('')
    const [desc,setVenue]=useState('')
    const navigate=useNavigate()

    const addTourData = async (newTour) => {
        try {
            const response = await fetch('https://ecommerse-website-a73c2-default-rtdb.firebaseio.com/tour.json', {
                method: 'POST', // Specify POST method
                headers: {
                    'Content-Type': 'application/json' // Specify the content type
                },
                body: JSON.stringify(newTour) // Convert the object to JSON
            });
    
            if (!response.ok) {
                throw new Error('Failed to add new tour');
            }
    
            const result = await response.json(); // Get the response data
            console.log('New tour added with ID:', result.name); // Firebase returns the ID of the new record
        } catch (error) {
            console.error(error);
        }
        setCity('')
             setVenue('')
             setConcertDate('')
             navigate('/home')
    };

    const TourdataHandler=(event)=> {
             event.preventDefault()

             const NewMovieObj={
                date: date.toUpperCase(), 
                place: place.toUpperCase(),           
                desc: desc.toUpperCase() 
             }
             console.log(NewMovieObj)
             addTourData(NewMovieObj)
    }
    return(
       
        <div className="form-container justify-content-center d-flex align-items-center mx-auto mt-5 p-5 fw-bold" 
        style={{ maxWidth: "500px",backgroundColor:"rgb(38, 157, 204)",borderRadius:"20px"}}>
            <Form onSubmit={TourdataHandler}>
                <Form.Group className="form-group " controlId="concertDate">
                    <Form.Label>Concert Date</Form.Label>
                    <Form.Control 
                        className="form-control-lg fs-6 "
                        type="date"
                        value={date}
                        onChange={(e) => setConcertDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="form-group" controlId="city">
                    <Form.Label className="mt-3">Place</Form.Label>
                    <Form.Control 
                        type="text"
                         className="form-control-lg fs-6"
                        value={place}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="form-group" controlId="venue">
                    <Form.Label className="mt-3">Description</Form.Label>
                    <Form.Control 
                        type="text"
                         className="form-control-lg fs-6"
                        value={desc}
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