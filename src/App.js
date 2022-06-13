import React from "react";
import TodoList from "./TodoList";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <TodoList />
      </div>
    </div>
  );
}
