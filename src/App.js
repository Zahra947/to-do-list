import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    //we want to keep what we have, append new tems to the array
    event.preventDefault();
    setTodos([...todos, input]);
    setInput(""); //this clears input bar each time after adding
  };
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <form>
        {" "}
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add ToDo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
