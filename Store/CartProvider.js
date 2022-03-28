import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider =(props) =>{
    const [items, updateItems]= useState([]);
    
    const addItemToCartHandler= (item) =>{
        let hasItem=false;
        const newItemArray=[ ...items];
        newItemArray.forEach((element,index )=> {
            if(item.id===element.id){
            hasItem=true;
                newItemArray[index].quantity=Number(newItemArray[index].quantity)+Number(item.quantity);
                
            }
        });
        if(hasItem===false)
        updateItems([...items,item]);
        else
        updateItems(newItemArray);
    };
    const removeItemFromCartHandler=((item) =>{
        const newItemArray=[ ...items];
        newItemArray.forEach((element,index )=>{
        if(item.id===element.id)
        {
              newItemArray.splice(index,1)
              
        }
       })
       updateItems(newItemArray);
    }
    );
    
    const cartContext ={
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};


export default CartProvider;