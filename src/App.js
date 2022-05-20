import React, { useState } from "react";
import { Button } from "@material-ui/core";
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
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add ToDo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
