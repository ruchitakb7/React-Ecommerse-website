import React, {Fragment,useEffect,useState,memo} from "react";
import Footer from "../UI/Footer";
import {Row,Col,Button} from "react-bootstrap"
import "./home.css"
import Generic from "../UI/Generic";
import { useNavigate } from "react-router-dom";


const Home = () => {
     
    const [tourdata,settourList]=useState([])
    const navigate= useNavigate()

    const fetchData=async ()=>{
        try{
            const response= await fetch('https://ecommerse-website-a73c2-default-rtdb.firebaseio.com/tour.json')
            if(!response.ok)
            {
                throw new Error('something went wrong')
            }
            const data= await response.json()
            let TourList=[]
            for(const key in data)
            {
                TourList.push({
                    id:key,
                    date:data[key].date,
                    place:data[key].place,
                    desc:data[key].desc
                })
            }
            settourList(TourList)
        }
        catch(error){
            console.log(error)
        }
    }

    async function deletetourdata(id) {
        console.log(id)
        try{
            const response= await fetch(`https://ecommerse-website-a73c2-default-rtdb.firebaseio.com/tour/${id}.json`,{
            method: 'DELETE', 
                headers: {
                    'Content-Type': 'application/json' 
                },})

                if (!response.ok) {
                    console.log(response)
                    throw new Error('FAILED TO DELETE DATA');
                }
                if(response.ok)
                {
                    alert("DATA HAS BEEN DELETED SUCCESSFULLY")
                    settourList((prevList)=> prevList.filter(tour => tour.id !== id))
                    
                }
          }
          catch(error){
            alert(error)
          }
    }

    const deleteHandler=(id)=>{
        deletetourdata(id)
    }

    useEffect(()=>{
        fetchData()
    },[])

    const formHandler=()=>{
       navigate("/add-movies");
    }
  return (
    <Fragment>
         <Generic>
         <div className="d-flex text-center fw-bold"
         style={{top:"20px",zIndex:"1050",marginLeft:"540px"}}>
                <Button style={{background:" rgb(38, 157, 204)"}} onClick={formHandler}>Add Movies</Button>
         </div>
         </Generic>
       
    <div className="home-container">
        <p className="text-center fw-bold fs-3 text-dark text-center mt-5 mb-5" style={{fontFamily:"algerian"}}>TOURS</p>
      <div className="content">
        {
            tourdata.map((data,index)=>(
                <Row key={index} className="align-items-center justify-content-center d-flex mb-3" 
                style={{fontFamily:"algerian"}}>
                    <Col  className="d-flex justify-content-between m-1" style={{maxWidth:"50rem"}}>
                    <Col xs={3}>{data.date}</Col>
                    <Col xs={3 }>{data.place}</Col>
                    <Col xs={4}>{data.desc}</Col>
                    <Col xs={2}><Button style={{background:" rgb(38, 157, 204)"}} onClick={()=>deleteHandler(data.id)}
                    >Delete</Button></Col>
                    <Col xs={3}><Button style={{background:" rgb(38, 157, 204)"}}>BUY TICKET</Button></Col>
                    </Col>
                   
                </Row>
            ))
        }
     
      </div>
      <Footer>
      <div style={{width: "30%", height: "80px", zIndex: 20,
        alignItems:"center",fontFamily: 'Broadway, sans-serif'}}
        className="p-4 mt-1 mb-1 fs-1" 
        >
        <p className=" fw-bold text-dark text-center ">The Generics</p>
     </div>
      </Footer>
    </div>
    </Fragment>
  );
};

export default memo(Home);
