import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <h2>Let's get started!</h2>
      <div className="expenses-item1">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
      </div>
      <div className="expenses-item2">
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
      </div>
      <div className="expenses-item3">
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
      </div>
      <div className="expenses-item4">
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </div>
    </div>
  );
}

export default Expenses;
