const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  delivery: {
    type: Boolean,
    required: [true, "An order must have a delivery type"],
  },
  orderItems: {
    type: Array,
    required: [true, "An order must have at least one item"],
  },
  orderTotal: {
    type: Number,
    required: [true, "An order must have a total"],
  },
  orderDate: {
    type: String,
    required: [true, "An order must have a date"],
  },
  orderTime: {
    type: String,
    required: [true, "An order must have a time"],
  },
  orderStatus: {
    type: String,
    default: "new",
  },
  clientName: {
    type: String,
    required: [true, "An order must have a client name"],
  },
  clientPhone: {
    type: String,
  },
  clientAddress: {
    type: Object,
  },
  clientComment: {
    type: String,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
