import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import TodoForm from "./TodoForm";
import "./App.css";

export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ""
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "d-row todo-row complete" : "d-row todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <EditIcon
          className="edit-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
        <CloseIcon className="delet-icon" onClick={() => removeTodo(todo.id)} />
      </div>
    </div>
  ));
}
