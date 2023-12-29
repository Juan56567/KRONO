const controller = {};
const personal = require("../models/userModel");
controller.createEmployee = async (req, res) => {
  console.log(req.body);
  const name = req.body.newName;
  const modName = name.toUpperCase();
  const user = req.body.user;
  const password = req.body.password;
  await personal.create({
    name: modName,
    user: user,
    password: password,
  });
  res.redirect("/");
};

controller.createEmployeeView = (req, res) => {
  res.render("newEmployee");
};

module.exports = controller;
