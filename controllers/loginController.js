const controller = {};
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

controller.loginLoad = (req, res) => {
  res.clearCookie("token");
  res.render("login");
};

controller.auth = async (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  const query = await userModel.findOne({ where: { user: user } });

  if (query == null) {
    res.redirect("/");
  } else {
    const queryPass = query.dataValues.password;

    if (queryPass == password) {
      const token = jwt.sign(query.dataValues, process.env.secret);
      res.cookie("token", token, { maxAge: 600000, httpOnly: true });
      res.redirect("/home");
    } else {
      res.redirect("/");
    }
  }
};

module.exports = controller;
