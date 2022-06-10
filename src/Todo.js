import React, { useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
//import TodoForm from "./TodoForm";

export default function Todo({ todo, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });
  return todo.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>
        <CheckCircleIcon onClick={() => removeTodo(todo.id)} />
        <CloseIcon onClick={() => setEdit({ id: todo.id, value: todo.text })} />
      </div>
    </div>
  ));
}
