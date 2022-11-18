import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  /*The useRef Hook allows you to persist values between renders.
    It can be used to store a mutable value that does not cause a re-render when updated.
    It can be used to access a DOM element directly. */
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
    <form className="d-row">
      {/* here i used ternary operator to write if/else conditions*/}
      {/*add a ref attribute to an element to access it directly in the DOM*/}
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            type="text"
            ref={inputRef}
            className="col-sm-8 todo-input edit"
          />
          <button onClick={handleSubmit} className="col-sm-4 todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            type="text"
            className="col-sm-8 todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="col-sm-4 todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}
