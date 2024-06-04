const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TaskModel = require("./models/Tasks");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/MyDb").then((req, res) => {
  console.log("connected to database");
  app.listen(3001, () => {
    console.log("Server Running at http://localhost:3001");
  });
});

app.post("/createTask", (req, res) => {
  TaskModel.create(req.body)
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});
app.get("/", (req, res) => {
  TaskModel.find({})
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});

app.delete("/deleteTask/:id", (req, res) => {
  const id = req.params.id;
  TaskModel.findByIdAndDelete({ _id: id })
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});
app.get("/getTask/:id", (req, res) => {
  const id = req.params.id;
  TaskModel.findById({ _id: id })
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  TaskModel.findByIdAndUpdate(
    { _id: id },
    {
      title: req.body.name,
      description: req.body.email,
      status: req.body.age,
      deadline: req.body.deadline,
    }
  )
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});
