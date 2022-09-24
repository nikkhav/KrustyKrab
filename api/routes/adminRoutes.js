const express = require("express");
const router = express.Router();
const orderController = require("./../controllers/orderController");
const adminController = require("./../controllers/adminController");

router
  .route("/orders")
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);
router
  .route("/orders/:id")
  .get(orderController.getOrder)
  .patch(orderController.changeOrderStatus)
  .delete(orderController.deleteOrder);

router.route("/login").post(adminController.loginAdmin);
router.route("/register").post(adminController.createAdmin);
router.route("/admins").get(adminController.getAllAdmins);

module.exports = router;
