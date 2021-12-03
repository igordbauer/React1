import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  /* React Hook -  only inside of components -  its a special kind of variable
  allways returns an array with two spots, the first element of the array returns the variable itself and the second element of the 
  array is the update function
   - using js destructuring array we can store both of the values.
  In this case i used 'title' which means the props.title and 'setTitle' is a function 
  which  in the future i'll use to update the value of the title.
*/

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
