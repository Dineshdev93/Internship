require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const conndb = require("./db/conn");
conndb();
// app.use(express.json())
const colors = require("colors");
const PORT = 6060;

app.get("/", (req, res) => {
  res.send("app is working");
});

app.listen(PORT, () => {
  console.log(`Server is running at port no${PORT}`.bgWhite);
});
