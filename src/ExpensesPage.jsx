import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import List from "./components/List";

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("mybank-expenses");
    if (saved) {
      setExpenses(JSON.parse(saved));
    }
  }, []);

  const handleDelete = (id) => {
    const updated = expenses.filter((e) => e.id !== id);
    setExpenses(updated);
    localStorage.setItem("mybank-expenses", JSON.stringify(updated));
  };

  const filteredExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

    const totalAmount = filteredExpenses.reduce((acc, exp) => acc + exp.amount, 0);


  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h2>My Expenses</h2>
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <List expenses={filteredExpenses} onDelete={handleDelete} />

      <div className="total">
  Total: {totalAmount.toFixed(2)} €
</div>

    </div>
    
  );
};

export default ExpensesPage;