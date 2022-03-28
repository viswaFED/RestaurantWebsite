import classes from './Cart.module.css';
import CartCard from '../UI/CartCard';

const Cart = (props) => {
    const cartItems = (
      <ul className={classes['cart-items']}>
        {[{ id: 'c1', name: 'Sushi', amount: 1, price: 12.99 }].map((item) => (
          <li> {item.name} </li>
        ))}
      </ul>
    );

  return (
    <CartCard onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </CartCard>
  );
};

export default Cart;