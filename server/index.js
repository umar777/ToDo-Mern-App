const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const addTodoModel = require("./Models/todo");

app = new express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/todoDB");

app.post("/add", (req, res) => {
  const task = req.body.task;
  addTodoModel
    .create({
      task: task,
    })
    .then((result) => res.json(result))
    .catch((error) => console.log(error));
});

app.get("/get", (req, res) => {
  addTodoModel
    .find()
    .then((result) => res.json(result))
    .catch((error) => console.log(error));
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  addTodoModel
    .findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  addTodoModel
    .findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.listen(3000, () => {
  console.log("Server is running");
});
