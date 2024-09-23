import React from "react";
import { useState, useEffect } from "react";
import Create from "./Create";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <h2>ToDo List App</h2>
      <Create></Create>
      {todos.length === 0 ? (
        <h2>No Record</h2>
      ) : (
        todos.map((todo) => <div>{todo.task}</div>)
      )}
    </>
  );
}

export default Home;
