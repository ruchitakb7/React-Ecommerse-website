import React from "react"

const Alert=(props)=>{

    return(
        <div style={{
            position: "fixed",
            top: "60px",
            right: "30px",
            padding: "20px",
            backgroundColor: "rgb(38, 157, 204)",
            color: "white",
            borderRadius: "10px",
            zIndex:1050
        }}>
        {props.text}
        </div>
    )
}

export default Alert