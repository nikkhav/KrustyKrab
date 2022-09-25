const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const compression = require("compression");
const cors = require("cors");

const menuRouter = require("./routes/menuRoutes");
const adminRouter = require("./routes/adminRoutes");

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(compression());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.use("/api/v1/menu", menuRouter);
app.use("/api/v1/admin", adminRouter);

app.use(express.static(path.join(__dirname, "/public")));
app.use("*", express.static(path.join(__dirname, "/public")));

module.exports = app;
