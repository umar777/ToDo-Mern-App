import React from "react";
import { useState, useEffect } from "react";
import Create from "./Create";

function Home() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h2>ToDo List App</h2>
      <Create></Create>
      {todos.length === 0 ? (
        <h2>No Record</h2>
      ) : (
        todos.map((todo) => <div>{todo}</div>)
      )}
    </>
  );
}

export default Home;
