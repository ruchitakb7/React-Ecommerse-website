import React from "react";


const Generic=(props)=>{
    return (
        <div className="p-4 mt-1 mb-1 " 
        style={{backgroundColor:"gray",fontFamily: 'Broadway, sans-serif',fontSize:"80px"}}> 
         <p className=" fw-bold text-dark text-center ">The Generics</p>
         {props.children}
        </div>

    ) 
}   

export default Generic