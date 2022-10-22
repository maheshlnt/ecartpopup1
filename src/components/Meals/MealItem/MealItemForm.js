import React, { Fragment, useState, useTransition } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [show, setShow]=useState(false);
    const handleShow=(event)=>{
        event.preventDefault();
        setShow(false)}
     const handleClose=()=>{setShow(true)}
  return (
    <Fragment>
      <form className={classes.form}>
        <Input
          label="Amount"
          input={{
            id: "amount_"+props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        {/* with one {} evaluate js exp, with 2 {{}} sets as obj */}
        <button onClick={handleShow}>+ Add</button>
      </form>
      <card>
      <modal show={show}>
        <input type="text"></input>
         <button type="button" onClick={handleClose}>close</button> 
      </modal></card>
    </Fragment>
  );
};
export default MealItemForm;
