import React from "react"

const ContextApi=React.createContext({
    items:[],
    totalQuantity:0,
    totalPrice:0,
    addItem:()=>{},
    removeItem:()=>{},
    adjustQuantity:()=>{}
})

export default ContextApi

