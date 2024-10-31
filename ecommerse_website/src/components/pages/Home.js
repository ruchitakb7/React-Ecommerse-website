import React, {Fragment} from "react";
import Footer from "../UI/Footer";
import {Row,Col,Button} from "react-bootstrap"
import "./home.css"
import Generic from "../UI/Generic";
import { useNavigate } from "react-router-dom";

const TourList = [
    { date: "JUL16", place: "DETROIT, MI", des: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL19", place: "TORONTO, ON", des: "BUDWEISER STAGE" },
    { date: "JUL 22", place: "BRISTOW, VA", des: "JIGGY LUBE LIVE" },
    { date: "JUL 29", place: "PHOENIX, AZ", des: "AK - CHIN PAVILION" },
    { date: "AUG 2", place: "LAS VEGAS, NV", des: "T - MOBILE ARENA" },
    { date: "AUG 7", place: "CONCORD, CA", des: "P - MOBILE ARENA" }
];
const Home = () => {

    const navigate= useNavigate()

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
            TourList.map((data,index)=>(
                <Row key={index} className="align-items-center justify-content-center d-flex mb-3" 
                style={{fontFamily:"algerian"}}>
                    <Col  className="d-flex justify-content-between m-1" style={{maxWidth:"50rem"}}>
                    <Col xs={3}>{data.date}</Col>
                    <Col xs={3 }>{data.place}</Col>
                    <Col xs={4}>{data.des}</Col>
                    <Col xs={3}><Button style={{background:" rgb(38, 157, 204)"}}>BUY TICKETS</Button></Col>
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

export default Home;
