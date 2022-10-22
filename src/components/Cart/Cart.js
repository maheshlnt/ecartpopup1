import React from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css'


const Cart=(props)=>{
    const cartItems=<ul className={classes['cart-items']}>{[
        {id:'c1', name:"mahesh", price:22.34, amount:12}]
        .map(item=><li>{item.name}</li>)}
        </ul>
    return <Modal key="2" onClose={props.onClose}>
        
        {cartItems}
        <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.34</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart