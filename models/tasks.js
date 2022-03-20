const mongoose = require("mongoose");

//only the key/values passed here will be created as an document
//if other key/values are passed mongoose will ignore

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model("TaskSchema", TaskSchema);
