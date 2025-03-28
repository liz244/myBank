import React from "react";

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Filter by category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="">All</option>
        <option value="Food">Food</option>
        <option value="Invoices">Invoices</option>
        <option value="Shopping">Shopping</option>
        <option value="Transport">Transport</option>
        <option value="Intertainment">Intertainment</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default Filter;