import React, { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton= (props) => {
    
    const cartCtx= useContext(CartContext);
    let quantity=0;
    cartCtx.items.forEach( item => {
        quantity=quantity+ Number(item.quantity)
        
    });
   
    return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}> 
        <CartIcon />
        </span>
        <span>Your Cart</span>
        <span>{cartCtx.message}</span>
    <span className={classes.badge}>{quantity}</span>
    </button>
    )
};
export default HeaderCartButton;