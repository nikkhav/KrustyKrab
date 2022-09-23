const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");

exports.createAdmin = async (req, res) => {
  try {
    const { username, password, name } = req.body;

    // Check if the username already exists
    const candidate = await Admin.findOne({ username });

    // If the username already exists, return an error
    if (candidate) {
      return res.status(400).json({
        status: "error",
        message: "This username already exists",
      });
    }

    // If the username does not exist, create a new admin
    const hashPassword = bcrypt.hashSync(password, 7);
    const newAdmin = await Admin.create({
      username,
      password: hashPassword,
      name,
    });
    res.status(201).json({
      status: "success",
      data: {
        newAdmin,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    // If the user does not exist, return an error
    if (!admin) {
      return res.status(400).json({
        status: "error",
        message: `User ${username} does not exist`,
      });
    }
    // Validate the password
    const validPassword = bcrypt.compareSync(password, admin.password);

    if (!validPassword) {
      return res.status(400).json({
        status: "error",
        message: "Invalid password",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Admin logged in successfully",
      data: {
        admin,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json({
      status: "success",
      data: {
        admins,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
