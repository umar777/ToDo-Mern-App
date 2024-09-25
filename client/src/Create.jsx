import React, { useState } from "react";
import axios from "axios";

function Create({ addTodo }) {
  const [task, setTask] = useState();

  const handleAdd = () => {
    if (task.trim()) {
      axios
        .post("http://localhost:3000/add", { task: task })
        .then((result) => {
          console.log(result);
          addTodo(result.data);
          setTask("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div style={styles.createContainer}>
      <input
        type="text"
        placeholder="Enter a Todo Item"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={styles.input}
      />
      <button type="button" onClick={handleAdd} style={styles.addButton}>
        Add
      </button>
    </div>
  );
}

const styles = {
  createContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "70%",
    marginRight: "10px",
    outline: "none",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#5cb85c",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Create;
