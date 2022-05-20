import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import "./styles.css";
import Todo from "./Todo";
import firebase from "./firebase";
import db from "./firebase";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //we now listen to the db from firebase
  useEffect(() => {
    //this code fires when app.js loads
    db.collection("todo")
      .orderBy("timestam", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []); //[}this make app loads once

  const addTodo = (event) => {
    //we want to keep what we have, append new tems to the array
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.Servertimestamp() //this gets data based on the firebase's server time
    });
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
