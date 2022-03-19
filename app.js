const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectionDB = require("./db/connect");
require("dotenv").config();

const port = 5000;

//middleware
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

//db connection
connectionDB(process.env.MONGO_URI);

//server listening
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}...`);
});
