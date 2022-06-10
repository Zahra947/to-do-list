import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";
import "./TodoForm.css";

export function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000), //generates random id
      text: input
    });

    return (
      <form>
        <FormControl onSubmit={handleSubmit}>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={handleChange} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          //onClick={handleClick}
          variant="contained"
          color="primary"
        >
          Add ToDo
        </Button>
      </form>
    );
  };
}
