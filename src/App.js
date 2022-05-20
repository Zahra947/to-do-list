import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import "./styles.css";
import Todo from "./Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {}, []); //[}this make app loads once

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
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
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
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}
