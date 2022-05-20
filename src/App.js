import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    //we want to keep what we have, append new tems to the array
    setTodos([...todos, input]);
  };
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={addTodo}>Add ToDo</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
