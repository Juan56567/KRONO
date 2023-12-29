const controller = {};
const db = require("../db/connector");
const personal = require("../models/userModel");

controller.start = (req, res) => {
  res.render("home");
  const fecha = new Date();
  const mes = fecha.getMonth() + 1;
  console.log(mes);
};



module.exports = controller;
