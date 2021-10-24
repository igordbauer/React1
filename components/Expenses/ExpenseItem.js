import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(
    props.title
  ); /* React Hook -  only inside of components -  its a special kind of variable
  allways returns an array with two spots, the first element of the array returns the variable itself and the second element of the 
  array is the update function
   - using js destructuring array we can store both of the values.
  In this case i used 'title' which means the props.title and 'setTitle' is a function 
  which  in the future i'll use to update the value of the title.
*/

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};
export default ExpenseItem;
