import React from "react";
import Footer from "../UI/Footer";
import {Row,Col,Button} from "react-bootstrap"
import "./home.css"

const TourList= [
    {
        date: "JUL16",
        place: "DETROIT, MI",
        des: "DTE ENERGY MUSIC THEATRE",
        btn: "BUY TICKETS",
    },
    {
        date: "JUL19",
        place: "TORONTO, ON",
        des: "BUDWEISER STAGE",
        btn: "BUY TICKETS",
    },
    {
        date: "JUL 22",
        place: "BRISTOW, VA",
        des: "JIGGY LUBE LIVE",
        btn: "BUY TICKETS",
    },
    {
        date: "JUL 29",
        place: "PHOENIX, AZ",
        des: "AK - CHIN PAVILION",
        btn: "BUY TICKETS",
    },
    {
        date: "AUG 2",
        place: "LAS VEGAS, NV",
        des: "T - MOBILE ARENA",
        btn: "BUY TICKETS",
    },
    {
        date: "AUG 7",
        place: "CONCORD, CA",
        des: "CONCORD PAVILION",
        btn: "BUY TICKETS",
    }
]
const Home = () => {
  return (
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
  );
};

export default Home;
