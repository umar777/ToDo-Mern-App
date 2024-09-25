import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTrashAlt, FaRegCircle } from "react-icons/fa";
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

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3000/update/" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/delete/" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>ToDo List App</h2>
      <Create addTodo={addTodo} />
      {todos.length === 0 ? (
        <h2 style={styles.noRecord}>No Record</h2>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} style={styles.todoItem}>
            <div style={styles.editIcon} onClick={() => handleEdit(todo._id)}>
              {todo.done ? <FaCheckCircle /> : <FaRegCircle />}
            </div>
            <span style={styles.todoText}>{todo.task}</span>
            <FaTrashAlt
              style={styles.trashIcon}
              onClick={() => handleDelete(todo._id)}
            />
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
  editIcon: {
    color: "#5bc0de",
    cursor: "pointer",
    marginRight: "10px",
    display: "flex",
    alignItems: "center",
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
