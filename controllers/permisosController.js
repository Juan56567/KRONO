const db = require("../db/connector");
const controller = {};

controller.permisos = (req, res) => {
  res.render("permisos");
};

module.exports = controller;
