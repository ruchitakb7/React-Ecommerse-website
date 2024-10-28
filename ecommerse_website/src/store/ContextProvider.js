import React,{useReducer} from "react";
import ContextApi from "./ConetxtApi";

const initialstate={
    items:[],
    totalQuantity:0,
    totalPrice:0
}

const cartReducer=(state,action)=>{
        
        if(action.type==="ADD-ITEM")
            {
                const isItemExist=state.items.findIndex((item)=>action.item.id===item.id)

                if(isItemExist>=0)
                {
                    alert('Item has Already In the cart')
                    return state;
                }
                else
                {
                    const  updatedList = state.items.concat(action.item);
                    const newPrice=state.totalPrice+action.item.price
                    const newQuantity=state.totalQuantity+1

                    return{
                        items:updatedList,
                        totalQuantity:newQuantity,
                        totalPrice:newPrice
                    }
            

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

    const addItemHandler=(item)=>{
        reducerHandler({type:"ADD-ITEM",item:item})
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

    return(
        <ContextApi.Provider value={cartContext}>
            {props.children}
        </ContextApi.Provider>
    )
}

export default ContextProvider;