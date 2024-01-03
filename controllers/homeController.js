const controller = {};
const db = require("../db/connector");
const personal = require("../models/userModel");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

controller.start = (req, res) => {
  res.render("home");
  const fecha = new Date();
  const mes = fecha.getMonth() + 1;
};

controller.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

module.exports = controller;
