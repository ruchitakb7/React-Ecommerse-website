import React,{useReducer,useState,useEffect} from "react";
import ContextApi from "./ConetxtApi";
import Alert from "../components/UI/Alert";

const initialstate={
    items:[],
    totalQuantity:0,
    totalPrice:0
}

const cartReducer=(state,action)=>{
        
    if(action.type==="ADD-ITEM")
    {                 
                const  updatedList = state.items.concat(action.item);
                const newPrice=state.totalPrice+action.item.price
                const newQuantity=state.totalQuantity+1

                return{
                        items:updatedList,
                        totalQuantity:newQuantity,
                        totalPrice:newPrice,
                        isItemExist:false
                    }
    }
    if(action.type==="REMOVE-ITEM")
    {
                const isItemExist=state.items.findIndex((item)=>action.id===item.id)

                const updatedList=state.items.filter((item)=>item.id!==action.id)
                if(updatedList.length===0)
                {
                    return initialstate;
                }
                const removedItem=state.items[isItemExist]
                const newQuantity=state.totalQuantity-removedItem.quantity

                const newPrice=state.totalPrice-removedItem.quantity*removedItem.price
                console.log(updatedList)
        
                return{
                    items:updatedList,
                    totalQuantity:+newQuantity,
                    totalPrice:+newPrice
                }
                
    }
    
    if(action.type==="ADJUST-QUANTITY")
    {
        const isItemExist=state.items.findIndex((item)=>action.item.id===item.id)

        const changedItem=state.items[isItemExist]

        const updated={...changedItem,quantity:action.item.quantity}

        const updatedList=[...state.items]

        updatedList[isItemExist]=updated

        const newQuantity=updatedList.reduce((total,item)=>{
            total.sum = total.sum+item.price*item.quantity; 
            total.count =total.count+item.quantity; 
            return total; 
        }, { sum: 0, count: 0 })

        return{
            items:updatedList,
            totalQuantity:newQuantity.count,
            totalPrice:newQuantity.sum
        }
    }
   
    return initialstate;
}

const ContextProvider=(props)=>{
  
    const [currentstate,reducerHandler]=useReducer(cartReducer,initialstate)
    const [addcartStatus,setStatus]=useState("")

    const addItemHandler=(item)=>{
        
        const itemExists = currentstate.items.findIndex((existingItem) => existingItem.id === item.id);

        if (itemExists!==-1) {
            setStatus(`${item.title} is already in the cart!`);
        } else {
            reducerHandler({ type: "ADD-ITEM", item: item });
            setStatus(`${item.title} has been added to the cart!`);
        }
        setTimeout(() => {
            setStatus("");
        }, 2000);
    }

    const removeItemHandler=(id)=>{
        reducerHandler({type:"REMOVE-ITEM",id:id})
        
    }

    const quantityHandler=(item)=>{
        reducerHandler({type:"ADJUST-QUANTITY",item:item})
    }

    const cartContext={
        items:currentstate.items,
        totalQuantity:currentstate.totalQuantity,
        totalPrice:currentstate.totalPrice,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
        adjustQuantity:quantityHandler
       
    }

    useEffect(()=>{
        console.log(addcartStatus)
    },[addcartStatus])

    return(
        <ContextApi.Provider value={cartContext}>
           {addcartStatus!=="" && (
                <Alert text={addcartStatus}></Alert>
            )}
            {props.children}
        </ContextApi.Provider>
    )
}

export default ContextProvider;