const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectionDB = require("./db/connect")
require("dotenv").config()
const notFound = require("./middleware/not-found")

const port = 5000

//middleware
app.use(express.json())
app.use(express.static("./docs"))

//routes
app.use("/api/v1/tasks", tasks)
app.use(notFound)

//db connection
connectionDB(process.env.MONGO_URI)

//server listening
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}...`)
})
