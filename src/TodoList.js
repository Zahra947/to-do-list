import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./App.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
      {/* explaining of the second expression (regex): ^: the beginning of the line of data, 
        $ :followed by the end of the line of data
        \s: stands for whitespace character
        * : 0 or more of the charachter before *
        /EXPRESSION /: // means does the expression mathches with
        /^\s*$/.test(val): uses RegExp test method to test whether a string val is empty or only contains spaces*/}
    }
    const newTodos = [todo, ...todos]; {/*[query, ...searches] to prepend an item to the front of the array */}
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };
  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />{/*the function is defined in parent component(here) and like a prop will be used in child component */}
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}
