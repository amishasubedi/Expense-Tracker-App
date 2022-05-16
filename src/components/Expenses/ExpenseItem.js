import React, { useState } from "react"; // to run the component function after some changes like event handlers
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  // click handler function
  const clickHandker = () => {
    setTitle("Updated"); // assign new value by calling setTitle - which is our state updating function, pass new value as argument
    console.log(title);
  };
  // must have only one root element per return statement
  return (
    // wrapping around another div
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandker}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
