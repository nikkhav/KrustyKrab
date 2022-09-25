const app = require("./app");
const dotenv = require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");

//const DB = process.env.DATABASE.replace("<password>", process.env.DB_PASSWORD);
const DB =
  "mongodb+srv://nikkhav:eiNfj2YTMuJEm0G3@menu.lapfejg.mongodb.net/KrustyKrabs?retryWrites=true";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful"));

app.listen(port);
