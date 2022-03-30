const mongoose = require("mongoose");

//only the key/values passed here will be created as an document
//if other key/values are passed mongoose will ignore

//validators help to make input safer
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a name"],
    trim: true,
    maxlength: [20, "Name max lenght is 20 characters"],
    minlength: [1, "Name min lenght is 1 character"]
  },
  //a task is by default not completed (false)
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("TaskSchema", TaskSchema);
