const TaskSchema = require("../models/tasks");

const getAllTasks = (req, res) => {
  res.send("getAllTasks");
};

const getSingleTask = (req, res) => {
  res.json({ id: req.params.id });
};

const createTask = async (req, res) => {
  const task = await TaskSchema.create(req.body);
  res.status(201).json({ task });
};

const updateTask = (req, res) => {
  res.send("updateTask");
};

const deleteTask = (req, res) => {
  res.send("deleteTask");
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
