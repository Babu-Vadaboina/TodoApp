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
app.get("/get", (req, res) => {
  TodoModel.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task,
  })
    .then((newTodo) => {
      res.json(newTodo);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
    .then((updatedTodo) => {
      res.json(updatedTodo);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((deletedTodo) => {
      res.json(deletedTodo);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
