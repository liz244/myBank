import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    setAmount("");
    setCategory("");
    navigate("/expenses");
  };

  return (
    <div className="form-container">
      <h2>Add an expense</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Catégory</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Choose a category</option>
            <option value="Food">Food</option>
            <option value="Invoices">Invoices</option>
            <option value="Shopping">Shopping</option>
            <option value="Transport">Transport</option>
            <option value="Intertainment">Intertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default Form;
