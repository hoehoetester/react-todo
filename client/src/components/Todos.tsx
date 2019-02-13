import React, { Component } from "react";

export interface ITodosProps {
  todos: any;
}

class Todos extends Component<ITodosProps> {
  render() {
    const todoList = this.props.todos.map((x: any) => (
      <li key={x.id}>{x.title}</li>
    ));

    return <div>{todoList}</div>;
  }
}

export default Todos;
