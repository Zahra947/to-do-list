import React, { useState, useEffect, useRef } from "react";
import { Button } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";
import "./App.css";

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000), //generates random id
      text: input
    });
    setInput("");
  };

  return (
    <form>
      <FormControl onSubmit={handleSubmit}>
        <InputLabel>Write a todo</InputLabel>
        <Input value={input} onChange={handleChange} ref={inputRef} />
      </FormControl>
      <Button
        disabled={!input}
        type="submit"
        onClick={handleSubmit}
        variant="contained"
        color="primary"
      >
        Add ToDo
      </Button>
    </form>
  );
}
