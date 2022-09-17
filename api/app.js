const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Krusty Krab API",
    requestedAt: req.requestTime,
  });
});

module.exports = app;
