import React from "react";
import "../../main.scss";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";

const Todos = () => {
  return (
    <div className="todos">
      <h1>Todos</h1>
      <hr />
      <TodoTitle />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todos;
