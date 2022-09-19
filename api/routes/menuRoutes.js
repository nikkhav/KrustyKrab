const express = require("express");
const router = express.Router();
const menuController = require("./../controllers/menuController");

router
  .route("/")
  .get(menuController.getAllMenuItems)
  .post(menuController.createMenuItem);

module.exports = router;
