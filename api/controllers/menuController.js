const MenuItem = require("../models/menuItemModel");

exports.getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json({
      status: "success",
      results: menuItems.length,
      data: {
        menuItems,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createMenuItem = async (req, res) => {
  try {
    const newMenuItem = await MenuItem.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        menuItem: newMenuItem,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};

exports.getMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        menuItem,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getByCategory = async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ type: req.params.type });
    res.status(200).json({
      status: "success",
      results: menuItems.length,
      data: {
        menuItems,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
