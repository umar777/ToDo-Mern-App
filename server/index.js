const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

app = new express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running");
});
