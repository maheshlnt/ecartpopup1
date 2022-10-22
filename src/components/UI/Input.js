import React, { Fragment } from "react";
import classes from './Input.module.css';

const Input=(props)=>{
    return         <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
        </div>
}
export default Input




 {/* {label props.input.id} added as {...props.input}for inp,wit  spread oper auto added type=txt  */}
       