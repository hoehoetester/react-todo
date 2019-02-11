const express = require("express");
var bodyParser = require("body-parser");
const app = express();

var PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded()); // to support URL-encoded bodies

let todoList = [
  { id: 1, title: "one", completed: false },
  { id: 2, title: "two", completed: true },
  { id: 3, title: "three", completed: false }
];

app.get("/api/v1/hello", (req, res) => {
  res.send({ test: "test desu..." });
});

app.get("/api/v1/todos", (req, res) => {
  res.send(todoList);
});

app.post("/api/v1/todo", (req, res) => {
  const newTodo = {
    id: new Date().valueOf(),
    title: req.body.title,
    completed: false
  };
  todoList = [...todoList, newTodo];
  res.send(todoList);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
