import React, { Component } from "react";
import axios from "axios";
import "./App.scss";

import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "one", completed: false },
      { id: 2, title: "two", completed: true },
      { id: 3, title: "three", completed: false }
    ]
  };

  componentDidMount() {
    axios.get("/hello").then(res => console.log(res.data.test));
  }
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
