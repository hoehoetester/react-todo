import React, { Component } from "react";
import TodoItem from "./TodoItem";

export interface ITodosProps {
  todos: any;
}

class Todos extends Component<ITodosProps> {
  render() {
    const todoList = this.props.todos.map((todo: any) => (
      <TodoItem key={todo.id} todo={todo} />
    ));

    return <div>{todoList}</div>;
  }
}

export default Todos;
