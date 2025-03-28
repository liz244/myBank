import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Form from "./components/Form";
import ExpensesPage from "./ExpensesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expense" element={<Form />} />
        <Route path="/expenses" element={<ExpensesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
