import React, { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'


const HeaderCartButton=(props)=>{
    return <Fragment>
        <button className={classes.button} onClick={props.onClick}>
            {/* 3. for popopening */}
           <span className={classes.icon}> <CartIcon/></span>
           <span>Cart</span>  
           <span className={classes.badge}>3</span>
           </button>
        
    </Fragment>
}
export default HeaderCartButton