const express = require("express");
const router = express.Router();
const orderController = require("./../controllers/orderController");

router
  .route("/orders")
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);
router.route("/orders/:id").get(orderController.getOrder);

module.exports = router;
