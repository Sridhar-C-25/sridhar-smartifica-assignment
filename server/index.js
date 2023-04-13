const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const passagesRoute = require("./routes/passages.route");
const connectDB = require("./config/db");

// connect mongodb
connectDB();

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

// routes
app.use("/passages", passagesRoute);

// middleware for error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send({ message: errorMessage });
});

// PORT -> LIVE || LOCAL
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server started", port);
});
