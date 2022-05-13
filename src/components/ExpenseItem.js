import "./ExpenseItem.css";

function ExpenseItem(props) {
  // must have only one root element per return statement
  return (
    // wrapping around another div
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
