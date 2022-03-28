import React  from 'react';
import classes from './CartItem.module.css';


const CartItem = (props) => {
  
 
// const[quantity,setQuantity]=useState(props.quantity);
// const onAdd=()=>{
//   setQuantity(Number(quantity)+1);
 
// }
// const onRemove=()=>{
//   if(quantity>0){
//   setQuantity(Number(quantity)-1);
//   }
//   else{
//   setQuantity(0);
//   }
  
// }



  const price = props.price.toFixed(2);
  let totalprice=Number(price)*Number(props.quantity);
  totalprice=totalprice.toFixed(2);
  

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
        <div className={classes.linebreak}>${totalprice}</div>
        
        </div>
    </li>
    
  );
};

export default CartItem;
