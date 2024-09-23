const mongoose = require("mongoose");

const addTodoSchema = new mongoose.Schema({
  task: String,
});

const addTodoModel = mongoose.model("todos", addTodoSchema);

module.exports = addTodoModel;
