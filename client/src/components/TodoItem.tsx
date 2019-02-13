import React, { Component } from "react";

export interface ITodoItemProps {
  todo: any;
}

class TodoItem extends Component<ITodoItemProps> {
  render() {
    return <p>{this.props.todo.title}</p>;
  }
}

export default TodoItem;
