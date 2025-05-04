const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require("./Models/Todo");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://vijayvadaboina700:dy0SCWO704NX6R2t@dev.eacdetu.mongodb.net/Todo_App"
);
app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task,
  })
    .then((res) => {
      res.json(res);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
