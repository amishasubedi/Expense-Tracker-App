import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // mutliple states vs single state
  // each state work seperately
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   )};

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // safest way
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //    setUserInput ({
    //       ...userInput,
    //       enteredDate: event.target.value,
    //     });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // default js behavior

    const expenseData = {
      title: enteredTitle,
      amoount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // Two-way binding when working with forms
    // console.log(expenseData);
    props.onSaveExpenseData(); // this function is defined in NewExpense.js, pointer edit is passed in that component.
    setEnteredTitle(""); // clearing input after form is submitted
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    // default browser behavior
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="cancel" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
