const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A menu item must have a title"],
  },
  description: {
    type: String,
    required: [true, "A menu item must have a description"],
  },
  price: {
    type: Number,
    required: [true, "A menu item must have a price"],
  },
  image: {
    type: String,
  },
  type: {
    type: String,
    required: [true, "A menu item must have a type"],
  },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;
