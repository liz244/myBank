// src/components/List.jsx
import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const List = ({ filter }) => {
  const { expenses, removeExpense } = useContext(ExpenseContext);

  // Appliquer le filtre si spécifié
  const filteredExpenses = filter
    ? expenses.filter((expense) => expense.category === filter)
    : expenses;

  return (
    <div className="list-container">
      <h2>Expenses List</h2>
      {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <ul>
          {filteredExpenses.map((expense) => (
            <li key={expense.id}>
              <span>
                {expense.category} - {expense.amount}€
              </span>
              <button onClick={() => removeExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
