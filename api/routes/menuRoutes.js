const express = require("express");
const router = express.Router();
const menuController = require("./../controllers/menuController");

router
  .route("/")
  .get(menuController.getAllMenuItems)
  .post(menuController.createMenuItem);

router.route("/byCategory/:type").get(menuController.getByCategory);

router.route("/:id").get(menuController.getMenuItem);

module.exports = router;
