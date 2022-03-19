const getAllTasks = (req, res) => {
  res.send("getAllTasks");
};

const getSingleTask = (req, res) => {
  res.json({ id: req.params.id });
};

const createTask = (req, res) => {
  res.json(req.body);
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
