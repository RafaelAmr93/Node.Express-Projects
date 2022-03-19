const mongoose = require("mongoose");

async function connectionDB(url) {
  try {
    await mongoose
      .connect(url)
      .then(() => console.log("Connected to the database TASK MANAGER"));
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectionDB;
