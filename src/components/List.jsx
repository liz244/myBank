import React from "react";

const List = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <ul style={{ paddingLeft: 0 }}>
      {expenses.map((item) => (
        <li
          key={item.id}
          style={{
            listStyle: "none",
            padding: "8px",
            borderBottom: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <span>
            {item.amount}€ — {item.category}
          </span>
          <button
            onClick={() => onDelete(item.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
              borderRadius: "4px"
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;