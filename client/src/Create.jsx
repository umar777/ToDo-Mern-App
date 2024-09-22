import React, { useState } from "react";

function Create() {
  const [task, setTask] = useState();

  const handleAdd = () => {};

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter a Todo Item"
        onChange={() => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default Create;
