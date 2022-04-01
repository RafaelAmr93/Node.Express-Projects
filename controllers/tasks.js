const { reset } = require("nodemon")
const TaskSchema = require("../models/tasks")

const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskSchema.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await TaskSchema.findOne({ _id: taskID })

    if (!task) {
      return res.status(404).json({ msg: `Id ${taskID} not found :(` })
    }

    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await TaskSchema.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTask = (req, res) => {
  res.send("updateTask")
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await TaskSchema.findOneAndDelete({ _id: taskID })
    if (!task) {
      return res.status(404).json({ msg: `Id ${taskID} not found :(` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
}
