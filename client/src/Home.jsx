import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Create from "./Create";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>ToDo List App</h2>
      <Create />
      {todos.length === 0 ? (
        <h2 style={styles.noRecord}>No Record</h2>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} style={styles.todoItem}>
            <input type="checkbox" style={styles.checkbox} />
            <span style={styles.todoText}>{todo.task}</span>
            <FaTrashAlt style={styles.trashIcon} />
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  noRecord: {
    textAlign: "center",
    color: "#888",
  },
  todoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  checkbox: {
    marginRight: "10px",
  },
  todoText: {
    flex: 1,
    fontSize: "16px",
    color: "#333",
  },
  trashIcon: {
    color: "#d9534f",
    cursor: "pointer",
  },
};

export default Home;
