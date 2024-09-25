const mongoose = require("mongoose");

const addTodoSchema = new mongoose.Schema({
  task: String,
  done: {
    type: Boolean,
    default: false,
  },
});

const addTodoModel = mongoose.model("todos", addTodoSchema);

module.exports = addTodoModel;
